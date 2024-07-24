// Define the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name; // Set the name property
      this.id = id; // Set the id property
      this.email = email; // Set the email property
    }
  
    // Method to get the name
    getName() {
      return this.name;
    }
  
    // Method to get the id
    getId() {
      return this.id;
    }
  
    // Method to get the email
    getEmail() {
      return this.email;
    }
  
    // Method to get the role, defaults to 'Employee'
    getRole() {
      return 'Employee';
    }
  }
  
  // Export the Employee class
  module.exports = Employee;
  