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

const projects = [
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      featuredImage: '',
      technologies: ['CodeKit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'CodePen'],
      liveVersionLink: '',
      sourceLink: '',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      featuredImage: '',
      technologies: ['CodeKit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'CodePen'],
      liveVersionLink: '',
      sourceLink: '',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      featuredImage: '',
      technologies: ['CodeKit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'CodePen'],
      liveVersionLink: '',
      sourceLink: '',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      featuredImage: '',
      technologies: ['CodeKit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'CodePen'],
      liveVersionLink: '',
      sourceLink: '',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      featuredImage: '',
      technologies: ['CodeKit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'CodePen'],
      liveVersionLink: '',
      sourceLink: '',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      featuredImage: '',
      technologies: ['CodeKit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'CodePen'],
      liveVersionLink: '',
      sourceLink: '',
    },
  },
];

const workCardContainer = document.querySelector('.work-card-container');
projects.forEach((proj, index) => {
  let catItems = '';
  proj.projectCategories.map((catItem) => {
    catItems += `<li class="cat-item">${catItem}</li>`;
    return null;
  });

  const card = `
  <div class="work-card">
    <img class="work-card-img" src="${proj.projectImg}" alt="Multi-Post Stories Gain plus Glory" />
    <div class="work-card-content">
      <h3 class="card-title">${proj.projectTitle}</h3>
      <ul class="categories">${catItems}</ul>
    <button class="see-proj-btn" type="button" id="${index}" name="see-project" aria-label="See project button">See Project</button>
  </div>
 </div>
 `;
  workCardContainer.innerHTML += card;
});

const modal = `
<div class="project-modal-container">
<div class="project-modal">
  <i class="close-modal-icon fa-solid fa-xmark fa-xl"></i>
  <img class="project-modal-img" src="./images/modal-image.svg" alt="Medical Illustration Sets" />
  <div class="modal-content-container">
    <div class="modal-header-container">
      <h2 class="modal-header">Keeping track of hundreds of
        components</h2>
      <ul class="modal-links">
        <li class="modal-link-item"></li>
      </ul>
    </div>
    <ul class="languages">
      <li class="language"></li>
    </ul>
    <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
  </div>
</div>
</div>
`;