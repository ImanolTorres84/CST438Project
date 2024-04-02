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
        email: z
            .string({ required_error: 'Email is required' })
            .min(1, { message: 'Email must be at least 1 character' })
            .max(64, { message: 'Email must be less than 64 characters' })
            .email({ message: 'Email must be a valid email address' }),
        password: z
            .string({ required_error: 'Password is required' })
            .min(6, { message: 'Password must be at least 6 characters' })
            .max(32, { message: 'Password must be less than 32 characters' })
            .trim(),
        verifypassword: z
            .string({ required_error: 'Password is required' })
            .min(6, { message: 'Password must be at least 6 characters' })
            .max(32, { message: 'Password must be less than 32 characters' })
            .trim(),
    })
    .superRefine(({ verifypassword, password }, ctx) => {
        if (verifypassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'Password and Confirm Password must match',
                path: ['password']
            });
            ctx.addIssue({
                code: 'custom',
                message: 'Password and Confirm Password must match',
                path: ['passwordConfirm']
            });
        }
    });

interface RegisterInformation {
    username: string,
    email: string,
    password: string,
    verifypassword: string,
}

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const info = Object.fromEntries(await request.formData()) as RegisterInformation;
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
            where: {
                OR: [
                    { email: info.email },
                    { username: info.username }
                ]
            }
        });

        if (!user) {
            const passwordSalt = uuidv4();
            const session = uuidv4();

            const user = await prisma.user.create({
                data: {
                    username: info.username,
                    email: info.email,
                    passwordHash: await argon2.hash(info.password + passwordSalt),
                    passwordSalt,
                    session,
                },
            });

            cookies.set('session', session, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: false,
                maxAge: 60 * 60 * 24 * 7 // one week
            });

            return redirect(303, '/account');
        } else {
            return {
                errors: {
                    email: "Email might already exist!",
                    username: "Username might already exist!"
                },
            };
        }
    },
};