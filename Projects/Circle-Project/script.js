
const bodyE1 = document.querySelector("body");

const itemeE1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let currentcircle = "null";

function createCircle() {
    const divE1 = document.createElement("div");
    const size = getRandomSize(10, 210);
    // const size = Math.random() * 150;
    divE1.style.width = size + "px";
    divE1.style.height = size + "px";

    let color = "";
    for (let i = 0; i < 6; i++) {

        color += itemeE1[randomColor()];
    }
    divE1.style.backgroundColor = `#${color}`;
    bodyE1.appendChild(divE1);


    timeout = setTimeout(() => {
        divE1.remove();
    }, 3000)
    return divE1;


}

currentcircle = createCircle();
document.addEventListener("click", (event) => {
    currentcircle = createCircle();

    currentcircle.style.left = event.clientX + "px";
    currentcircle.style.top = event.clientY + "px";

})

document.addEventListener("mousemove", function (event) {
    currentcircle.style.left = event.clientX + "px";
    currentcircle.style.top = event.clientY + "px";

})


function randomColor() {

    return Math.floor(Math.random() * itemeE1.length)
}

function getRandomSize(min, max) {
    return Math.random() *( max - min) + min
}