let today = new Date().getDay();
let day = document.getElementById("day");
let image = document.getElementById("image");
let diet = document.querySelector("#diet");

if (today == 0) {
    day.textContent = "Sunday";
    diet.textContent = "Quinoa salad with roasted vegetables tossed in olive oil";
    image.src = "images/quinoa_salad.jpg";
}

else if (today == 1) {
    day.textContent = "Monday";
    diet.textContent = "Mediterranean chickpea salad with olive oil dressing";
    image.src = "images/chickpea_salad.jpg";
}

else if (today == 2) {
    day.textContent = "Tuesday";
    diet.textContent = "Caprese salad with tomatoes, basil, and olive oil";
    image.src = "images/caprese_salad.jpg";
}

else if (today == 3) {
    day.textContent = "Wednesday";
    diet.textContent = "Turkey wrap with olive oil-based pesto and vegetables";
    image.src = "images/turkey_wrap.jpg";
}

else if (today == 4) {
    day.textContent = "Thursday";
    diet.textContent = "Farro salad with vegetables, goat cheese, and olive oil";
    image.src = "images/farro_salad.jpg";
}

else if (today == 5) {
    day.textContent = "Friday";
    diet.textContent = "Grilled vegetable panini with olive oil-brushed bread";
    image.src = "images/panini.webp";
}

else {
    day.textContent = "Saturday";
    diet.textContent = "Spinach and arugula salad with vegetables and olive oil dressing";
    image.src = "images/spinach_arugula_salad.webp";
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