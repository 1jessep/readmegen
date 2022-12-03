const inq = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//user is presented with a series of prompts.
const prompts = [
  {
    type: "input",
    name: "title",
    message: "Please enter the name of your project",
  },

  {
    type: "input",
    name: "github",
    message: "Please enter your Github username",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
  },

  {
    type: "input",
    name: "description",
    message: "Please describe your project",
  },

  {
    type: "input",
    name: "installation",
    message: "Please describe the installation process",
  },

  {
    type: "input",
    name: "usage",
    message: "Please describe what this project can be used for",
  },

  {
    type: "list",
    name: "license",
    message:
      "Please choose the license that was used in the making of this project, if any",
    choices: ["MIT License", "MPL-2.0", "APACHE 2.0", "GNU GPL", "None"],
  },

  {
    type: "input",
    name: "contributions",
    message: "Please describe who contributed to this project",
  },

  {
    type: "input",
    name: "tests",
    message: "Please explain how this project was tested prior to launch",
  },
];

//function to write readme file. triggers error if theres an error.
function init() {
  inq.prompt(prompts).then((data) => {
    console.log(data);
    fs.writeFile("readmegenerated.md", generateMarkdown(data), (err) => {
      if (err) throw err;
      console.log("Successfully generated Readme file.");
    });
  });
}

init();
