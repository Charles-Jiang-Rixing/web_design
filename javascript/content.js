let paragraphs = document.querySelectorAll("p");
let lastp = paragraphs[5];

let btn4 = document.getElementById("button4");
btn4.addEventListener("click", changeContent);

function changeContent() {
lastp.textContent = "The effect is yet to be determined.";
lastp.style.color = "red";
lastp.style.fontSize = "1.1em";
}