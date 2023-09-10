const colorKeywords = require('./setColors');

const questions = [
    {
        type: 'list',
        name: 'shapes',
        message: 'What shape do you desire for your Logo?',
        choices: ['Circle', 'Square', 'Triangle']
    },

    {
        type: 'list',
        name: 'colorChoice',
        message: 'Choose Color type for the shape?',
        choices: ['color keyword', 'hexadecimal']
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Which color do you desire for your shape?',
        when: (answers) => answers.colorChoice === 'color keyword',
        validate: (answer) => {
            if (colorKeywords.includes(answer.toLowerCase())) {
                return true;
            }
            return 'Please enter a valid color keyword';
        }
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the Hexadecimal code (#CCCCCC)',
        when: (answers) => answers.colorChoice === 'hexadecimal',
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (hexRegEx.test(answer)) {
                return true;
            }
            return 'Please enter a valid hexadecimal color code';
        }
    },

    {
        type: 'input',
        name: 'text',
        message: 'Enter the text (max 3 characters):',
        validate: (answer) => {
            if (answer.length <= 3) {
                return true;
            }
            return 'Text must be three characters or less. Please try again.';
        }
    },

    {
        type: 'list',
        name: 'textColorChoice',
        message: 'Choose the color format for the text',
        choices: ['color keyword', 'hexadecimal']
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color you desire for the text:',
        when: (answers) => answers.textColorChoice === 'color keyword',
        validate: (answer) => {
            if (colorKeywords.includes(answer.toLowerCase())) {
                return true;
            }
            return 'Please enter a valid color keyword';
        }
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the Hexadecimal code (#CCCCCC):',
        when: (answers) => answers.textColorChoice === 'hexadecimal',
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (hexRegEx.test(answer)) {
                return true;
            }
            return 'Please enter a valid hexadecimal color code';
        }
    }
];

module.exports = questions;
