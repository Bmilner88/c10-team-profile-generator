const Engineer = require('../lib/Engineer');

test('Can set GitHub', () => {
    const testGithub = 'Bmilner88';
    const test = new Engineer('Ben Milner', 623, 'bmilner88@gmail.com', testGithub);
    expect(test.github).toBe(testGithub);
});

test('Can use getGithub() to return the GitHub username', () => {
    const testGithub = 'Bmilner88';
    const test = new Engineer('Ben Milner', 623, 'bmilner88@gmail.com', testGithub);
    expect(test.getGithub()).toBe(testGithub);
});

test(`Can use getRole() to return 'Engineer'`, () => {
    const role = 'Engineer';
    const test = new Engineer('Ben Milner', 623, 'bmilner88@gmail.com', 'Bmilner88');
    expect(test.getRole()).toBe(role);
});