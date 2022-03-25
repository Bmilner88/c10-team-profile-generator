const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNo) {
        super(name, id, email);

        this.officeNo = officeNo;
        this.role = role;
    };

    getOfficeNumber() {
        return this.officeNo;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Manager;