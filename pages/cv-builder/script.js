function generateResume() {
  // 1. Fetch values from inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const skills = document.getElementById("skills").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;

  // 2. Validation (Optional)
  if (!name) {
    alert("Please enter your name!");
    return;
  }

  // 3. Generate HTML for Resume
  const resumeHTML = `
    <div class="resume-header">
      <h1>${name}</h1>
      <div class="contact-info">
        <span><i class="fa-solid fa-envelope"></i> ${email || 'Not provided'}</span>
        <span><i class="fa-solid fa-phone"></i> ${phone || 'Not provided'}</span>
      </div>
    </div>

    ${skills ? `
      <div class="resume-section-title">Skills</div>
      <div class="resume-content">
        <p>${skills}</p>
      </div>
    ` : ''}

    ${education ? `
      <div class="resume-section-title">Education</div>
      <div class="resume-content">
        <p>${education}</p>
      </div>
    ` : ''}

    ${experience ? `
      <div class="resume-section-title">Experience</div>
      <div class="resume-content">
        <p>${experience}</p>
      </div>
    ` : ''}
  `;

  // 4. Inject into Output Div
  const outputDiv = document.getElementById("resume-output");
  
  // Add a fade-out effect before changing content
  outputDiv.style.opacity = 0;
  
  setTimeout(() => {
    outputDiv.innerHTML = resumeHTML;
    // Fade in
    outputDiv.style.transition = "opacity 0.5s ease";
    outputDiv.style.opacity = 1;
  }, 200);
}