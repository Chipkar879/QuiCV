// Track current step
let currentStep = 1;

// ========================
// STEP VALIDATION
// ========================

// Function to validate Step 1 fields
function validateStep1() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const location = document.getElementById("location").value.trim();
  const linkedin = document.getElementById("linkedin").value.trim();

  const btnNext = document.getElementById("btnNext");
  const step1Indicator = document.getElementById("step1-indicator");

  // At least name is required to proceed
  if (name.length > 0) {
    btnNext.disabled = false;
    step1Indicator.classList.add('completed');
    step1Indicator.classList.remove('active');
  } else {
    btnNext.disabled = true;
    step1Indicator.classList.add('active');
    step1Indicator.classList.remove('completed');
  }
}

// Function to go to Step 2
function goToStep2() {
  const name = document.getElementById("name").value.trim();
  
  if (!name) {
    alert("Please enter your name to proceed!");
    return;
  }

  // Hide Step 1, Show Step 2
  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.add("active");

  // Update progress indicators
  document.getElementById("step1-indicator").classList.add("completed");
  document.getElementById("step1-indicator").classList.remove("active");
  document.getElementById("step2-indicator").classList.add("active");

  // Enable generate button
  document.getElementById("btnGenerate").disabled = false;

  currentStep = 2;
}

// Function to go back to Step 1
function goToStep1() {
  // Hide Step 2, Show Step 1
  document.getElementById("step2").classList.remove("active");
  document.getElementById("step1").classList.add("active");

  // Update progress indicators
  document.getElementById("step2-indicator").classList.remove("active");
  document.getElementById("step1-indicator").classList.add("active");

  currentStep = 1;
}

// ========================
// GENERATE RESUME
// ========================

function generateResume() {
  // SECTION 1: Personal Details
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const location = document.getElementById("location").value;
  const linkedin = document.getElementById("linkedin").value;

  // SECTION 2: Professional Info
  const summary = document.getElementById("summary").value;
  const experience = document.getElementById("experience").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const additional = document.getElementById("additional").value;

  // Validation
  if (!name) {
    alert("Please enter your name!");
    document.getElementById("name").focus();
    return;
  }

  // Get template from URL
  const urlParams = new URLSearchParams(window.location.search);
  const template = urlParams.get('template') || 'default';

  let resumeHTML = '';

  // ========================
  // TEMPLATE 1: MODERN (Default)
  // ========================
  if (template === 'default' || template === 'modern') {
    resumeHTML = `
      <div class="resume-modern">
        <div class="modern-header">
          <h1>${name}</h1>
          <div class="modern-contact">
            <span><i class="fa-solid fa-phone"></i> ${phone || 'Not provided'}</span>
            <span><i class="fa-solid fa-envelope"></i> ${email || 'Not provided'}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${location || 'Not provided'}</span>
            ${linkedin ? `<span><i class="fa-brands fa-linkedin"></i> ${linkedin}</span>` : ''}
          </div>
        </div>

        ${summary ? `
          <div class="modern-section">
            <h3>Professional Summary</h3>
            <p>${summary}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="modern-section">
            <h3>Work Experience</h3>
            <p>${experience}</p>
          </div>
        ` : ''}

        ${education ? `
          <div class="modern-section">
            <h3>Education</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${skills ? `
          <div class="modern-section">
            <h3>Skills</h3>
            <p>${skills}</p>
          </div>
        ` : ''}

        ${additional ? `
          <div class="modern-section">
            <h3>Additional</h3>
            <p>${additional}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ========================
  // TEMPLATE 2: CLASSIC
  // ========================
  else if (template === 'classic') {
    resumeHTML = `
      <div class="resume-classic">
        <div class="classic-header">
          <h1>${name}</h1>
          <div class="classic-contact">
            ${phone || 'No phone'} | ${email || 'No email'} | ${location || 'No location'}
            ${linkedin ? ` | ${linkedin}` : ''}
          </div>
        </div>
        <hr class="classic-divider">
        
        ${summary ? `
          <div class="classic-section">
            <h3>PROFESSIONAL SUMMARY</h3>
            <p>${summary}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="classic-section">
            <h3>WORK EXPERIENCE</h3>
            <p>${experience}</p>
          </div>
        ` : ''}

        ${education ? `
          <div class="classic-section">
            <h3>EDUCATION</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${skills ? `
          <div class="classic-section">
            <h3>SKILLS</h3>
            <p>${skills}</p>
          </div>
        ` : ''}

        ${additional ? `
          <div class="classic-section">
            <h3>ADDITIONAL</h3>
            <p>${additional}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ========================
  // TEMPLATE 3: CREATIVE
  // ========================
  else if (template === 'creative') {
    resumeHTML = `
      <div class="resume-creative">
        <div class="creative-sidebar">
          <div class="avatar">${name.charAt(0)}</div>
          <h1>${name}</h1>
          <div class="creative-contact">
            <p><i class="fa-solid fa-phone"></i> ${phone || 'N/A'}</p>
            <p><i class="fa-solid fa-envelope"></i> ${email || 'N/A'}</p>
            <p><i class="fa-solid fa-location-dot"></i> ${location || 'N/A'}</p>
            ${linkedin ? `<p><i class="fa-brands fa-linkedin"></i> ${linkedin}</p>` : ''}
          </div>
        </div>
        <div class="creative-main">
          ${summary ? `
            <div class="creative-section">
              <h3>Summary</h3>
              <p>${summary}</p>
            </div>
          ` : ''}

          ${experience ? `
            <div class="creative-section">
              <h3>Experience</h3>
              <p>${experience}</p>
            </div>
          ` : ''}

          ${education ? `
            <div class="creative-section">
              <h3>Education</h3>
              <p>${education}</p>
            </div>
          ` : ''}

          ${skills ? `
            <div class="creative-section">
              <h3>Skills</h3>
              <p>${skills}</p>
            </div>
          ` : ''}

          ${additional ? `
            <div class="creative-section">
              <h3>Additional</h3>
              <p>${additional}</p>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // ========================
  // TEMPLATE 4: MINIMAL
  // ========================
  else if (template === 'minimal') {
    resumeHTML = `
      <div class="resume-minimal">
        <h1>${name}</h1>
        <p class="minimal-contact">
          ${phone || ''} &nbsp;&bull;&nbsp; ${email || ''} &nbsp;&bull;&nbsp; ${location || ''}
          ${linkedin ? `&nbsp;&bull;&nbsp; ${linkedin}` : ''}
        </p>
        
        <hr class="minimal-line">
        
        ${summary ? `
          <div class="minimal-section">
            <h3>Summary</h3>
            <p>${summary}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="minimal-section">
            <h3>Experience</h3>
            <p>${experience}</p>
          </div>
        ` : ''}

        ${education ? `
          <div class="minimal-section">
            <h3>Education</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${skills ? `
          <div class="minimal-section">
            <h3>Skills</h3>
            <p>${skills}</p>
          </div>
        ` : ''}

        ${additional ? `
          <div class="minimal-section">
            <h3>Additional</h3>
            <p>${additional}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ========================
  // TEMPLATE 5: PROFESSIONAL
  // ========================
  else if (template === 'professional') {
    resumeHTML = `
      <div class="resume-professional">
        <div class="pro-header">
          <div class="pro-bar"></div>
          <h1>${name}</h1>
          <p>${phone || ''} &nbsp;|&nbsp; ${email || ''} &nbsp;|&nbsp; ${location || ''}</p>
        </div>
        
        ${summary ? `
          <div class="pro-section">
            <h3>Summary</h3>
            <p>${summary}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="pro-section">
            <h3>Experience</h3>
            <p>${experience}</p>
          </div>
        ` : ''}

        ${education ? `
          <div class="pro-section">
            <h3>Education</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${skills ? `
          <div class="pro-section">
            <h3>Skills</h3>
            <p>${skills}</p>
          </div>
        ` : ''}

        ${additional ? `
          <div class="pro-section">
            <h3>Additional</h3>
            <p>${additional}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ========================
  // TEMPLATE 6: EXECUTIVE
  // ========================
  else if (template === 'executive') {
    resumeHTML = `
      <div class="resume-executive">
        <div class="exec-header">
          <h1>${name}</h1>
          <p class="exec-title">Executive Profile</p>
          <p class="exec-contact">
            <span>${phone || ''}</span> &nbsp;|&nbsp; 
            <span>${email || ''}</span> &nbsp;|&nbsp; 
            <span>${location || ''}</span>
            ${linkedin ? `&nbsp;|&nbsp; <span>${linkedin}</span>` : ''}
          </p>
        </div>
        
        ${summary ? `
          <div class="exec-section">
            <h3>Summary</h3>
            <p>${summary}</p>
          </div>
        ` : ''}

        ${experience ? `
          <div class="exec-section">
            <h3>Experience</h3>
            <p>${experience}</p>
          </div>
        ` : ''}

        ${education ? `
          <div class="exec-section">
            <h3>Education</h3>
            <p>${education}</p>
          </div>
        ` : ''}

        ${skills ? `
          <div class="exec-section">
            <h3>Skills</h3>
            <p>${skills}</p>
          </div>
        ` : ''}

        ${additional ? `
          <div class="exec-section">
            <h3>Additional</h3>
            <p>${additional}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ========================
  // OUTPUT
  // ========================
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

// ========================
// ENTER KEY SUPPORT
// ========================
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        
        if (currentStep === 1) {
          goToStep2();
        } else {
          generateResume();
        }
      }
    });
  });
});

// ========================
// PAGE LOAD ANIMATION
// ========================
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