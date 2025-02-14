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
btn.addEventListener("click", changeContent);

let text = document.querySelector("span");

function changeContent() {
    text.textContent = "the Tibetan Research program";
    text.style.fontWeight = "bold";
    text.style.textDecoration = "underline";
}