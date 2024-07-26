// Import necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Array to hold team members
const team = [];

// Function to prompt for manager details
const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the team manager’s name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team manager’s ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team manager’s email?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team manager’s office number?',
    }
  ]).then(managerData => {
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    team.push(manager);
    promptMenu(); // Call the menu to add more members or finish
  });
};

// Function to present the menu to the user
const promptMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Would you like to add an engineer, an intern, or finish building your team?',
      choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
    }
  ]).then(userChoice => {
    switch (userChoice.menu) {
      case 'Add an engineer':
        promptEngineer();
        break;
      case 'Add an intern':
        promptIntern();
        break;
      default:
        buildTeam();
    }
  });
};

