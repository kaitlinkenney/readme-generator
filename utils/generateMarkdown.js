// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${answers.title}
  ## ${answers.description}
  ## ${answers.installation}
`;
}

module.exports = generateMarkdown;
