import { redirect } from '@sveltejs/kit';
import { prisma } from "$lib/server/prisma";
import { auth } from "./auth";

// Unprotected routes go here!
const unProtectedRoutes = [
    '/', 
    '/login', 
    '/register', 
    '/auth/callback/google',
    '/auth',
    '/signin',
    '/signout'
];

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