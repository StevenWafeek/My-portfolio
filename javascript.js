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