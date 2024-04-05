import type { Actions } from "$types";
import * as argon2 from "argon2";
import { redirect } from '@sveltejs/kit';
import { prisma } from "$lib/server/prisma";
import { z, ZodError } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const loginSchema = z
    .object({
        username: z.string({ required_error: 'Username is required' }),
        password: z.string({ required_error: 'Password is required' })
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
            loginSchema.parse(info); 
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
            if (await argon2.verify(user.passwordHash, info.password + user.passwordSalt)) {
                const session = uuidv4();
                cookies.set('session', session, {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',
                    secure: false,
                    maxAge: 60 * 60 * 24 * 7 // one week
                });
                await prisma.user.update({
                    where: { username: info.username },
                    data: {session}
                  });
                return redirect(303, '/account');
            } else {
                return {
                    error: "Invalid username or password!"
                };
            }
        } else {
            return {
                error: "Invalid username or password!"
            };
        }
    },
};
