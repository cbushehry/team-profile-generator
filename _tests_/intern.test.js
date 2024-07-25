// Import the Intern class
const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

// Test for setting school via constructor
test('Can set school via constructor', () => {
  const testValue = 'UCLA';
  const e = new Intern('Foo', 1, 'test@test.com', testValue);
  expect(e.school).toBe(testValue);
});

// Test for getRole() method, should return 'Intern'
test('getRole() should return "Intern"', () => {
  const testValue = 'Intern';
  const e = new Intern('Foo', 1, 'test@test.com', 'UCLA');
  expect(e.getRole()).toBe(testValue);
});

// Test for getSchool() method
test('Can get school via getSchool()', () => {
  const testValue = 'UCLA';
  const e = new Intern('Foo', 1, 'test@test.com', testValue);
  expect(e.getSchool()).toBe(testValue);
});
