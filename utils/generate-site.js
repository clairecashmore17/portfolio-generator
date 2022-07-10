const fs = require('fs');

//creating a function that returns a promise
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if theres an error, reject the Promise and send the error to the Promises '.catch()' method
            if(err) {
                reject(err);
                //return out of the function to make sure Promise doesnt execute
                return;
            }
            //if everything went well, resolce the Promise and send data to .then
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

//function to copy the files for style
const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
          });
    });
}

//exporting this code to our app.js file
module.exports = { writeFile, copyFile };