const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util")
const markDown = require(`./generateMarkdown`);

//Questions to create the ReadMe
const questions = [

    {
        message: "What is your GitHub username?",
        name: "username"
    },
 {
        message: "Enter your email address.",
        name: "email"
    },
{
        message: "Project Title",
        name: "title"
    },
    {
        message: "Description of the project",
        name: "description"
    },
    {
        message: "Repository Name?",
        name: "reponame"
    },
    {
        message: "What is the installation method?",
        name: "installation"
    },
    {
        message: "What license are you using?",
        name: "license"
    },
    {
        message: "What are the rules for contributing",
        name: "contributing"
    },
    {
        message: "What is the test line command?",
        name: "tests"
    }
];

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
    .prompt(questions)
};

async function init() {

    try {
        const answers = await promptUser();

        const queryURL = `https://api.github.com/users/${answers.username}`;
        const queryResponse = await axios.get(queryURL)
        const avatarURL = queryResponse.data.avatar_url

        const markdownData = {
            avatar: avatarURL,
            answers
        }

        //console.log(markdownData);

        //set file data
        const readMe = markDown(markdownData);

        //write to file
        await writeFileAsync("README.md", readMe);

        //When ReadMe creation is successful
        console.log("Your ReadMe is ready!");
    } catch (err) {
        //If an error occurs
        console.log(err);
    }
};

init();