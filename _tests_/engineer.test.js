// Import the Engineer class
const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

// Test for setting GitHub username via constructor
test('Can set GitHub account via constructor', () => {
  const testValue = 'GitHubUser';
  const e = new Engineer('Foo', 1, 'test@test.com', testValue);
  expect(e.github).toBe(testValue);
});

// Test for getRole() method, should return 'Engineer'
test('getRole() should return "Engineer"', () => {
  const testValue = 'Engineer';
  const e = new Engineer('Foo', 1, 'test@test.com', 'GitHubUser');
  expect(e.getRole()).toBe(testValue);
});

// Test for getGithub() method
test('Can get GitHub username via getGithub()', () => {
  const testValue = 'GitHubUser';
  const e = new Engineer('Foo', 1, 'test@test.com', testValue);
  expect(e.getGithub()).toBe(testValue);
});
