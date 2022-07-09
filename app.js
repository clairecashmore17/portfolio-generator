// import inquirer package into our project
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
// //necessarry fs define line!
// //"require" saves core module to fs that makes it a special object that has access to all the fs information from node.js
// const fs = require('fs');

// //Require statement to import our page-template js
// const generatePage = require('./src/page-template.js');




// fs.writeFile('./index.html', generatePage(name,github), err => {
//     if(err) throw new Error(err);
//     console.log("Portfolio Complete! Checkout index.html to see the output!")
// });