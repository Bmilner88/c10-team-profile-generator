const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, school) {
        super(name);

        this.school = school;
    };

    getSchool() {

    };

    getRole() {
        // Overridden to return 'Intern'
    };
};

module.exports = Intern;