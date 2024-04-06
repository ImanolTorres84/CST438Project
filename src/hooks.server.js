import { redirect } from '@sveltejs/kit';
import { prisma } from "$lib/server/prisma";
import { auth } from "./auth";

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
            throw redirect(303, '/'); // Redirect to home page if session ID is not found
        }

        const userInfo = await prisma.user.findFirst({
            where: { session: sessionId },
        });

        if (userInfo) {
            // Set user information in event locals for authenticated routes
            event.locals.user = {
                id: userInfo.id,
                isAuthenticated: true,
                email: userInfo.email,
                username: userInfo.username,
            };
        } else {
            // Redirect to home page if user information is not found
            throw redirect(303, '/');
        }

        return await resolve(event);
    }
};
