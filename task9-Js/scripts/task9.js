let text = document.getElementById('text');
let container = document.getElementById('containerone');
let container3 = document.getElementById("containertwo");

function disiredTask() {

    let p = document.createElement('p');
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    if (text.value) {
        p.append(text.value);
        p.append(button1);
        p.append(button2);
        container.append(p);
        button1.innerHTML = "Կատարված է"
        button2.innerHTML = "Ջնջել"
        text.value = ''
    }

    button1.addEventListener('click', addFunction);
    function addFunction() {
        container3.append(p);
        button1.remove();
    }

    button2.addEventListener('click', deleteFunction);
    function deleteFunction() {
        p.remove();
        button1.remove();
        button2.remove();
    }
}



let gladiatorNum = +prompt('Enter the number of gladiators');
let arr = [];

let createRandomGladiator = () => {
    for (let i = 0; i < gladiatorNum; i++) {
        let gladiator = {
            id: i,
            health: Math.floor(Math.random() * 20 + 80),
            power: Math.floor(Math.random() * 10 + 5)
        }
        arr.push(gladiator);

    }
}

let getWinnerGladiator = () => {
    while (arr.length > 1) {
        let a = Math.floor(Math.random() * arr.length);
        let b = Math.floor(Math.random() * arr.length);
        while (a === b) {
            b = Math.floor(Math.random() * arr.length);
        }
        arr[a].health -= arr[b].power;
        if (arr[a].health > 0) {
            arr[b].health -= arr[a].power;
        }

        arr = arr.filter(item => item.health > 0);
    }

    console.log("haxtox e chanachvum: ", arr[0]);
}

createRandomGladiator();
getWinnerGladiator();