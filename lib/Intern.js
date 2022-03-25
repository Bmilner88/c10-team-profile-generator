const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, school, role) {
        super(name);

        this.school = school;
        this.role = role;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Intern;