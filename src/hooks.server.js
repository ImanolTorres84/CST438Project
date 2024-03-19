import { redirect } from '@sveltejs/kit';
import { prisma } from "$lib/server/prisma";
import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";

export const auth = SvelteKitAuth({
    providers: [
        Google({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ]
});

// Unprotected routes go here!
const unProtectedRoutes = ['/', '/login', '/register', '/auth/callback/google', '/auth'];

export const handle = async ({ event, request, resolve }) => {
    if (unProtectedRoutes.includes(event.url.pathname)) {
        return auth.handle({ event, request, resolve });
    } else {
        const sessionId = event.cookies.get('session');
        if (!sessionId) {
            throw redirect(303, '/');
        }

        const userInfo = await prisma.user
            .findFirst({
                where: { session: sessionId },
            });

        if (userInfo) {
            event.locals.user = {
                id: userInfo.id,
                isAuthenticated: true,
                email: userInfo.email,
                username: userInfo.username,
            };
        } else {
            if (!unProtectedRoutes.includes(event.url.pathname)) {
                throw redirect(303, '/');
            }
        }
    }
};