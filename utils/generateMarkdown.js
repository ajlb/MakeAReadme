// function to generate markdown for README
function generateMarkdown(data, url) {
  return `# ${data.title}
  [![${data.license}](https://img/shields.io/badge/License-${data.license}-blueviolet)](${url})
  Find the deployed project [here](${data.link}).
  
  ## Table of Contents:
  
  - [Section 1: Description](#Description)
  - [Section 2: Installation](#Installation)
  - [Section 3: Usage](#Usage)
  - [Section 4: License](#License)
  - [Section 5: Contributing](#Contributing)
  - [Section 6: Test Instructions](#Test-Instructions)
  - [Section 7: Questions](#Questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  * ${data.license} (LICENSE)
  
  ## Contributing
  ${data.contributing}
  
  ## Test Instructions
  ${data.tests}
  
  ## Questions
  * Contact [${data.username}](https://github.com/${data.username}) at ${data.email}
  
  
`;
}

module.exports = generateMarkdown;
