const navMenu = document.querySelector('.nav');
const menuContainer = document.querySelector('.menu');
const brand = document.querySelector('.brand');
const mobileNavItems = document.querySelector('.mobile-nav-items');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-menu-icon');
const portfolio = document.getElementById('portfolio-link');
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

portfolio.addEventListener('click', closeMenu);
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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
    mobileDetails: {
      featuredImage: './images/mobile-modal-img.png',
      name: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
    mobileDetails: {
      featuredImage: './images/mobile-modal-img.png',
      name: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
    mobileDetails: {
      featuredImage: './images/mobile-modal-img.png',
      name: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
    mobileDetails: {
      featuredImage: './images/mobile-modal-img.png',
      name: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
    mobileDetails: {
      featuredImage: './images/mobile-modal-img.png',
      name: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
  },
  {
    projectTitle: 'Multi-Post Stories Gain+Glory',
    projectImg: './images/img-placeholder.png',
    projectCategories: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnText: 'See Project',
    projectDetails: {
      name: 'Keeping track of hundreds of components',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
    mobileDetails: {
      featuredImage: './images/mobile-modal-img.png',
      name: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveVersionLink: 'https://lembani.github.io/lembani-portfolio',
      sourceLink: 'https://github.com/Lembani/lembani-portfolio.git',
    },
  },
];

const modalView = document.getElementById('popupModal');
const modalViewMobile = document.getElementById('popupModalMobile');

const closePopup = () => {
  const closeModalIcon = document.querySelector('.close-modal-icon');
  closeModalIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (!modalView.classList.contains('hide-modal')) {
      modalView.classList.add('hide-modal');
    }
  });
};

const closeMobilePopup = () => {
  const closeModalIconMobile = document.querySelector('.close-modal-icon-mob');
  closeModalIconMobile.addEventListener('click', (e) => {
    e.preventDefault();
    if (!modalViewMobile.classList.contains('hide-modal')) {
      modalViewMobile.classList.add('hide-modal');
    }
  });
};

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

const showModal = () => {
  const cardButtons = document.querySelectorAll('.see-proj-btn');
  cardButtons.forEach((cardButton) => {
    cardButton.addEventListener('click', () => {
      const btnId = cardButton.getAttribute('id');
      const cardDetails = projects[btnId];
      if (window.innerWidth >= 768) {
        let technologies = '';
        cardDetails.projectDetails.technologies.map((technology) => {
          technologies += `<li class="language">${technology}</li>`;
          return null;
        });
        const modal = `
              <div class="project-modal">
                <i class="close-modal-icon fa-solid fa-xmark fa-xl"></i>
                <img class="project-modal-img" src="${cardDetails.projectDetails.featuredImage}" alt="Medical Illustration Sets" />
                <div class="modal-content-container">
                  <div class="modal-header-container">
                    <h2 class="modal-header">${cardDetails.projectDetails.name}</h2>
                    <ul class="modal-links">
                      <li class="modal-link-item"><a href="${cardDetails.projectDetails.liveVersionLink}">See Live <img class="live-icon" src="./images/live-icon.svg" alt="live icon" /><a/></li>
                      <li class="modal-link-item"><a href="${cardDetails.projectDetails.sourceLink}">See Source <img class="source-icon" src="./images/source-icon.svg" alt="source icon" /><a/></li>
                    </ul>
                  </div>
                  <ul class="languages">
                    ${technologies}
                  </ul>
                  <p class="modal-description">${cardDetails.projectDetails.description}</p>
                </div>
              </div>
            `;
        if (modalView.classList.contains('hide-modal')) {
          modalView.classList.remove('hide-modal');
          modalView.innerHTML = modal;
        }
        closePopup();
      } else {
        let technologies = '';
        cardDetails.mobileDetails.technologies.map((technology) => {
          technologies += `<li class="language-mob">${technology}</li>`;
          return null;
        });
        const modal = `
              <div class="project-modal-mob">
                <i class="close-modal-icon-mob fa-solid fa-xmark fa-xl"></i>
                <img class="project-modal-img-mob" src="${cardDetails.mobileDetails.featuredImage}" alt="Medical Illustration Sets" />
                <div class="modal-content-container-mob">
                    <h2 class="modal-header-mob">${cardDetails.mobileDetails.name}</h2>
                  <ul class="languages-mob">
                    ${technologies}
                  </ul>
                  <p class="modal-description-mob">${cardDetails.mobileDetails.description}</p>
                  <ul class="modal-links-mob">
                      <li class="modal-link-item-mob"><a href="${cardDetails.mobileDetails.liveVersionLink}">See Live <img class="live-icon" src="./images/live-icon.svg" alt="live icon" /><a/></li>
                      <li class="modal-link-item-mob"><a href="${cardDetails.mobileDetails.sourceLink}">See Source <img class="source-icon" src="./images/source-icon.svg" alt="source icon" /><a/></li>
                    </ul>
                </div>
              </div>
            `;
        if (modalViewMobile.classList.contains('hide-modal')) {
          modalViewMobile.classList.remove('hide-modal');
          modalViewMobile.innerHTML = modal;
        }
        closeMobilePopup();
      }
    });
  });
};

showModal();

const form = document.forms.contactForm;
const nameInput = form.fullname;
const emailInput = form.email;
const messageInput = form.message;
const formErrors = document.querySelector('.form-errors');

const validateEmail = () => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    emailInput.focus();
    formErrors.style.fontFamily = 'Inter';
    formErrors.style.fontSize = '17';
    formErrors.style.color = '#ff6163';
    formErrors.innerText = 'Your email should be in small letters.';
    return false;
  }
  form.submit();
  return true;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateEmail();
});

const formData = {
  fullname: '',
  email: '',
  message: '',
};

const setLocalData = () => {
  localStorage.setItem('formData', JSON.stringify(formData));
};

form.addEventListener('change', () => {
  formData.fullname = nameInput.value;
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  setLocalData();
});

const getLocalData = () => {
  const localFormData = JSON.parse(localStorage.getItem('formData'));
  nameInput.value = localFormData.fullname;
  emailInput.value = localFormData.email;
  messageInput.value = localFormData.message;
};

getLocalData();
