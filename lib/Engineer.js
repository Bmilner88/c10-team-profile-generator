const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, github) {
        super(name);

        this.github = github;
    };

    getGithub() {

    };

    getRole() {
        // Overridden to return 'Engineer'
    }
};

module.exports = Engineer;