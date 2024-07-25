// Import the Manager class
const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

// Test for setting office number via constructor
test('Can set office number via constructor argument', () => {
  const testValue = 100;
  const e = new Manager('Foo', 1, 'test@test.com', testValue);
  expect(e.officeNumber).toBe(testValue);
});

// Test for getRole() method, should return 'Manager'
test('getRole() should return "Manager"', () => {
  const testValue = 'Manager';
  const e = new Manager('Foo', 1, 'test@test.com', 100);
  expect(e.getRole()).toBe(testValue);
});

// Test for getOfficeNumber() method
test('Can get office number via getOfficeNumber()', () => {
  const testValue = 100;
  const e = new Manager('Foo', 1, 'test@test.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
