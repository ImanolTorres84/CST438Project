import type { Actions } from "./$types";

export const actions: Actions = {
	default: async ({ request }) => {
        const { username, password } = Object.fromEntries(await request.formData()) as { username: string, password: string };
        console.log("username:", username, "password:", password);

        // TODO put code here to check to see if someone with that username 
        // Already exists.
	}
};
