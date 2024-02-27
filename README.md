## Warnings

- If you commit directly to master and break stuff you will be tried or your crimes.
- Master branch should be STABLE. Anyone can clone and have it working, dev can be broken.
- Do not commit files that are side effects of compilation. The .gitignore should be respected.

# Getting Started

Install the following:

- Docker https://www.docker.com/products/docker-desktop/
- Visual Studio Code https://code.visualstudio.com/
- Git https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Open this project in VSCode then open in devcontainer and you should be able to run `npm install` then `npm run dev` to start work. 

If all works you should be able to open `http://localhost:3006` and see the website.

*Having issues installing docker or getting it to run? Enable Hyper-V if your on windows*

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
