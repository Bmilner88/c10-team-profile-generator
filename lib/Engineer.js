const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, github, role) {
        super(name);

        this.github = github;
        this.role = role;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return this.role;
    }
};

module.exports = Engineer;