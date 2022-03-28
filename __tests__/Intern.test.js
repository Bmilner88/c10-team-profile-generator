const Intern = require('../lib/Intern');

test('Can set the school', () => {
    const testSchool = 'U of U';
    const test = new Intern('Ben Milner', 623, 'bmilner88@gmail.com', testSchool);
    expect(test.school).toBe(testSchool);
});

test('Can use getSchool() to return the school', () => {
    const testSchool = 'U of U';
    const test = new Intern('Ben Milner', 623, 'bmilner88@gmail.com', testSchool);
    expect(test.getSchool()).toBe(testSchool);
});

test(`Can use getRole() to return 'Intern'`, () => {
    const role = 'Intern';
    const test = new Intern('Ben Milner', 623, 'bmilner88@gmail.com', 'U of U');
    expect(test.getRole()).toBe(role);
});