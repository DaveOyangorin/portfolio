/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/


if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/

if(navClose){
    navClose.addEventListener('click' , () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== Scroll effect fade in ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight / 2) && (rect.bottom >= window.innerHeight / 2);

            if (isVisible) {
                section.classList.add('in-viewport');
            } else {
                section.classList.remove('in-viewport');
            }
        });
    }

    // Initial check on page load
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
});

