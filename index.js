const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");

const writeFileAsync = util.promisify(fs.writeFile);

const promptBuildMenu = () => {
  return inquirer.prompt([
    {
    type: "list",
    message: "Please select one option from below",
    choices: ["Add Manager", "Add Enginner", "Add Intern", "Generate HTML"]
    },
  ])
}


const promptManager = () => {
return inquirer.promptManager([
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },

  {
    type: "input",
    message: "Please enter employee id",
    name: "id",
  },
  
  {
    type: "input",
    message: "What is your role?",
    name:  "role",
  },
  
  {
    type: "input",
    name: "What is your email",
    message: "Email",
  },

  {
    type: "list",
    name: "Add Employee",
    message: "Would you like to add another employee?",
    choices: ["Engineer", "Intern", "No"],
  },

  .then((response) => {
    const manager =new manager(response.name, response.role, response.email))
  };

promptEngineer = () => {
    return inquirer.promptEngineer([

  {
    type: "input",
    name: "Github",
    message: "Add your Github user name",
  },

promptIntern = () => {
  return inquirer.promptIntern([
    {
      type: "input",
      name: "School",
      message: "Which school",
    };
  ])

}

])
}

  
const init = () => {
  promptBuildMenu()
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
