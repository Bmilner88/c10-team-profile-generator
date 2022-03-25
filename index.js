const fs = require('fs');
const inquirer = require('inquirer');
const pageGen = require('./src/pageTemplate');

const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the employee's name?`,
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the employee's name`);
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID:',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log(`Please enter the employee's ID`)
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the employee's email address?`,
            validate: descInput => {
                if(descInput) {
                    return true;
                } else {
                    console.log(`Please enter the employee's email address`);
                    return false;
                };
            }
        },
        {
            type: 'list',
            name: 'role',
            message: `What is the employee's role?`,
            choices: ['Employee', 'Manager', 'Engineer', 'Intern']
        }
    ])
};

init().then(data => {pageGen(data)});