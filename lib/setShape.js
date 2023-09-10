const shapes =require('./geometricShapes')

function setShape(response){

    if(response.shapes === 'Circle'){
        let Geoshape = new shapes(response.shapeColor,response.text,response.textColor);
        return Geoshape.render();
    }

    if(response.shapes === 'Square'){
        let Geoshape = new shapes(response.shapeColor,response.text,response.textColor);
        return Geoshape.render();
    }

    if(response.shapes === 'Triangle'){
        let Geoshape = new shapes(response.shapeColor,response.text,response.textColor);
        return Geoshape.render();
    }
}


module.exports=setShape();