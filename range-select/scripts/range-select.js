
let box = document.getElementById('box');
let arr = []
for (let i = 0; i < 20; i++) {
    let cube = document.createElement('div')
    cube.setAttribute('id', i)
    cube.setAttribute('class', 'cube')
    box.append(cube)
    arr.push(cube)

}
let newArr = [];
arr.map((item) => {
    item.addEventListener('click', function () {

        newArr.push(Number(item.id));
        item.style.backgroundColor = 'red'
        for (let i = newArr[0]; i <= newArr[1]; i++) {
            arr[i].style.backgroundColor = 'red'
        }
        if (newArr[0] > newArr[1]) {
            for (let i = newArr[1]; i <= newArr[0]; i++) {
                arr[i].style.backgroundColor = 'red'
            }
        } if (newArr.length > 2) {
            for (let i = newArr[0]; i <= newArr[1]; i++) {
                arr[i].style.backgroundColor = 'green'
            }
            for (let j = newArr[1]; j <= newArr[0]; j++) {
                arr[j].style.backgroundColor = 'green'

            }

            newArr.splice(0, 2);
        }
        if (item.style.backgroundColor = 'red') {
            item.style.backgroundColor = 'red'
        }

    })
})
