const inquirer=require('inquirer');
const fs=require('fs');
const fileName = "./assets/logo.svg"
const questionare = require('./lib/questionare');
const setShape=require('./lib/setShape')


function createLogo(response){
    const svg=setShape(response);
    fs.writeFile(fileName,svg,()=>console.log('logo.svg Generated'));
}

function init(){
    inquirer
    .prompt(questionare)
    .then((response)=>{
        createLogo(response);
    })
    .catch(err =>{
        console.log(err)
    })
}

init();