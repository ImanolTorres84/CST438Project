import type { Actions } from "$types";
import * as argon2 from "argon2";
import { redirect } from '@sveltejs/kit';
import { prisma } from "$lib/server/prisma";
import { z, ZodError } from 'zod';

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
		passwordConfirm: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim(),
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
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
    password: string
}

export const actions: Actions = {
    default: async ({ request }) => {
        const info = Object.fromEntries(await request.formData()) as RegisterInformation;
        try {
            await registerSchema.parseAsync(info); // Validate the form data
        } catch (err) {
            if (err instanceof ZodError) {
                const errors = {} as Record<string, string>;
                err.errors.forEach((e) => {
                    errors[e.path.join('.')] = e.message;
                });
                return {
                    data: info,
                    errors,
                };
            } else {
                console.error('Validation error:', err);
            }
        }

        const user = await prisma.userc
            .findFirst({
                where: { email: info.email },
            });

        if (!user) {
            const user = await prisma.user.create({
                data: {
                    firstname: info.firstname,
                    lastname: info.lastname,
                    email: info.email,
                    passwordHash: await argon2.hash(info.password),
                    session: "",
                },
            });
            throw redirect(303, "/login");
        }
    },
};