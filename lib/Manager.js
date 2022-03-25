const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNo) {
        super(name);

        this.officeNo = officeNo;
    };

    getRole() {
        // Overridden to return 'Manager'
    };
};

module.exports = Manager;