function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
      const sections = document.querySelectorAll('.section h1, .section p');
  
      function checkVisibility() {
          const windowBottom = window.innerHeight + window.scrollY;
  
          sections.forEach((section) => {
              const sectionTop = section.getBoundingClientRect().top + window.scrollY;
              const sectionBottom = sectionTop + section.getBoundingClientRect().height;
  
              if (windowBottom > sectionTop + 100 && window.scrollY < sectionBottom) {
                  section.classList.add('visible');
              }
          });
      }
  
      window.addEventListener('scroll', checkVisibility);
      window.addEventListener('resize', checkVisibility);
      checkVisibility(); // Initial check
  });
  