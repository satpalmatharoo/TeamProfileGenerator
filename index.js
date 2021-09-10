const inquirer = require("inquirer");
const fs = require("fs");

//const Manager = require("./lib/Manager");  is this COERRECT??




const addManager = () => {  // do I need to add the const manager here Steven?? 
  inquirer.prompt([
      {
        type: "input",
        message: "Enter Managers name.",
        name: "name",
      },

      { type: "input",
        message: "Enter Managers ID.",
        name: "id",
      },

      { type: "input",
        message: "Enter Manager Email",
        name: "email",
      },

      { type: "input",
        message: "Enter Manager's office number?",
        name: "office",
      },

      {
        type: "list",
        message: "Would you like to add another Team Member?",
        choices:["Add new Engineer", "Add new Intern", "Generate HTML"],
        name: "addNext",     
      },
    ])

    addManager ();

    then((response) => {
     const manager = new manager(response.name, response.id, response.email, response.officeNumber);
      if (response.addNext === "Add new Engineer") {
          engineerPrompts();
      } else if (response.addNext === "Add new Intern") {
          internPrompts();
      } else if (response.addNext === "Generate HTML") {
          const errorFunction = (err) => err ? console.error(err) : console.log('Commit logged!');
          fs.writeFile= util.promisify(fs.writeFile); generateHTML.generateHTML
      }
    }
    );
    then();
};

const addEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter name of Engineer.",
      name: "name",
    },

    {
      type: "input",
      message: "Please enter engineer's employee id",
      name: "id",
    },

    {
      type: "input",
      message: "Enter Engineer's email address",
      name: "email",
    },

    {
      type: "input",
      message: "Enter Enginner GitHub Username",
      name: "github",     
    },

    {
      type: "list",
      message: "Would you like to add another Team Member?",
      choices:["Add new Engineer", "Add new Intern", "Generate HTML"],
      name: "NextStep",     
  },

  addEngineer ()

  const addIntern = () => {
     inquirer.prompt([
        {
          type: "input",
          message: "Enter name of Intern",
          name: "name",
        },

        {
          type: "input",
          message: "Enter Intern's employee ID.",
          name: "id",
        },

        {
          type: "input",
          message: "Enter Intern's email address.",
          name: "name",
        },

        {
          type: "input",
          message: "Enter Interns email address.",
          name: "email",
        },

        {
          type: "input",
          message: "Enter Interns's School",
          name: "school",
        },

        {
          type: "list",
          message:"Would you like to add another Team Member?",
          choices:["Add new Engineer", "Add new Intern", "Generate HTML"],
          name: "Additional",   
        },

  addIntern ()

  
  ]);
},
 init = () => {
  promptBuildMenu()
    .then((data) => fs.writeFileSync("index.md", generateMarkdown(data)))
    .then(() => console.log("Successfully wrote to index.md"))
    .catch((err) => console.error(err));
  },
  promptBuildMenu()

init()
  

// Write unit tests for each method

// when the user runs the index.js they are presented with a menu
// this menu with give them 4 options [add engineer, add intern, add manager-
//generate html]
// if one of the add options have been chosed lets say add engineer we will
// prompt them with with all of the questions that will allow use to create an engineer-
// with a class
// once we have created the engineer we will push it into an array called team then-
// rebuild the menu
// once the user is ready to build the html they can select generate html which will-
// use the team
// array to create the list of employees

// functions that should be create as a results of this

// buildMenu() this function will use inquire to build the menu [add engineer, add intern-
//, add manager, generate html]
// when an option is selected from this menu we will run a function for it

// addEngineer() this function will be from the result of buildMenu()
//const position = {
 // Manager: "Manager",
 // Engineer: "Engineer",
//};

//const promptBuildMenu = () => {
  //inquirer
    //.prompt([
      //{
        //type: "list",
        //message: "Please select one option from below",
        //name: "chosen position",
        //choices: [
          //{ name: position.Manager }
//
  //      ],
    //  },
    //]).then((values) => {
      //switch (values.position) {
        //case position.Manager: {
          //addManager();
          //break;
        //}
        //case position.Engineer: {
          //promptEngineer();
          //break;
        //}
      //}
   // });
  //};