const menuToggle = document.querySelector(".navbar__toggle");
const menuNav = document.querySelector(".navbar__menu");
const menuLinks = document.querySelector(".navbar__links");
const contactForm = document.querySelector(".contact__form")
 

const mobileMenu = () => {
  menuToggle.classList.toggle("is-active"); 
  menuNav.classList.toggle("active"); 
}
menuToggle.addEventListener('click', mobileMenu); 

const hideMobileMenu = () => {
  if (window.innerWidth <= 768 ) {
    console.log('clicked')
      menuToggle.classList.toggle('is-active');
      menuNav.classList.remove('active');
  }
};
window.onload = function() {
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_w126s1c', 'template_wqms6to', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}


menuNav.addEventListener('click', hideMobileMenu);
