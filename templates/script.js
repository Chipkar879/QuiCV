// Optional JavaScript for Templates page

// Add hover animation to cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.template-card');
  
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.5s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
  });
});