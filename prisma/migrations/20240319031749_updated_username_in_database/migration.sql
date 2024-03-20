-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "passwordSalt" TEXT NOT NULL,
    "session" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
<<<<<<<< HEAD:prisma/migrations/20240319055822_init/migration.sql
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
========
>>>>>>>> usernamechange:prisma/migrations/20240319031749_updated_username_in_database/migration.sql
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
