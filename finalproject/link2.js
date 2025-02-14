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
btn.addEventListener("click", accessLink);

let link = document.querySelector("span");

function accessLink() {
    link.innerHTML = "<a href='https://youthforsdg.org/2023/10/30/sustainable-development/'>research article</a>";
    link.style.fontWeight = "bold";
}