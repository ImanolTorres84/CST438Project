import type { Actions, PageServerLoad } from "$types";
import { prisma } from "$lib/server/prisma";
import type { User } from "lucide-svelte";
import { userInfo } from "os";

interface UserInfo {
    username: string,
    email: string,
}
export const actions: Actions = {
    updateProfile: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());
        const userId = parseInt(formData.userId); // Assuming you have user id available
        
        try {
            await prisma.user.update({
                where: { id: userId },
                data: {
                    firstname: formData.firstname,
                    email: formData.email,
                },
            });
            return { success: true };
        } catch (error) {
            console.error("Error updating profile:", error);
            return { error: "Failed to update profile" };
        }
    }
};
export const load = (async ({ cookies }) => {
    const sessionid = cookies.get('sessionid');
   const user = await prisma.user.findFirst({
        where: {
            session: sessionid
        }
    });
    console.log(user);
    // return UserInfo{username: user?.username, email: user?.email};
  }) satisfies PageServerLoad;
