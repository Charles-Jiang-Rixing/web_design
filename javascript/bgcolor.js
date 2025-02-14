let btn = document.getElementById("button");
btn.addEventListener("click", randomBgColor);

function randomBgColor() {
    let randomHue = Math.floor(Math.random() * 365);
    let bgColor = document.querySelector("body");
    bgColor.style.backgroundColor = 'hsl(' + randomHue + ', 50%, 45%)';
}

let navbar = document.getElementById("navbar");
navbar.addEventListener("click", displayMenu);
let menu = document.getElementById("menu");

function displayMenu() {
    menu.style.display = "block";
}
    
let collapseMenu = document.getElementById("collapseMenu");
collapseMenu.addEventListener("click", collapseContent);

function collapseContent() {
    menu.style.display = "none";
}