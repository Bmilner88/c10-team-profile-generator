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

init(employees)
//console.log(employees);