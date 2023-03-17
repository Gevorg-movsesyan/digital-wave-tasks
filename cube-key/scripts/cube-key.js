let cube = document.getElementById('square');
let timer = null;
let p = document.getElementById('p')

let array = [];
const keyDown = (event) => {
    if (!array.includes(event.key) && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key) && array.length < 2) {
        array.push(event.key);
        setupTimer();
    }
}
const setupTimer = () => {
    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(moveElement, 20)
}

const keyUp = (event) => {
    if (array.includes(event.key)) {
        const index = array.indexOf(event.key)
        if (index > -1) {
            array.splice(index, 1);
            p.innerText = ''
            setupTimer();

        }
    }
}

const moveElement = () => {
    if (!array.length) {
        clearInterval(timer)

    } else {

        array.forEach((arrow) => {
            switch (arrow) {
                case 'ArrowRight':
                    if (cube.offsetLeft + cube.offsetWidth < window.innerWidth) {
                        cube.style.marginLeft = `${cube.offsetLeft + 10}px`;
                    }
                    break
                case 'ArrowLeft':
                  if (cube.offsetLeft > 0) {
                        cube.style.marginLeft = `${cube.offsetLeft - 10}px`;
                    }
                    break
                case 'ArrowUp':
                   if (cube.offsetTop > 0) {
                        cube.style.marginTop = `${cube.offsetTop - 10}px`;
                    }
                    break
                case 'ArrowDown':
                    if (cube.offsetTop + cube.offsetHeight < window.innerHeight) {
                        cube.style.marginTop = `${cube.offsetTop + 10}px`;
                    }
                    break

            }
            let name = array.map((item) => item.slice(5))
            p.innerText = name;

        })

    }
}






document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);



