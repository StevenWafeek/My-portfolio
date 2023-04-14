const myOpen = document.querySelector('.burger');
const nav = document.querySelector('.header-menu');
const myClose = document.querySelector('.close');
const myLinks = document.querySelector('.links');

myOpen.onclick = () => {
  nav.classList.add('open');
  myOpen.classList.add('display');
};
myClose.onclick = () => {
  this.parentElement.classList.remove('open');
  myOpen.classList.remove('display');
};
myLinks.onclick = () => {
  this.parentElement.classList.remove('open');
  myOpen.classList.remove('display');
};
const MidLink = document.getElementById('about');
MidLink.addEventListener('click', () => {
  this.parentElement.classList.remove('open');
  myOpen.classList.remove('display');
});
const LastLink = document.getElementById('contact');
LastLink.addEventListener('click', () => {
  this.parentElement.classList.remove('open');
  myOpen.classList.remove('display');
});
const projectDetails = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImageMobile: './picture/Snapshoot Portfolio.png',
    featuredImageDesktop: './picture/Snapshoot Portfolio desktop.png',
    technologies: 'HTML , CSS , JavaScript',
    buttons: 'projectss#1',
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Multi-Stories',
    description: 'A selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImageMobile: './picture/Snapshoot Portfolio (1).png',
    featuredImageDesktop: './picture/Snapshoot Portfolio (3).png',
    technologies: 'HTML , CSS , JavaScript',
    buttons: 'projectss#2',
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Tonic',
    description: 'A selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImageMobile: './picture/Snapshoot Portfolio (2).png',
    featuredImageDesktop: './picture/Snapshoot Portfolio 4.png',
    technologies: 'HTML , CSS , JavaScript',
    buttons: 'projectss#3',
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Multi-Stories',
    description: 'A selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImageMobile: './picture/Snapshoot Portfolio (3).png',
    featuredImageDesktop: './picture/Snapshoot Portfolio (1).png',
    technologies: 'HTML , CSS , JavaScript',
    buttons: 'projectss#4',
    linkLive: '#',
    linkSource: '#',
  },

];
const root = document.getElementById('portfolio');
for (let i = 0; i < projectDetails.length; i += 1) {
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
      <li>Back End Dev</li>
      <li>2015</li>
    </ul>
  </div>
  <p class="Tonic-paragraph">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
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
myName.addEventListener('onclick', () => {
  const myNameValue = myName.value;
  localStorage.setItem('myNameValue', myNameValue);
});

if (('myNameValue')) {
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