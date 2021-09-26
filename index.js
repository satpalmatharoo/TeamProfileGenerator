const inquirer = require("inquirer");
const fs = require("fs").promises;
const { Manager } = require("./lib/Manager");
const { Intern } = require("./lib/Intern");
const { Engineer } = require("./lib/Engineer");

const team = []; // Manager, Intern and Engineer


const generateHtml = () => {
  const teamArrHtml = team.map(employee => {
    return `
    
    <div class="card">
    <h1>${employee.getName()}</h1>
    <p class="title">${employee.getRole()}</p>
    <p class="title">${employee.getId()}</p>
    <p class="title">${employee.getEmail()}</p>
    <a href="#"><i class="fa fa-github"></i></a>
    <a href="#"><i class="fa fa-envelope"></i></a>
    <p><button>Contact</button></p>
  </div>
    `
  });
  const teamHtml = teamArrHtml.join("\n");
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
  </head> 
  <body>

  <div style="display: flex; flex-wrap: wrap;">
  
  ${teamHtml}

  </div>
  
  </body>
  </html>
  `
  fs.writeFile('./dist/index.html', html);
};

const menu = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like todo?',
      choices: [
        'addManager',
        'addIntern',
        'addEngineer',
        'generateHtml',
      ]
    }
  ]).then(response => {
    if (response.option === 'addManager') {
      addManager();
    } else if (response.option === 'addIntern') {
      addIntern();
    } else if (response.option === 'addEngineer') {
      addEngineer();
    } else if (response.option === 'generateHtml') {
      generateHtml();
    }
  });
}

menu();

const addManager = () => { 
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
    ]).then(response => {
      const newManager = new Manager(response.name, response.id, response.email, response.office);
      team.push(newManager);
      console.log(team);
      menu();
    });
};

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
  
          ]).then(response => {
          const newIntern = new Intern(response.name, response.id, response.email, response.school);
          team.push(newIntern);
          console.log(team);
          menu();
        });
    };

    const addEngineer = () => { 
      inquirer.prompt([
          {
            type: "input",
            message: "Enter Engineer name.",
            name: "name",
          },
    
          { type: "input",
            message: "Enter Engineer's ID.",
            name: "id",
          },
    
          { type: "input",
            message: "Enter Engineer's Email",
            name: "email",
          },
    
          { type: "input",
            message: "Enter Enginners GitHub ID?",
            name: "Github",
          },
        ]).then(response => {
          const newEngineer = new Engineer(response.name, response.id, response.email, response.Github);
          team.push(newEngineer);
          console.log(team);
          menu();
        });
    };
  

