//necessarry fs define line!
//"require" saves core module to fs that makes it a special object that has access to all the fs information from node.js
const fs = require('fs');

//Require statement to import our page-template js
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github  =profileDataArgs[1];
// Is the same as...
const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name,github), err => {
    if(err) throw new Error(err);
    console.log("Portfolio Complete! Checkout index.html to see the output!")
});