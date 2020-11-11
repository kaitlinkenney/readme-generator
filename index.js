const fs = require('fs');
const inquirer = require('inquirer');
// const markdown = require('./utils/generateMarkdown.js');
// array of questions for user
const init = async () => {
    const licenses = ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'];

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
            message: 'Please enter your email:',
        },
        {
            type: 'list',
            message: 'Which license is the application covered under?',
            name: 'license',
            choices: [...licenses],
        },
      ]);

      const readMeData = 
`${answers.license}
# Title:\n  ${answers.title}
## Table of Contents:\n 
[Description](#description)\n 
[Installation](#installation)\n 
[Usage](#usage)\n 
[Contributing](#contributing)\n
[Tests](#tests)\n 
[Questions](#questions)\n 
[License](#license)\n 
## Description:\n  ${answers.description}
## Installation:\n ${answers.installation}
## Usage:\n ${answers.usage}
## Contributing:\n ${answers.contributing}
## Tests:\n ${answers.tests}
## Questions:\n 1. GitHub username: ${answers.gitHub}\n \t 2. Email: ${answers.email}
## License:\n ${answers.license}
`

      fs.writeFileSync ('README.md', readMeData);
  
      console.log('Successfully wrote to readme');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();
  


