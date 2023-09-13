const {Circle,Square,Triangle} = require('./geometricShapes')


describe('Circle test',()=>{
    test('should return logo with user choice of shape color,text and text color',()=>{
        const circle=new Circle('yellow','VIN','blue');
        expect(circle.render()).toEqual(
            `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="yellow" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="blue">VIN</text>
    </svg>`
    )
    })
})

describe('Square',()=>{
    test('should return logo with user choice of shape color,text and text color',()=>{
        const square=new Square('black','GUN','white');
        expect(square.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="black"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">GUN</text>
    </svg>
`)
    })
})


describe('Triangle',()=>{
    test('should return logo with user choice of shape color,text and text color',()=>{
        const triangle=new Triangle('red','DAI','yellow');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="red"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="yellow">DAI</text>
    </svg>
    `)
    })
})

