const c = require("./config")
const colors = require('colors')
const inquirer = require('inquirer');
const fs = require('fs');
let projectArray = [];

fs.readdirSync(c.APP_DIR).forEach(file => {
    if (file != ".DS_Store"){
  		projectArray.push(file);
    }
	})

async function update() {
  try {
    const manifest = projectArray;
    const choices = Object.keys(manifest).map(slug => Object.assign({}, manifest[slug], {value: manifest[slug]}));
    const defaults = c.SELECTED_APPS;
    const message = console.log('Welcome to the cfr-datawiz app staging tool. \nThis command-line interface allows you to change \nwhich apps get built when running build.js or \ndeploying via Jenkins. Please consult with other \ndevelopers before de-selecting their apps. \nWhich apps would you like to deploy?'.blue.bold)

    const {Apps} = await inquirer.prompt([
      {
        type: 'checkbox', 
        name: 'Apps',
        pageSize: 20,
        choices,
        default: defaults,
        message: message}
    ]);

    await Promise.all(Apps.map(t => {
      return;
    }));

    let newProjects = "module.exports = " + JSON.stringify(Apps)

    fs.writeFileSync(c.BUILD_MANIFEST, newProjects)
    console.log("Changes saved. cfr-datawiz ready for updating. Please add, commit, and push your code to the repo.".red.bold)

  } catch (err) {
    console.error(err);
  }
 }

 update();

