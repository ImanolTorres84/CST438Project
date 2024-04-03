// api/user.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserById(userId) {
    return await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
}
