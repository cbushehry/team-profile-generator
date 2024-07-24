// Import the Employee class
const Employee = require('./employee');

// Define the Engineer class, extending Employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email); // Call the parent constructor
    this.github = github; // Set the GitHub username property
  }

  // Method to get the GitHub username
  getGithub() {
    return this.github;
  }

  // Method to get the role, returns 'Engineer'
  getRole() {
    return 'Engineer';
  }
}

// Export the Engineer class
module.exports = Engineer;
