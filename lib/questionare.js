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


    
]