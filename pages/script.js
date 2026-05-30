// Function to generate resume
function generateResume() {
  // 1. Fetch values from inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const skills = document.getElementById("skills").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;

  // 2. Validation
  if (!name) {
    alert("Please enter your name!");
    document.getElementById("name").focus();
    return;
  }

  // 3. Get selected template from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const template = urlParams.get('template') || 'default';

  // 4. Generate HTML based on selected template
  let resumeHTML = '';

  // ========================
  // DEFAULT / MODERN TEMPLATE
  // ========================
  if (template === 'default' || template === 'modern') {
    resumeHTML = `
      <div class="resume-modern">
        <div class="modern-header">
          <h1>${name}</h1>
          <div class="modern-contact">
            <span><i class="fa-solid fa-envelope"></i> ${email || 'Not provided'}</span>
            <span><i class="fa-solid fa-phone"></i> ${phone || 'Not provided'}</span>
          </div>
        </div>

        ${skills ? `
          <div class="modern-section">
            <h3>Skills</h3>
            <div class="modern-skills">
              <span class="skill-tag">${skills}</span>
            </div>
          </div>
        ` : ''}

        ${education ? `
          <div class="modern-section">
            <h3>Education</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="modern-section">
            <h3>Experience</h3>
            <p>${experience}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ========================
  // CLASSIC TEMPLATE
  // ========================
  else if (template === 'classic') {
    resumeHTML = `
      <div class="resume-classic">
        <div class="classic-header">
          <h1>${name}</h1>
          <div class="classic-contact">
            ${email || 'No email'} | ${phone || 'No phone'}
          </div>
        </div>
        <hr class="classic-divider">
        
        ${skills ? `
          <div class="classic-section">
            <h3>SKILLS</h3>
            <p>${skills}</p>
          </div>
        ` : ''}

        ${education ? `
          <div class="classic-section">
            <h3>EDUCATION</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="classic-section">
            <h3>WORK EXPERIENCE</h3>
            <p>${experience}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ========================
  // CREATIVE TEMPLATE
  // ========================
  else if (template === 'creative') {
    resumeHTML = `
      <div class="resume-creative">
        <div class="creative-sidebar">
          <div class="avatar">${name.charAt(0)}</div>
          <h1>${name}</h1>
          <div class="creative-contact">
            <p><i class="fa-solid fa-envelope"></i> ${email || 'N/A'}</p>
            <p><i class="fa-solid fa-phone"></i> ${phone || 'N/A'}</p>
          </div>
        </div>
        <div class="creative-main">
          ${skills ? `
            <div class="creative-section">
              <h3>Skills</h3>
              <p>${skills}</p>
            </div>
          ` : ''}

          ${education ? `
            <div class="creative-section">
              <h3>Education</h3>
              <p>${education}</p>
            </div>
          ` : ''}

          ${experience ? `
            <div class="creative-section">
              <h3>Experience</h3>
              <p>${experience}</p>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // ========================
  // MINIMAL TEMPLATE
  // ========================
  else if (template === 'minimal') {
    resumeHTML = `
      <div class="resume-minimal">
        <h1>${name}</h1>
        <p class="minimal-contact">
          ${email || 'no@email.com'} &nbsp;&bull;&nbsp; ${phone || 'no phone'}
        </p>
        
        <hr class="minimal-line">
        
        ${skills ? `
          <div class="minimal-section">
            <h3>Skills</h3>
            <p>${skills}</p>
          </div>
        ` : ''}

        ${education ? `
          <div class="minimal-section">
            <h3>Education</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="minimal-section">
            <h3>Experience</h3>
            <p>${experience}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ========================
  // PROFESSIONAL TEMPLATE
  // ========================
  else if (template === 'professional') {
    resumeHTML = `
      <div class="resume-professional">
        <div class="pro-header">
          <div class="pro-bar"></div>
          <h1>${name}</h1>
          <p>${email || 'email@domain.com'} &nbsp;|&nbsp; ${phone || 'phone'}</p>
        </div>
        
        ${skills ? `
          <div class="pro-section">
            <h3>Core Competencies</h3>
            <p>${skills}</p>
          </div>
        ` : ''}

        ${education ? `
          <div class="pro-section">
            <h3>Academic Background</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="pro-section">
            <h3>Professional Experience</h3>
            <p>${experience}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ========================
  // EXECUTIVE TEMPLATE
  // ========================
  else if (template === 'executive') {
    resumeHTML = `
      <div class="resume-executive">
        <div class="exec-header">
          <h1>${name}</h1>
          <p class="exec-title">Executive Profile</p>
          <p class="exec-contact">
            <span>${email || 'email@domain.com'}</span> &nbsp;|&nbsp; 
            <span>${phone || 'phone'}</span>
          </p>
        </div>
        
        ${skills ? `
          <div class="exec-section">
            <h3>Key Competencies</h3>
            <p>${skills}</p>
          </div>
        ` : ''}

        ${education ? `
          <div class="exec-section">
            <h3>Education</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="exec-section">
            <h3>Career Journey</h3>
            <p>${experience}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // 5. Inject into Output Div
  const outputDiv = document.getElementById("resume-output");
  outputDiv.style.transition = "opacity 0.3s ease";
  outputDiv.style.opacity = 0;
  
  setTimeout(() => {
    outputDiv.innerHTML = resumeHTML;
    setTimeout(() => {
      outputDiv.style.transition = "opacity 0.5s ease";
      outputDiv.style.opacity = 1;
    }, 50);
  }, 300);
}

// Add enter key support for form submission
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        generateResume();
      }
    });
  });
});

// Add entrance animation on page load
document.addEventListener('DOMContentLoaded', function() {
  const formSection = document.querySelector('.form-section');
  const resumeSection = document.querySelector('.resume-section');
  
  if (formSection) {
    formSection.style.opacity = 0;
    formSection.style.transform = 'translateX(-30px)';
    setTimeout(() => {
      formSection.style.transition = 'all 0.6s ease';
      formSection.style.opacity = 1;
      formSection.style.transform = 'translateX(0)';
    }, 100);
  }
  
  if (resumeSection) {
    resumeSection.style.opacity = 0;
    resumeSection.style.transform = 'translateX(30px)';
    setTimeout(() => {
      resumeSection.style.transition = 'all 0.6s ease';
      resumeSection.style.opacity = 1;
      resumeSection.style.transform = 'translateX(0)';
    }, 200);
  }
});