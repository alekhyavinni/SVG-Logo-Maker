const colorKeywords=require('./setColors')

const questions=[
    {
        type:'list',
        name:'shape',
        message:'What shape you desire for your Logo?',
        choices:['Circle','Square','Triangle']
    },

    {
        type:'input',
        name:'colorChoice',
        message:' Choose Color type for the shape?',
        choices:['color Keyword','hexadecimal']
    },

    {
        type:'input',
        name:'shapeColor',
        message:'Which color you desire for your shape?',
        when:(answers)=>{
            if(answers.colorChoice === 'color keyword'){
                return true;
            }
            return false;
        },
        validate:(answer)=>{
            let answerLowercase = answer.toLowerCase();
            var len = colorKeywords.length;
            for(var i=0;i<len;i++){
                if(answerLowercase.indexOf(colorKeywords[i])!= -1){
                    return true;
                }
            }
            return console.log("\n Please enter a valid Color keyword")
        }
    },

{
    type:'input',
    name:'shapeColor',
    message:'Enter the HexaDecimal code(#CCCCCC)',
    when:(answers) =>{
        if(answers.colorChoice === 'hexadecimal'){
            return true;
        }
        return false;
    },
    validate:(answer)=>{
        const hexRegEx = '^#[A-Fa-f0-9]{6}$'
        if(!answer.match(hexRegEx)){
            return console.log("\n Please enter a valid hexadecimal") 
        }
        return true;
    }
},

{
    type:'input',
    name:'text',
    message:'Enter the text?(max-3 char)',
    validate:(answer)=>{
        if(answer.length >3){
            return console.log("\n Text must be three characters or less! Please try again"); 
        }
        return true;
    }
},

{
    type:'list',
    name:'textColorChoice',
    message:'Choose the color format for the text',
    choices:['color keyword', 'hexadecimal']
},

{
    type:'input',
    name:'textColor',
    message:'Enter the color you desire for the text',
    when:(answers)=>{
        if(answers.colorChoice === 'color keyword'){
            return true;
        }
        return false;
    },
    validate:(answer)=>{
        let answerLowercase = answer.toLowerCase();
        var len = colorKeywords.length;
        for(var i=0;i<len;i++){
            if(answerLowercase.indexOf(colorKeywords[i])!= -1){
                return true;
            }
        }
        return console.log("\n Please enter a valid Color keyword")
    }
},


{
    type:'input',
    name:'textColor',
    message:'Enter the HexaDecimal code(#CCCCCC)',
    when:(answers) =>{
        if(answers.colorChoice === 'hexadecimal'){
            return true;
        }
        return false;
    },
    validate:(answer)=>{
        const hexRegEx = '^#[A-Fa-f0-9]{6}$'
        if(!answer.match(hexRegEx)){
            return console.log("\n Please enter a valid hexadecimal") 
        }
        return true;
    }
}

]


module.exports=questions;