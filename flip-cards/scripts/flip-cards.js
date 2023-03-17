let countCard = document.getElementById('numCard');
let container = document.getElementById('container');
let cardArr = [];
let comparedCards = [];
let matchedCards = [];

let startGame = function () {
    cardArr = [];
    comparedCards = [];
    matchedCards = [];
    container.innerHTML = '';
    container.setAttribute('class', 'style');
    let count = Number(countCard.value) * 2;
    if (count <= 2) {
        return alert('the number to be entered must not be less tan 2');
    }
    cardArr = Array(count).fill(null);
    cardArr = numbersCard(cardArr);
    createCards(cardArr);
}
let numbersCard = function (arr) {
    for (let i = 1; i <= arr.length / 2; i++) {
        for (let j = 0; j < 2; j++) {
            let randomIndex;
            do {
                randomIndex = Math.round(Math.random() * (arr.length - 1))
            } while (arr[randomIndex] !== null)
            arr[randomIndex] = i;
        }
    }
    return arr;
}

let createCards = function (arr) {
    arr.forEach((item, index) => {
        let elem = document.createElement('div');
        elem.id = `${index}`;
        elem.classList.add("card-style");
        elem.innerHTML = `<p class="text-style">${item}</p>`;
        elem.addEventListener('click', clickCard)
        container.append(elem);
        elem.style.backgroundColor = 'green'
    })
}

let clickCard = function (event) {
    if (matchedCards.includes(event.target.id) || comparedCards.includes(event.target.id)) {
        return
    }
    if (comparedCards.length < 2) {
        comparedCards.push(`${event.target.id}`);
        openCard(event.target);
        if (comparedCards.length === 2) {
            checkCards();
        }
    }
}

let openCard = function (elem) {
    elem.style.transform = 'rotateY(180deg)';
    elem.style.backgroundColor = 'yellow'
    elem.children[0].style.transform = 'rotateY(180deg)';
    elem.style.transition = '0.5s';
    elem.children[0].style.transition = '0.5s';
    setTimeout(() => {
        elem.children[0].style.display = 'block';
    }, 100)
}

let closeCard = function (elem) {
    elem.style.transform = 'rotateY(0deg)';
    elem.children[0].style.display = 'none';
    elem.style.backgroundColor = 'green';
}

let checkCards = function () {
    let elem1 = document.getElementById(comparedCards[0]);
    let elem2 = document.getElementById(comparedCards[1]);
    if (elem1.children[0].innerHTML === elem2.children[0].innerHTML) {
        setTimeout(() => {
            elem1.style.backgroundColor = 'white'
            elem2.style.backgroundColor = 'white'
        }, 500)

        matchedCards = [...matchedCards, ...comparedCards];
        setTimeout(() => {
            if (matchedCards.length === cardArr.length) {
                alert('You win')
            }
        }, 500)
    } else {
        setTimeout(() => {
            closeCard(elem1);
            closeCard(elem2);

        }, 500)
    }
    comparedCards = [];
};
