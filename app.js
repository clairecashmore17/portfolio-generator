// import inquirer package into our project
const inquirer = require('inquirer');

// function to prompt the user for personal info
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

// function to prompt the user for project details
const promptProject = portfolioData => {
    // If theres no projects array property, create one
    if(!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    ==================
    Add a New Project
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS','ES6', 'jQuery','Bootstrap','Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
        .then(projectData=> {
            portfolioData.projects.push(projectData);
            if( projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else { 
                return portfolioData;
            }
        });
};

//invoke our functions
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    })
;



    
// //necessarry fs define line!
// //"require" saves core module to fs that makes it a special object that has access to all the fs information from node.js
// const fs = require('fs');

// //Require statement to import our page-template js
// const generatePage = require('./src/page-template.js');




// fs.writeFile('./index.html', generatePage(name,github), err => {
//     if(err) throw new Error(err);
//     console.log("Portfolio Complete! Checkout index.html to see the output!")
// });