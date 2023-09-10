const inquirer = require('inquirer');
const fs = require('fs');
const fileName = "./assets/logo.svg"; // Adjust the file path as needed
const questions = require('./lib/questions'); // Correct the import statement
const { setShape } = require('./lib/setShape'); // Corrected import statement


function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, () => console.log('logo.svg Generated'));
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            createLogo(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

init();
