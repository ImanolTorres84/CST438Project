import type { Actions } from "$types";
import * as argon2 from "argon2";
import { redirect } from '@sveltejs/kit';
import { prisma } from "$lib/server/prisma";
import { z, ZodError } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const registerSchema = z
    .object({
        username: z
            .string({ required_error: 'Username is required' })
            .min(1, { message: 'Username must be at least 1 character' })
            .max(64, { message: 'Username must be less than 64 characters' })
            .trim(),
        password: z
            .string({ required_error: 'Password is required' })
            .min(6, { message: 'Password must be at least 6 characters' })
            .max(32, { message: 'Password must be less than 32 characters' })
            .trim(),
    });

interface LoginInfo {
    username: string,
    password: string,
}

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const info = Object.fromEntries(await request.formData()) as LoginInfo;
        try {
            // Validate the form data
            registerSchema.parse(info); 
        } catch (err) { // Catch any errors.
            if (err instanceof ZodError) {
                const errors = {} as Record<string, string>;
                err.errors.forEach((e) => {
                    errors[e.path.join('.')] = e.message;
                });
                return {
                    data: info,
                    errors,
                };
            } else { // Other types of errors!
                console.error('Validation error:', err);
            }
        }

        const user = await prisma.user.findFirst({
            where: { username: info.username }
        });

        if (user) {
            if (await argon2.hash(info.password + user.passwordSalt) != user.passwordHash) {
                return {
                    error: "Invalid username or password!"
                };
            }
            const session = uuidv4();
            cookies.set('session', session, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: false,
                maxAge: 60 * 60 * 24 * 7 // one week
            });
            redirect(303, "/account");
        } else {
            return {
                error: "Invalid username or password!"
            };
        }
    },
};