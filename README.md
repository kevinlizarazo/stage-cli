# Stage CLI

This repository is a tool I created for my team to improve the build & deployment process. 

With more than 50 data visualizations created and "staged" for the build script to run through, the build process became unwieldy and memory quickly became an issue. Cutting down the number of apps staged in our build manifest will drastically improve performance and saves memory. In order to avoid manually editing the manifest, this CLI handles the task of reading the app directory, comparing it to the existing manifest, highlighting what is already staged, and adding/removing apps to the manifest. Once finished, it saves changes to the manifest so that the developer can run the build process or update the repo and deploy.

## Getting started

Development:
`npm install`

### run

`npm run stage`

## Project structure

#### Definition
- Build Manifest: the apps in `projects.js` that are meant to be built

### `/build`

This is where the build manifest, cli, and config files are. `projects.js` is the manifest. `stage.js` is the cli. `config.js` simply holds directory values.

### `/static/apps`

This is where the apps would reside.

## Development specs

At the core of this project is [Inquirer](https://www.npmjs.com/package/inquirer). The staging tool leverages this library to take user input and transform the manifest accordingly. The project also uses `Colors` for seasoning the command prompts and relies on `fs` to async read the app directories.
