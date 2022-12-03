function generateMarkdown(data) {
  //depending on which one the user picks, displays one of these license choices along side a source link.
  if (data.license === "MIT") {
    data.license = "MIT LICENSE (https://opensource.org/licenses/MIT)";
  }
  if (data.license === "MPL 2.0") {
    data.license = "MPL 2.0 LICENSE (https://opensource.org/licenses/MPL-2.0)";
  }
  if (data.license === "APACHE 2.0") {
    data.license =
      "APACHE 2.0 LICENSE (https://opensource.org/licenses/Apache-2.0)";
  }
  if (data.license === "GNU GPL") {
    data.license =
      "GNU GPL LICENSE (https://opensource.org/licenses/gpl-license)";
  }

  //title of the project and table of contents displayed at top of page. followed by individual sections showcasing user inputs gathered from the prompts.

  return `
  # ${data.title}

  # Table of Contents
  1. [Project Title](#Title)
  2. [Github](#Github)
  3. [Email](#Email)
  4. [Description](#Description)
  5. [Installation](#Installation)
  6. [Usage](#Usage)
  7. [License](#License)
  8. [Contributions](#Contributions)
  9. [Tests](#Tests)
  10. [Questions](#Questions)
  
  
  # Project Title
  ${data.title}
  # Github
  ${data.github}
  # Email
  ${data.email}
  # Description
  ${data.description}
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  This project is licensed under ${data.license}
  # Contributions
  ${data.contributions}
  # Tests
  ${data.tests}
  # Questions
  If you have any further questions please email me at ${data.email} or reach out to me on github at ${data.github}.
  `;
}
module.exports = generateMarkdown;
