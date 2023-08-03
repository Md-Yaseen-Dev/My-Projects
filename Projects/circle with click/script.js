function app() {
    const spans = document.querySelectorAll(".span");

    const circle_count = randomsize(10, 25)
    const fragment = document.createDocumentFragment();
    for (i = 0; i <= circle_count; i++) {

        const circle = get_circle();

        fragment.appendChild(circle);


    }
    document.body.appendChild(fragment);

}

function get_circle() {
    const span = document.createElement("span");
    span.classList.add("circle")

    const size = randomsize(20, 160);

    const color = randomColor();



    // const x = randomsize(0, window.innerWidth - parseInt(size)) + "px";
    // const y = randomsize(0, window.innerHeight - parseInt(size)) + "px";

    span.style.width = size + "px";
    span.style.height = size + "px";
    span.style.backgroundColor = color;
    span.style.top = randomsize(20,500) + "px"
    span.style.left = randomsize(30,1080) + "px"

    return span;
}





function randomsize(min, max) {
    return Math.random() * (max - min) + min
}
// console.log(randomsize(10,200))
function randomColor() {
    const randomNum = Math.floor(Math.random() * 16785983).toString(16);

    return `#${randomNum}`;


}

// app();

document.querySelector("button").addEventListener("click", function () {
    app();
})