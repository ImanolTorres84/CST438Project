import type { Actions } from "./$types";
import { prisma } from "$lib/server/prisma";

export const actions: Actions = {
    default: async ({ request }) => {
        const { username, password } = Object.fromEntries(await request.formData()) as { username: string, password: string };
        console.log("username:", username, "password:", password);
        const allUsers = await prisma.user.findMany();
        console.log(allUsers);
        
        // TODO put code here to check to see if someone with that username 
        // Already exists.
    }
};
