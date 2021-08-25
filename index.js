const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util");


// writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

const testing = () => {

return inquirer.prompt([
    {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a detailed overview and description of the project",
    name:  "Description",
  },
  {
    type: "input",
    name: "Installation",
    message: "Provide any installation instructions",
  },
  {
  
    type: "input",
    name: "Usage",
    message: "Please explain usage",
  },
  {
    type: "list",
    name: "License",
    message: "Add your license or badge link if needed",
    choices: ["GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "The Unlicense", "N/A"]
  },
  {
    type: "input",
    name: "Github",
    message: "Add your Github user name",
  },
  {
    type: "input",
    name: "Email",
    message: "Please add your email address",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Would you like to add contributors to your project?",
  },
  {
    type: "input",
    name: "Tests",
    message: "Do you have any project tests? If so please provide",
  },

])
}

const generateMarkdown = (answers) =>
`## Table of contents
* Title 
* Description 
* Installation
* Usage
* License
* What is your Github Username
* What is your Email address
* Contributing
* Tests
   
 #${answers.title}
  
   #${answers.Description}
   #${answers.Installation}
   #${answers.Usage}
   #${answers.License}
   #${answers.Github}
   #${answers.Email}
   #${answers.Contributing}
   #${answers.Tests}
  `;

const init = () => {
  testing()
    .then((data) => writeFileAsync('index.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to index.md'))
    .catch((err) => console.error(err));
};

init();



// First create all of the classes with there methods and properties (anything 
//that extends needs to use super)

// Write unit tests for each method

// when the user runs the index.js they are presented with a menu
// this menu with give them 4 options [add engineer, add intern, add manager, generate html]
// if one of the add options have been chosed lets say add engineer we will
// prompt them with with all of the questions that will allow use to create an engineer with a class
// once we have created the engineer we will push it into an array called team then rebuild the menu
// once the user is ready to build the html they can select generate html which will use the team
// array to create the list of employees

// functions that should be create as a results of this

// buildMenu() this function will use inquire to build the menu [add engineer, add intern, add manager, generate html]
// when an option is selected from this menu we will run a function for it

// addEngineer() this function will be from the result of buildMenu()
