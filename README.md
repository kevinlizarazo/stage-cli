# Stage CLI

This repository is a tool I created for my team to improve the build & deployment process within our internal dataviz rendering system, which runs on Node.

With more than 50 data visualizations created and inadvertently "staged" for the build script to run through, the build runtime became too long and memory quickly became an issue. Reducing the number of apps staged in our build manifest will drastically improve our environment's performance and save memory. 

In order to avoid manually editing the manifest, this CLI handles the task of reading the app directory, comparing it to the existing manifest, highlighting what is already staged, and adding/removing apps to the manifest. Once finished, it saves changes to the manifest so that the developer can run the build process or update the repo and deploy.

## Getting started

Dependencies: `npm install`

Run: `npm run stage`

## Project structure

#### Definitions
- Build Manifest: the apps in `projects.js` that are meant to be built

#### `/build`

This is where the build manifest, cli, and config files are. `projects.js` is the manifest. `stage.js` is the cli. `config.js` simply holds directory values.

#### `/static/apps`

This is where the apps would reside.

## Development specs

At the core of this project is [Inquirer](https://www.npmjs.com/package/inquirer). The staging tool leverages this library to take user input and transform the manifest accordingly. The project also uses `Colors` for seasoning the command prompts and relies on `fs` to async read the app directories.
