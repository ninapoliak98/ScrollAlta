const menuToggle = document.querySelector(".navbar__toggle");
const menuNav = document.querySelector(".navbar__menu");
const menuLinks = document.querySelector(".navbar__links");
const contactForm = document.querySelector(".contact__form")
 

const mobileMenu = () => {
  menuToggle.classList.toggle("is-active")
  menuNav.classList.toggle("active")
}

menuToggle.addEventListener('click', mobileMenu)

const hideMobileMenu = () => {
  if (window.innerWidth <= 768 ) {
    console.log('clicked')
      menuToggle.classList.toggle('is-active')
      menuNav.classList.remove('active')
  }
};
menuNav.addEventListener('click', hideMobileMenu)

const sendFormData = (event) => {
  event.preventDefault();
      emailjs.sendForm('service_w126s1c', 'template_wqms6to', contactForm)
          .then(function() {
              console.log('SUCCESS!')
          }, function(error) {
              console.log('FAILED...', error)
          });
}

contactForm.addEventListener('submit', sendFormData)
