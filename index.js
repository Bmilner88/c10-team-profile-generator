const fs = require('fs');
const inquirer = require('inquirer');
const pageGen = require('./src/pageTemplate');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
            choices: ['Manager', 'Engineer', 'Intern']
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
        switch(data.role) {
            case 'Manager':
                employees.push(new Manager(data.name, data.id, data.email, data.role, data.officeNo));
                break;
            case 'Engineer':
                employees.push(new Engineer(data.name, data.id, data.email, data.role, data.github));
                break;
            case 'Intern':
                employees.push(new Intern(data.name, data.id, data.email, data.role, data.school));
                break;
        };
        if(data.confirmAddEmployee) {
            return init(employees);
        } else {
            return employees;
        };
    });
};

init(employees)
    .then(data => {
        return pageGen(employees)
    })
    .then(html => {
        fs.writeFile('./dist/index.html', html);
    })