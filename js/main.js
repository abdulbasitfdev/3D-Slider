/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu');
  navToggle = document.getElementById('nav-toggle');
  navClose = document.getElementById('nav-close');

/* Menu show */
navToggle.addEventListener('click', () => {
  navMenu.classList.add('add-menu');
});
 
/* Menu hidden */
navClose.addEventListener('click', () => {
  navMenu.classList.remove('add-menu');
});


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');

  this.scrollY >= 50
   ? header.classList.add('bg-header')
   : header.classList.remove('bg-header')
};

window.addEventListener('scroll', scrollHeader);

/*=============== HOME HEIGHT ===============*/
const homeHeight = () => {
  const home = document.getElementById('home');
  const mockup = document.getElementById('home-mockup');

  home.style.height = `${mockup.offsetHeight + 313}px`;
};

window.addEventListener('load', homeHeight);
window.addEventListener('resize', homeHeight);

/*=============== FIRST SWIPER ===============*/
var firstSwiper = new Swiper(".first-swiper", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      on: {
        slideChange: function() {
            const slideIndex = this.realIndex;
            const isAtFirstSlide = slideIndex === 0;
            const left = isAtFirstSlide ? 0.25 : slideIndex * 50;

            const mockupImage = document.getElementById('home-mockup');
            mockupImage.style.setProperty("--left", `${left}%`);
        },
      },
});

/*=============== SECOND SWIPER ===============*/
    var secondSwiper = new Swiper('.second-swiper', {
      loop: true,
      direction: 'vertical',
    });


/*=============== SYNCHRONIZING SWIPERS ===============*/
firstSwiper.controller.control = secondSwiper;

/*=============== GSAP ANIMATION ===============*/
gasp.from('.home-title-animate', {
  x: 1000,
  duration: 1,
  ease: 'power1.in',
});

gasp.from('.home-fruit-animate', {
  y: 1000,
  duration: 1,
  ease: 'power1.in',
});
