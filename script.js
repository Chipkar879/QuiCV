function generateResume() {

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const phone = document.getElementById("phone").value;

  const skills = document.getElementById("skills").value;

  const education = document.getElementById("education").value;

  const experience = document.getElementById("experience").value;

  const resumeOutput = document.getElementById("resume-output");

  resumeOutput.innerHTML = `
  
    <h1>${name}</h1>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Phone:</strong> ${phone}</p>

    <hr>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

  `;
}