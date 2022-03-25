const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNo) {
        super(name, id, email);

        this.officeNo = officeNo;
        this.role = role;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Manager;