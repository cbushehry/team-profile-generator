// Function to generate HTML content
const generateHTML = (team) => {
    // Start HTML string with basic structure
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="assets/css/styles.css">
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        <div class="team-container">
    `;
  
    // Add a card for each team member
    team.forEach(member => {
      html += `
        <div class="team-member">
          <h2>${member.getName()}</h2>
          <h3>${member.getRole()}</h3>
          <p>ID: ${member.getId()}</p>
          <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
      `;
      // Add role-specific details
      if (member.getRole() === 'Manager') {
        html += `<p>Office Number: ${member.getOfficeNumber()}</p>`;
      } else if (member.getRole() === 'Engineer') {
        html += `<p>GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a></p>`;
      } else if (member.getRole() === 'Intern') {
        html += `<p>School: ${member.getSchool()}</p>`;
      }
      html += `</div>`;
    });
  
    // Close HTML tags
    html += `
        </div>
      </main>
    </body>
    </html>
    `;
  
    return html;
  };
  
  // Export the generateHTML function
  module.exports = generateHTML;
  