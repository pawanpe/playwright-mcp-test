// scroll a page when clicked an element.
section1.document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor (#) click behavior
    const href = this.getAttribute('href').substring(1); // Get the target section ID
    const targetSection = document.getElementById(href); // Find the target section

    if (targetSection) {
      // Smooth scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
})