import type { Actions } from "$types";
import { redirect } from '@sveltejs/kit';
import * as argon2 from "argon2";
import { prisma } from "$lib/server/prisma";

interface LoginInformation {
    email: string,
    password: string
}

export const actions: Actions = {
    default: async ({ request }) => {
        const info = Object.fromEntries(await request.formData()) as LoginInformation;
        console.log(info);
        const allUsers = await prisma.user.findMany();
        console.log(allUsers);
        // TODO put code here to check to see if someone with that username 
        // Already exists.
        const user = await prisma.user
            .findFirst({
                where: { email: info.email },
            });
        if (user && await argon2.verify(user.passwordHash, info.password)) {
            console.log("Successful login");
            return { success: true }

        }
    }


};