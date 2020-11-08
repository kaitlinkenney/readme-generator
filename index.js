const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
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
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: 'What is the usage information?',
        // },
        // {
        //     type: 'input',
        //     name: 'contributing',
        //     message: 'What are the contribution guidelines?',
        // },
        // {
        //     type: 'input',
        //     name: 'tests',
        //     message: 'What are the test instructions?',
        // },
        // {
        //     type: 'input',
        //     name: 'gitHub',
        //     message: 'What is your GitHub username?',
        // },
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: 'Please enter your email',
        // },
      ]);
  
      const readMeData = `
      # Title:\n \t ${answers.title}
      ## Table of Contents:\n \t
      [Description](#Description)\n \t
      [Installation](#Installation)\n \t
      ## Description:\n \t ${answers.description}
      ## Installation:\n \t ${answers.installation}
      ## Usage:\n \t ${answers.usage}
      ## Contributing:\n \t ${answers.contributing}
      ## Tests:\n \t ${answers.tests}
      ## Questions:\n \t 1. GitHub username: ${answers.gitHub}\n \t 2. Email: ${answers.email}
      `

      fs.writeFileSync ('README.md', readMeData);
  
      console.log('Successfully wrote to readme');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();
  


