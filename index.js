const fs = require('fs');
var inquirer = require('inquirer');
// array of questions for user
const init = async () => {

    try {
      const answers = await inquirer.prompt([
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
      ]);
  
      const readMeData = `
      #Title: ${answers.title}
      #Description: ${answers.description}
      #Installation: ${answers.installation}
      #Usage: ${answers.usage}
      #Contributing: ${answers.contributing}
      #Tests: ${answers.tests}
      #Questions:\n "1. GitHub username: "${answers.gitHub}\n
      "2. Email: "${answers.email}
      `

      fs.writeFileSync ('ReadMeSample', readMeData);
  
      console.log('Successfully wrote to index.html');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();
  
// function to write README file
// function writeToFile(fileName, data) {
    //will take the data and input it into fileName.
// }

// function to initialize program
// function init() {
//     inquirer.prompt(questions).then((answers) => {
      
    
// }

// function sum(firstNum, secondNum) {
//     var z = firstNum + secondNum;
//     console.log(z);
// }
// sum(3, 4);

// function call to initialize program

