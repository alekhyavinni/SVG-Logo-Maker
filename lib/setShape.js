// const {Circle,Square,Triangle} =require('./geometricShapes')


// function setShape(response){

//     if(response.shapes === 'Circle'){
//         let Geoshape = new Circle(response.shapeColor,response.text,response.textColor);
//         return Geoshape.render();
//     }

//     if(response.shapes === 'Square'){
//         let Geoshape = new Square(response.shapeColor,response.text,response.textColor);
//         return Geoshape.render();
//     }

//     if(response.shapes === 'Triangle'){
//         let Geoshape = new Triangle(response.shapeColor,response.text,response.textColor);
//         return Geoshape.render();
//     }
// }


// module.exports=setShape();

const { Circle, Square, Triangle } = require('./geometricShapes');

function setShape(response) {
    let Geoshape;

    switch (response.shapes) {
        case 'Circle':
            Geoshape = new Circle(response.shapeColor, response.text, response.textColor);
            break;
        case 'Square':
            Geoshape = new Square(response.shapeColor, response.text, response.textColor);
            break;
        case 'Triangle':
            Geoshape = new Triangle(response.shapeColor, response.text, response.textColor);
            break;
        default:
            // Handle invalid shape choice
            break;
    }

    if (Geoshape) {
        return Geoshape.render();
    } else {
        // Handle invalid shape choice
        return '';
    }
}

module.exports = { setShape };
