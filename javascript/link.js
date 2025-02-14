let btn2 = document.getElementById("button2");
btn2.addEventListener("click", changeLink);

function changeLink() {
    let link = document.querySelector("#link");
    let randomInt = Math.floor(Math.random() * 10);

    if (randomInt <= 4) {
        link.innerHTML = "Go to <a href='https://www.google.com'>Google</a>";
    }
    else {
        link.innerHTML = "Go to <a href='https://www.baidu.com'>Baidu</a>";
    }
}
