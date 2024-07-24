// Import the Employee class
const Employee = require('./employee');

// Define the Intern class, extending Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); // Call the parent constructor
    this.school = school; // Set the school property
  }

  // Method to get the school
  getSchool() {
    return this.school;
  }

  // Method to get the role, returns 'Intern'
  getRole() {
    return 'Intern';
  }
}

// Export the Intern class
module.exports = Intern;
