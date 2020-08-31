// const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require("util");

// array of common GitHub licenses
const licenses = {
    MIT : {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZW1pdA=="
    },
    LGPL3 : {
        "key": "lgpl-3.0",
        "name": "GNU Lesser General Public License v3.0",
        "spdx_id": "LGPL-3.0",
        "url": "https://api.github.com/licenses/lgpl-3.0"
    },
    MPL2 : {
        "key": "mpl-2.0",
        "name": "Mozilla Public License 2.0",
        "spdx_id": "MPL-2.0",
        "url": "https://api.github.com/licenses/mpl-2.0"
    },
    AGPL3 : {
        "key": "agpl-3.0",
        "name": "GNU Affero General Public License v3.0",
        "spdx_id": "AGPL-3.0",
        "url": "https://api.github.com/licenses/agpl-3.0"
    },
    UNLICENSE : {
        "key": "unlicense",
        "name": "The Unlicense",
        "spdx_id": "Unlicense",
        "url": "https://api.github.com/licenses/unlicense"
    },
    APACHE2 : {
        "key": "apache-2.0",
        "name": "Apache License 2.0",
        "spdx_id": "Apache-2.0",
        "url": "https://api.github.com/licenses/apache-2.0"
    },
    GPL3 : {
        "key": "gpl-3.0",
        "name": "GNU General Public License v3.0",
        "spdx_id": "GPL-3.0",
        "url": "https://api.github.com/licenses/gpl-3.0"
    }
};

const licenseOptions = Object.keys(licenses);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Link",
        message: "What is the link to your running application?"
    },
    {
        type: "editor",
        name: "Description",
        message: "Describe your project:"
    },
    {
        type: "editor",
        name: "Installation",
        message: "Describe how someone installs this"
    },
    {
        type: "editor",
        name: "Usage",
        message: "Describe how someone uses this application?"
    },
    {
        type: "list",
        name: "License",
        message: "What type of License do you want to use?",
        choices: licenseOptions,
        default: () => licenseOptions.findIndex((index) => index === 'MIT')
    },
    {
        type: "editor",
        name: "Contributing",
        message: "Provide instructions on how to contribute to your project"
    },
    {
        type: "editor",
        name: "Tests",
        message: "Provide steps to test the application and the expected results"
    },
    {
        type: "input",
        name: "Username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?"
    } 
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    
}

// function call to initialize program
init();
