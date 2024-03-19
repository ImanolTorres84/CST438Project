// Main file for protecting our routes. If a session is invalid
// we dont allow access to protect routes!

import { redirect } from '@sveltejs/kit';
import { prisma } from "$lib/server/prisma";

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

    const currentUser = userInfo;
    if (currentUser) {
        event.locals.user = {
            isAuthenticated: true,
            email: currentUser.email,
            id: currentUser.id
        };
    } else {
        if (!unProtectedRoutes.includes(event.url.pathname)) {
            throw redirect(303, '/');
        }
    }
    return resolve(event);
};