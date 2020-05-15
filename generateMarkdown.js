function generateMarkdown(data) {
  return `
  # ${data.answers.reponame}
  # ${data.answers.title}
  ${data.answers.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  ${"```"}
  ${data.answers.installation}
  ${"```"}
  ## Usage
  AS A ${data.answers.role}
  I CAN ${data.answers.capability}
  SO THAT ${data.answers.benefit}
  ## License
  This project is licensed under the ${data.answers.license} License
  ## Contributing
  ${data.answers.contributing}
  ## Tests
  To run tests, run the following command:
  ${"```"}
  ${data.answers.tests}
  ${"```"}
  ## Questions
  If you have any questions about the repo or want to open an issue contact ${data.answers.username} on ${data.answers.email}
  <img src="${data.avatar}" alt="avatar" style="border-radius: 16px" width="30" />
  ![License](https://img.shields.io/github/license/${data.answers.username}/${data.answers.reponame}?style=flat-square)
  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.answers.username}/${data.answers.reponame})
  `;
}

module.exports = generateMarkdown;