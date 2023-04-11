let myOpen = document.querySelector(".burger")
let nav = document.querySelector(".header-menu")
let myClose = document.querySelector(".close",)
let myLinks = document.querySelector(".links")

myOpen.onclick = function(){
    nav.classList.add("open")
    myOpen.classList.add("display")
}
myClose.onclick = function(){
    this.parentElement.classList.remove("open")
    myOpen.classList.remove("display")
}
myLinks.onclick = function(){
    this.parentElement.classList.remove("open")
    myOpen.classList.remove("display")
}
const MidLink = document.getElementById('about');
MidLink.addEventListener('click', function() {
    this.parentElement.classList.remove("open")
    myOpen.classList.remove("display")
});
const LastLink = document.getElementById('contact');
LastLink.addEventListener('click', function() {
    this.parentElement.classList.remove("open")
    myOpen.classList.remove("display")
});






const projectDetails = [
    {
        name: "Tonic",
        description :"A daily selection of privately personalized reads; no accounts or sign-ups required." ,
        featuredImageMobile : "./picture/Snapshoot Portfolio.png",
        featuredImageDesktop : "./picture/Snapshoot Portfolio desktop.png",
        technologies:"HTML , CSS , JavaScript",
        buttons: "projectss#1",
        linkLive: "#",
        linkSource:"#"
    },
    {
        name: "Multi-Stories",
        description :"A selection of privately personalized reads; no accounts or sign-ups required." ,
        featuredImageMobile : "./picture/Snapshoot Portfolio (1).png",
        featuredImageDesktop : "./picture/Snapshoot Portfolio (3).png",
        technologies:"HTML , CSS , JavaScript",
        buttons: "projectss#2",
        linkLive: "#",
        linkSource:"#"
    },
    {
        name: "Tonic",
        description :"A selection of privately personalized reads; no accounts or sign-ups required." ,
        featuredImageMobile : "./picture/Snapshoot Portfolio (2).png",
        featuredImageDesktop : "./picture/Snapshoot Portfolio 4.png",
        technologies:"HTML , CSS , JavaScript",
        buttons: "projectss#3",
        linkLive: "#",
        linkSource:"#"
    },
    {
        name: "Multi-Stories",
        description :"A selection of privately personalized reads; no accounts or sign-ups required." ,
        featuredImageMobile : "./picture/Snapshoot Portfolio (3).png",
        featuredImageDesktop : "./picture/Snapshoot Portfolio (1).png",
        technologies:"HTML , CSS , JavaScript",
        buttons: "projectss#4",
        linkLive: "#",
        linkSource:"#"
    }

]
const root = document.getElementById('portfolio');
for (let i = 0; i < projectDetails.length; i++) {
  root.innerHTML += `
<section class="Works">
<div class="${i % 2 == true?"Tonic":"popup-project-desk"}">
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
  console.log(projectDetails)


}



let OpenProject = document.querySelectorAll(".See-project")
let fullSection = document.querySelector(".works-card")

for(let i = 0; i < OpenProject.length ;i++){
  OpenProject[i].onclick = function(){
    fullSection.classList.add("openMe")
    console.log(projectDetails[i])
   document.querySelector('.works-card h2').innerText=projectDetails[i].name
   document.querySelector('.works-card img').src=projectDetails[i].featuredImageMobile
   document.querySelector('.works-card img').src=projectDetails[i].featuredImageDesktop
  }
}


// OpenProject.addEventListener('click',function() {
//   console.log(OpenProject)
//   fullSection.classList.add("openMe")
//   OpenProject.classList.add("displayMe")
// });


const Closed= document.getElementById('close-me');
Closed.addEventListener('click', function() {
  // this.parentElement.parentElement.classList.remove("openMe")
  fullSection.classList.remove("openMe")
  // OpenProject.classList.remove("displayMe")
  
});

