// const fs = require('fs');
var inquirer = require('inquirer');
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    //will take the data and input it into fileName.
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
        console.log(answers.title);
        const readMeData = `
        #Title: ${answers.title}
        #Description: ${answers.description}
        #Installation: ${answers.installation}
        #Usage: ${answers.usage}
        #Contributing: ${answers.contributing}
        #Tests: ${answers.tests}
        #Questions: ${answers.gitHub}, \n${answers.email}
        `
        writeToFile("README.md", readMeData);
      });
    
}

// function sum(firstNum, secondNum) {
//     var z = firstNum + secondNum;
//     console.log(z);
// }
// sum(3, 4);

// function call to initialize program
init();

