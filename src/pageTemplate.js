const fs = require('fs');

const teamGen = team => {
    const managerGen = manager => {
        return `
                <div class="card">
                    <div class="card-header bg-info">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title">${manager.getRole()} <span class="oi oi-bullhorn"></span></h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>ID: ${manager.getId()}</li>
                            <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li>Office Number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const engineerGen = engineer => {
        return `
                <div class="card">
                    <div class="card-header bg-info">
                        <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-title">${engineer.getRole()} <span class="oi oi-cog"></span></h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>ID: ${engineer.getId()}</li>
                            <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const internGen = intern => {
        return `
                <div class="card">
                    <div class="card-header bg-info">
                        <h2 class="card-title">${intern.getName()}</h2>
                        <h3 class="card-title">${intern.getRole()} <span class="oi oi-book"></span></h3>
                    </div>
                <div>
                    <div class="card-body">
                        <ul>
                            <li>ID: ${intern.getId()}</li>
                            <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li>School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const html = [];

    team.forEach(employee => {
        switch(employee.getRole()) {
            case 'Manager':
                html.push(managerGen(employee));
                break;
            case 'Engineer':
                html.push(engineerGen(employee));
                break;
            case 'Intern':
                html.push(internGen(employee));
                break;
        };
    });

    return html.join('');
};

const pageGen = arr => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" integrity="sha512-UyNhw5RNpQaCai2EdC+Js0QL4RlVmiq41DkmCJsRV3ZxipG2L0HhTqIf/H9Hp8ez2EnFlkBnjRGJU2stW3Lj+w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header class="container">
        <div class="col-12 jumbotron mb-3 bg-dark text-white">
            <h1 class="text-center">My Team</h1>
        </div>
    </header>

    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center ">
                ${teamGen(arr)}
            </div>
        </div>
    </div>
</body>
</html>
`;
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = { pageGen, writeFile };