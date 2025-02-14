let navbar = document.querySelector(".navbar")
navbar.addEventListener("click", displayMenu);
let menu = document.querySelector(".menu");

function displayMenu() {
    menu.style.display = "block";
}
    
let collapseMenu = document.querySelector(".button");
collapseMenu.addEventListener("click", collapseContent);

function collapseContent() {
    menu.style.display = "none";
}

let btn = document.getElementById("btn");
btn.addEventListener("click", randomBgColor);

function randomBgColor() {
    let randomHue = Math.floor(Math.random() * 365);
    let bgColor = document.querySelector("body");
    bgColor.style.backgroundColor = 'hsl(' + randomHue + ', 50%, 45%)';
}