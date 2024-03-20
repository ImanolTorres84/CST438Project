import type { Actions } from "$types";
import { prisma } from "$lib/server/prisma";

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
