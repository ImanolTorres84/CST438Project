/// The purpose of this file is to prevent a new database connection
/// on every single hot reload (I.E everytime you fucking save)

import { PrismaClient } from "@prisma/client"

const prisma = App.Locals.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") {
	App.Locals.prisma = prisma
}

export { prisma }