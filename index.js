const fs = require('fs');
const inquirer = require('inquirer');
const pageGen = require('./src/pageTemplate');
const employees = [];

const init = employees => {
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
        },
        {
            type: 'input',
            name: 'officeNo',
            message: 'What is their office number?',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log(`Please enter the Manager's office number`);
                    return false;
                };
            },
            when: answers => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log(`Please enter the Engineer's GitHub username`);
                    return false;
                };
            },
            when: answers => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log(`Please enter the Intern's school`);
                    return false;
                };
            },
            when: answers => answers.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(data => {
        employees.push(data);
        if(data.confirmAddEmployee) {
            return init(employees);
        } else {
            console.log(employees);
            return employees;
        };
    });
};

init(employees);