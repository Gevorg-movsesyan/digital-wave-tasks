let square = document.getElementById('square');
let container = document.getElementById('container');

container.addEventListener("click", clickPosition);

function clickPosition(e) {
    let xPosition = e.clientX - (square.offsetWidth / 2);
    let yPosition = e.clientY - (square.offsetHeight / 2);
    let translate = "translate3d(" + xPosition + "px," + yPosition + "px,0)"
    square.style.transform = translate
}