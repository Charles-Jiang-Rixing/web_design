let btn3 = document.querySelector("#button3");
btn3.addEventListener("click", changeImage);

let imgs = document.getElementsByClassName("images");

function changeImage() {
    imgs[0].src = "images/moisturizer2-480.jpg";
    imgs[0].srcset="images/moisturizer2-960.jpg 960w, images/moisturizer2-1440.jpg 1440w;"
    imgs[1].src = "images/soap2-480.webp";
    imgs[1].srcset = "images/soap2-960.jpg 960w, images/soap2-1440.jpg 1440w";
    imgs[2].src = "images/lubricant2-480.jpg";
    imgs[2].srcset = "images/lubricant2-960.jpg 960w, images/lubricant2-1440.jpg 1440w";
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