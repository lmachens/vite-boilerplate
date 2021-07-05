# Vite Boilerplate

> Quickly bootstrap a new project with Vite Boilerplate.

This boilerplate contains all the tools you need to build a modern web app with TypeScript, React, Vite, Storybook and Express.  
You can use it to quickly bootstrap your project.

ESLint, stylelint, prettier, husky and lintstaged are configured to give you a solid development experience.

## Installing / Developing

First, [create a repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).

Now you are ready to go:

```shell
npm install
```

This will install the dependencies required to run the boilerplate.

```shell
npm run client:dev
npm run server:dev
```

Boom! These scripts run your client and server in development mode.

If you like to work with Storybook, you can run it like this:

```shell
npm run storybook
```

## Building

To build the project, run:

```shell
npm run build
```

This will build the client, server and storybook.

```shell
npm start
```

In production, you have a single server serving everything.

`/api` is the API endpoint.
`/storybook` is the Storybook.
`/*` is the client.

## Tests

A test runner is not installed (right now). But TypeScript, linter and prettier are checked on commit and push thanks to husky and lintstaged.

## Licensing

MIT
