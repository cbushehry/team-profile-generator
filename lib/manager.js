// Import the Employee class
const Employee = require('./employee');

// Define the Manager class, extending Employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); // Call the parent constructor
    this.officeNumber = officeNumber; // Set the office number property
  }

  // Method to get the office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Method to get the role, returns 'Manager'
  getRole() {
    return 'Manager';
  }
}

// Export the Manager class
module.exports = Manager;
