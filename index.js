const fs = require('fs');
const inquirer = require('inquirer');
const pageGen = require('./src/pageTemplate');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

const init = () => {
    const managerGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: `What is the manager's name?`,
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter the manager's name`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Manager ID:',
                validate: idInput => {
                    if(idInput && !isNaN) {
                        return true;
                    } else {
                        console.log(`Please enter the manager's ID`)
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: `What is the manager's email address?`,
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log(`Please enter the manager's email address`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'officeNo',
                message: 'What is their office number?',
                validate: officeNo => {
                    if(officeNo && !isNaN) {
                        return true;
                    } else {
                        console.log(`Please enter the manager's office number`);
                        return false;
                    };
                }
            },
        ]).then(manager => {
            const generated = new Manager(
                manager.managerName,
                manager.managerId,
                manager.managerEmail,
                manager.officeNo
                );
            employees.push(generated);
            teamGen();
        });
    };

    const teamGen = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: `What kind of employee do you want to add?`,
                choices: ['Engineer', 'Intern', 'Done adding members']
            },
        ]).then(input => {
            switch(input.role) {
                case 'Engineer':
                    engineerGen();
                    break;
                case 'Intern':
                    internGen();
                    break;
                default:
                    pageGen(employees).then(html => {
                        fs.writeFile('./dist/index.html', html, 'utf-8');
                    })
            }
        })
    };

    const engineerGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: `What is the engineer's name?`,
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's name`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Engineer ID:',
                validate: idInput => {
                    if(idInput && !isNaN) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's ID`)
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: `What is the engineer's email address?`,
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's email address`);
                        return false;
                    };
                }
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
                }
            }
        ]).then(engineer => {
            const generated = new Engineer(
                engineer.engineerName,
                engineer.engineerId,
                engineer.engineerEmail,
                engineer.github
                );
            employees.push(generated);
            teamGen();
        });
    };

    const internGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: `What is the intern's name?`,
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's name`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Manager ID:',
                validate: idInput => {
                    if(idInput && !isNaN) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's ID`)
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: `What is the manager's email address?`,
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's email address`);
                        return false;
                    };
                }
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
                }
            }
        ]).then(intern => {
            const generated = new Intern(
                intern.internName,
                intern.internId,
                intern.internEmail,
                intern.school
                );
            employees.push(generated);
            teamGen();
        });
    };
    managerGen();
};

init();