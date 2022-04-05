const navMenu = document.querySelector('.nav');
const menuContainer = document.querySelector('.menu');
const brand = document.querySelector('.brand');
const mobileNavItems = document.querySelector('.mobile-nav-items');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-menu-icon');
const porfolio = document.getElementById('portfolio-link');
const about = document.getElementById('about-link');
const contact = document.getElementById('contact-link');

mobileNavItems.style.display = 'none';
closeIcon.style.display = 'none';

const menuToggle = () => {
  if (navMenu.classList.contains('displayMenu')) {
    navMenu.classList.remove('displayMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    brand.style.display = 'block';
    mobileNavItems.style.display = 'none';
  } else {
    navMenu.classList.add('displayMenu');
    closeIcon.style.display = 'block';
    mobileNavItems.setAttribute('class', 'mobile-nav-items');
    menuIcon.style.display = 'none';
    brand.style.display = 'none';
    mobileNavItems.style.display = 'block';
  }
};

menuContainer.addEventListener('click', menuToggle);
function closeMenu() {
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
  brand.style.display = 'block';
  mobileNavItems.style.display = 'none';
}

porfolio.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);
contact.addEventListener('click', closeMenu);
