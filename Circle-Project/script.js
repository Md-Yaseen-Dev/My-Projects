
const bodyE1 = document.querySelector("body");

const itemeE1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

bodyE1.addEventListener("click", function (event) {

    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const divE1 = document.createElement("div");
    divE1.style.left = xPos + "px";
    divE1.style.top = yPos + "px";

    const size = Math.random() * 100;
    divE1.style.width = size + "px"
    divE1.style.height = size + "px"
    divE1.style.width = size 

    let color = "";
    for (let i = 0; i < 6; i++) {

        color += itemeE1[randomColor()];
    }
    divE1.style.backgroundColor = `#${color}`
    bodyE1.appendChild(divE1);
    setTimeout(() => {
        divE1.remove()
    }, 2000)
})

function randomColor() {

    return Math.floor(Math.random() * itemeE1.length)
}

