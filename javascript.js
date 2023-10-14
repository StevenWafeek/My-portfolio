const myOpen = document.querySelector('.burger');
const nav = document.querySelector('.header-menu');
const myClose = document.querySelector('.close');
const myLinks = document.querySelector('.links');

myOpen.onclick = () => {
  nav.classList.add('open');
  myOpen.classList.add('display');
};
myClose.onclick = () => {
  nav.classList.remove('open');
  myOpen.classList.remove('display');
};
myLinks.onclick = () => {
  nav.classList.remove('open');
  myOpen.classList.remove('display');
};
const MidLink = document.getElementById('about');
MidLink.addEventListener('click', () => {
  nav.classList.remove('open');
  myOpen.classList.remove('display');
});
const LastLink = document.getElementById('contact');
LastLink.addEventListener('click', () => {
  nav.classList.remove('open');
  myOpen.classList.remove('display');
});
const projectDetails = [
  {
    name: 'Space travel',
    description: 'Pair programming project using Kanban to divide the task, Language : React, Redux, JavaScript, CSS.',
    featuredImageMobile: './picture/1687482603881.jpg',
    featuredImageDesktop: './picture/1687482603881.jpg',
    technologies: 'HTML , CSS , JavaScript , React',
    buttons: 'projectss#1',
    linkLive: '#',
    linkSource: 'https://github.com/enmanuelbayen/space-Travelers-Hub',
  },
  {
    name: 'Book Store',
    description: 'A web application for storing your book collection and tracking your progress.This project is built using HTML, CSS, JavaScript, and React',
    featuredImageMobile: './picture/1687482720771.jpg',
    featuredImageDesktop: './picture/1687482720771.jpg',
    technologies: 'HTML , CSS , JavaScript , React',
    buttons: 'projectss#2',
    linkLive: '#',
    linkSource: 'https://github.com/StevenWafeek/Bookstore',
  },
  {
    name: 'Math Magicians',
    description: 'A web app for mathematical calculations and motivational advice, it offers both math solutions and inspirational quotes through an API. Built with HTML, CSS, JavaScript, and React.',
    featuredImageMobile: './picture/Screenshot 2023-10-11 170712.jpg',
    featuredImageDesktop: './picture/Screenshot 2023-10-11 170712.jpg',
    technologies: 'HTML , CSS , JavaScript , React',
    buttons: 'projectss#3',
    linkLive: '#',
    linkSource: 'https://github.com/StevenWafeek/math-magicians',
  },
  {
    name: 'Pokemon List',
    description: 'A web app that displays a list of Pokémon along with their powers and speed from two APIs. built with HTML, CSS, JavaScript, and React.',
    featuredImageMobile: './picture/Screenshot 2023-10-11 170906.jpg',
    featuredImageDesktop: './picture/Screenshot 2023-10-11 170906.jpg',
    technologies: 'HTML , CSS , JavaScript , React',
    buttons: 'projectss#4',
    linkLive: '#',
    linkSource: 'https://github.com/StevenWafeek/metrics-webapp-capstone',
  },

];
const root = document.getElementById('portfolio');
const popup = document.querySelector('.popup-Works');
for (let i = 0; i < projectDetails.length; i += 1) {
  popup.innerHTML = `
  <span id="close-me">x</span>
  <h2>${projectDetails[i].name}</h2>
  <div class="canopy">
    <ul>
      <li class="First-line">CANOPY</li>
      <li class="Desktop-first-line">CANOPY</li>
      <li>Front End Dev</li>
      <li>2023</li>
    </ul>
  </div>
  <div class="Tonic">
    <img src="${projectDetails[i].featuredImageMobile}" alt="" class="mobile-img">
    <img src="${projectDetails[i].featuredImageDesktop}" alt="" class="desktop-img">
  </div>
  <p class="Tonic-paragraph">${projectDetails[i].description}</p>
  <ul class="Tonic-ul">
    <li>${projectDetails[i].technologies}</li>
  </ul>
  <div class="popup-buttons">
    <button >See live <img src="./picture/live-icon.png" alt="live project"></button>
    <button ><a class="Links" href="${projectDetails[i].linkSource}" target="_blank">See source</a></button>
  </div>
`;

  root.innerHTML += `
<section class="Works">
  <div class="${i % 2 === true ? 'Tonic' : 'popup-project-desk'}">
    <img src="${projectDetails[i].featuredImageMobile}" class="mobile-img">
    <img src="${projectDetails[i].featuredImageDesktop}" alt="" class="desktop-img">
  </div>
  <h2>${projectDetails[i].name}</h2>
  <div class="canopy">
    <ul>
      <li class="First-line">CANOPY</li>
      <li class="Desktop-first-line">CANOPY</li>
      <li>Front End Dev</li>
      <li>2023</li>
    </ul>
  </div>
  <p class="Tonic-paragraph">${projectDetails[i].description}</p>
  <ul class="Tonic-ul">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
  <button class="See-project">See project</button>
</section>
`;
}

const OpenProject = document.querySelectorAll('.See-project');
const fullSection = document.querySelector('.works-card');

for (let i = 0; i < OpenProject.length; i += 1) {
  OpenProject[i].onclick = () => {
    fullSection.classList.add('openMe');
    document.querySelector('.works-card h2').innerText = projectDetails[i].name;
    document.querySelector('.mobile-img').src = projectDetails[i].featuredImageMobile;
    document.querySelector('.desktop-img').src = projectDetails[i].featuredImageDesktop;
    document.querySelector('.Tonic-paragraph').innerText = projectDetails[i].description;
    document.querySelector('.Links').href = projectDetails[i].linkSource;
  };
}

const Closed = document.getElementById('close-me');
Closed.addEventListener('click', () => {
  fullSection.classList.remove('openMe');
});

const form = document.querySelector('.form');
const submit = document.querySelector('.form-button');

let errorFlag = false;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('.email');
  const emailValue = email.value;
  if (emailValue.toLowerCase() !== emailValue) {
    if (!errorFlag) {
      const message = document.createElement('h4');
      message.classList.add('error');
      message.innerText = 'The email address must be in lowercase.the form is not sent.';
      form.insertBefore(message, submit);
      errorFlag = true;
      setTimeout(() => {
        message.remove();
        errorFlag = false;
      }, 4000);
    }
  } else {
    form.submit();
  }
});

const email = document.querySelector('.email');
email.addEventListener('input', () => {
  const emailValue = email.value;
  localStorage.setItem('emailValue', emailValue);
});

if (localStorage.getItem('emailValue')) {
  email.value = localStorage.getItem('emailValue');
}
const myName = document.querySelector('.name');
myName.addEventListener('input', () => {
  const myNameValue = myName.value;
  localStorage.setItem('myNameValue', myNameValue);
});

if (localStorage.getItem('myNameValue')) {
  myName.value = localStorage.getItem('myNameValue');
}
const textArea = document.querySelector('.textarea');
textArea.addEventListener('input', () => {
  const textValue = textArea.value;
  localStorage.setItem('textValue', textValue);
});

if (localStorage.getItem('textValue')) {
  textArea.value = localStorage.getItem('textValue');
}

function initializeDropdown(dropdownToggle, dropdownContent) {
  dropdownToggle.addEventListener('click', () => {
    dropdownContent.classList.toggle('Testopen');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const languagesDropdownToggle = document.querySelector('.Languages');
  const languagesDropdownContent = document.querySelector('.testings');

  if (languagesDropdownToggle && languagesDropdownContent) {
    initializeDropdown(languagesDropdownToggle, languagesDropdownContent);
  }

  const frameworksDropdownToggle = document.querySelector('.Frameworks');
  const frameworksDropdownContent = document.querySelector('.testing');
  if (frameworksDropdownToggle && frameworksDropdownContent) {
    initializeDropdown(frameworksDropdownToggle, frameworksDropdownContent);
  }
});