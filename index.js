const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFileAsync = util.promisify(fs.writeFile);
const editorHint = "Replace the content within this temporary file with your answer and close the editor to save the result.\nYou should use markdown for formatting. \nThis editor is determined by the $VISUAL or $EDITOR environment variables. If neither of those are present, notepad (on Windows) or vim (Linux or Mac) is used.";

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
let licenseURL;
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: () => 'My Project'
    },
    {
        type: "editor",
        name: "description",
        message: "Describe your project:",
        default: () => `Describe your project. \n${editorHint}`,
        validate: (text) => (
            (text.length < 5) ? "Your description needs to be a bit longer" : true
        )
    },
    {
        type: "editor",
        name: "installation",
        message: "Describe how someone installs this",
        default: () => `Describe how someone installs this. \n${editorHint}`,
        validate: (text) => (
            (text.length < 5) ? "Your install instructions need to be a bit longer" : true
        )
    },
    {
        type: "editor",
        name: "usage",
        message: "Describe how someone uses this application?",
        default: () => `Describe how someone uses your application. \n${editorHint}`,
        validate: (text) => (
            (text.length < 5) ? "Your usage instructions need to be a bit longer" : true
        )
    },
    {
        type: "list",
        name: "license",
        message: "What type of License do you want to use?",
        choices: licenseOptions,
        default: () => licenseOptions.findIndex((index) => index === 'MIT')
    },
    {
        type: "editor",
        name: "contributing",
        message: "Provide instructions on how to contribute to your project",
        default: () => `Provide guidance on how to contribute to this project. \n${editorHint}`,
        validate: (text) => (
            (text.length < 5) ? "Your contribution instructions need to be a bit longer" : true
        )
    },
    {
        type: "editor",
        name: "tests",
        message: "Provide steps to test the application and the expected results",
        default: () => `Describe how someone runs tests on this project. \n${editorHint}`,
        validate: (text) => (
            (text.length < 5) ? "Your test instructions need to be a bit longer" : true
        )
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        default: () => "n-lambert",
        validate: (text) => (
            ((/^-/.test(text))&&(/-$/.test(text))) ? "Hmm that looks like an invalid username, try again" : true
        )
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        default: () => "foo@foo.com",
        validate: (text) => (
            (/@/.test(text)) ? true : "Hmm that doesn't apear to be an email address, try again."
        )
    } 
];

// function to initialize program
async function init() {
    try {
        // console.log("Start asking questions");
        const data = await inquirer.prompt(questions);
        const licenseURL = licenses[data.license].url;
        const document = await generateMarkdown(data, licenseURL);
        writeToFileAsync("README2.md", document);
        console.log("Successfully wrote to README2.md");
    } catch (err) {
        console.log(err);
    }  
}

// function call to initialize program
init();
