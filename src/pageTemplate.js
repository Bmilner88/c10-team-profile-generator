const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

module.exports = arr => {
    const employees = arr.filter(person => person.role === 'Employee').map(arr => {new Employee(arr.name, arr.id, arr.email, arr.role)});
    const managers = arr.filter(person => person.role === 'Manager').map(arr => {new Manager(arr.name, arr.officeNo, arr.role)});
    const engineers = arr.filter(person => person.role === 'Engineer').map(arr => {new Engineer(arr.name, arr.github, arr.role)});
    const interns = arr.filter(person => person.role === 'Intern').map(arr => {new Intern(arr.name, arr.school, arr.role)});

    console.log(employees,managers,engineers,interns);

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
</body>
</html>
`;
};