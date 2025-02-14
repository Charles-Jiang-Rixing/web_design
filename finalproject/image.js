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
btn.addEventListener("click", changeImage);

let imageList = document.getElementsByTagName("img");

function changeImage() {
    imageList[0].src = "images/student3-480.jpg";
    imageList[0].srcset="images/student3-960.jpg 960w, images/student3-1440.jpg 1440w;"
    imageList[1].src = "images/student4-480.jpg";
    imageList[1].srcset = "images/student4-960.jpg 960w, images/student4-1440.jpg 1440w";
}