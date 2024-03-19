# Warnings

- If you commit directly to master and break stuff you will be tried for your crimes.
- Master branch should be STABLE. Anyone can clone and have it working, dev can be broken.
- Do not commit files that are side effects of compilation. The .gitignore should be respected.

# Getting Started

Install the following:

- Docker https://www.docker.com/products/docker-desktop/
- Visual Studio Code https://code.visualstudio.com/
- Git https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Learn the following:

- intro to dev containers - https://www.youtube.com/watch?v=b1RavPr_878
- more dev container stuff - https://code.visualstudio.com/docs/devcontainers/containers#_getting-started
- intro to svelte(kit) - https://www.youtube.com/watch?v=yG2UlXr9k9Q
- skeleton ui - https://www.skeleton.dev/
- tailwind - https://www.youtube.com/watch?v=mr15Xzb1Ook
- prisma - https://www.youtube.com/watch?v=rLRIB6AF2Dg
- argon2 - https://www.npmjs.com/package/argon2

### Developing

- Open the project in visual studio code then open it as a dev container.
- Let the dev container build, this might take some time.

Now run the following commands:

```bash
#
# These commands only need to be run once when you build the dev container!!!
#

# Start the postgres database.
service postgresql start
service postgresql status # check to make sure its running!
# switch to postgres account
su postgres
# create user
psql -c "CREATE USER pawsadmin WITH SUPERUSER PASSWORD 'pawspassword'";
# create database, this takes a few seconds
psql -c "CREATE DATABASE pawsconnect";
# back to root
exit
# install deps
npm install
# create the tables in the database.
npx -y prisma db push
```

This is the only command you need to run from the terminal from now on:

```bash
# Start postgresql
service postgresql start
# Start the development server
npm run dev
```

You should be able to go to `http://localhost:3006` if everything works. You can also inspect the database using prisma studio by running the following command:

```bash
# This will make another web server to view the database.
npx prisma studio
```

### Database

We are using Prisma and Postgres for our database. 

- Username: `pawsadmin`
- Password: `pawspassword`
- Database: `pawsconnect`

##### Prisma

Prisma is an ORM that allows us to define schemas without writing any SQL. You can see examples of prisma here: https://playground.prisma.io/examples/reading/find/find-all?path=examples&host=playground.prisma.io

You will only be able to interface with the database if you are running inside of the dev container!

##### Prisma Migrations

Every single time you change `prisma/schema.prisma` you need to run the following commands to run migrations.

```bash
# Generates the Postgresql
npx prisma migrate dev --name "init"

# Generates the Typescript
npx -y prisma generate
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
