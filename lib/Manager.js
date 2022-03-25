const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNo, role) {
        super(name);

        this.officeNo = officeNo;
        this.role = role;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Manager;