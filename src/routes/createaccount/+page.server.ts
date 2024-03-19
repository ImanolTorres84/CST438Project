import type { Actions } from "$types";
import { redirect } from '@sveltejs/kit';
import * as argon2 from "argon2";
import { prisma } from "$lib/server/prisma";
interface RegisterInformation {
    username: string,
    email: string,
    password: string
}
export const actions: Actions = {
    default: async ({ request }) => {
        const info = Object.fromEntries(await request.formData()) as RegisterInformation;
        console.log(info);
        const allUsers = await prisma.user.findMany();
        console.log(allUsers);

        // TODO put code here to check to see if someone with that username 
        // Already exists.
        const user = await prisma.user
            .findFirst({
                where: { username: info.username },
            });
        if (!user) {
            const user = await prisma.user.create({
                data: {
                  username: info.username,
                  email: info.email,
                  passwordHash: await argon2.hash(info.password),
                  session: "",
                },
              });
              
              console.log("Created user: ", user);
              return { success: true }
        }
    }

};
