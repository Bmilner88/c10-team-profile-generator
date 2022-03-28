const Manager = require('../lib/Manager');

test('Can set the office number', () => {
    const officeNo = 123;
    const test = new Manager('Ben Milner', 623, 'bmilner88@gmail.com', officeNo);
    expect(test.officeNo).toBe(officeNo);
});

test('Can use getOfficeNumber() to return the office number', () => {
    const officeNo = 123;
    const test = new Manager('Ben Milner', 623, 'bmilner88@gmail.com', officeNo);
    expect(test.getOfficeNumber()).toBe(officeNo);
});

test(`Can use getRole() to return 'Manager'`, () => {
    const role = 'Manager';
    const test = new Manager('Ben Milner', 623, 'bmilner88@gmail.com', 123);
    expect(test.getRole()).toBe(role);
});