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