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

let link1 = document.querySelector("#link1");
let link2 = document.querySelector("#link2");

function accessLink() {
    link1.innerHTML = "<a href='https://chinaglobaldialogue.com/2022/07/28/甘肃省暖水村化肥使用现状/'>investigative article</a>"
    link1.style.fontWeight = "bold";
    link2.innerHTML = "<a href='https://baike.baidu.com/item/暖水村/61862298?fr=ge_ala'>online encyclopedia</a>"
    link2.style.fontWeight = "bold";
}