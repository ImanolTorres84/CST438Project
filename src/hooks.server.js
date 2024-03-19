import { redirect } from '@sveltejs/kit';
import { prisma } from "$lib/server/prisma";

// Unprotected routes go here!
const unProtectedRoutes = ['/', '/login', '/register'];

export const handle = async ({ event, request, resolve }) => {
    const sessionId = event.cookies.get('session');
    if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
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

    return resolve(event);
};