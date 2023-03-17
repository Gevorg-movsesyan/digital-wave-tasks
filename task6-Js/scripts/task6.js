//1․Ստեղծել ֆունկցիա, որը կվերցնի զանգված որպես արգումենտ (սթրինգերի) և կվերադարձնի մեկ այլ լիստ, որը կպարունակի այդ լիստի բոլոր այն բառերը, որոնք սկվում են ձայնավորով։

let vowelsFunc = (arr) => {
    let newArr = []
    let x = ['a', 'e', 'i', 'o', 'u',]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if (arr[i][0] === x[j]) {
                newArr.push(arr[i])
            }
        }
    }
    return newArr
}
console.log(vowelsFunc(['hello', 'next', 'prev', 'apple']))

//2․ Ստեղծել ֆունկցիա, որը որպես արգումենտ ընդունած թիվը կստուգի և կասի այն պարզ թիվ է թե ոչ

let primeNumberfunc = (num) => {
    if (num === 1) {
        return "1ը ոչ պարզ է ոչ բարդ"
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}
console.log(primeNumberfunc(8))

//3․ Գրել ֆունկցիա, որը կտպի True, եթե լիստի բոլոր էլեմենտները 1 կամ 4 են։ Հակառակ դեպքում տպել False:

let sameNumbersFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 4) {
            continue;
        }
        return false
    }
    return true
}
console.log(sameNumbersFunc([1, 4, 1, 4, 1, 4]))

//4․ Ստեղծել ֆունկցիա, որը կստեղծի և կտպի լիստ, որի արժեքները [1, 30] միջակայքում գտնվող թվերի քառակուսիներն են

let arr = [1, 30];
let squareFunc = () => {
    let newArr = []
    for (let i = arr[0] + 1; i < arr[1]; i++) {
        newArr.push(i ** 2)
    }
    return newArr
}
console.log(squareFunc())

//5․Ստեղծել ֆունկցիա, որը կվերցնի մեկ արգումենտ՝ n: Վերադարձնել n երկարությամբ լիստ, որը կպարունակի (-100, 400) միջակայքում գտնվող պատահական թվեր։

let randomFunc = (n) => {
    let newArr = [];
    let max = 400;
    let min = -100;
    while (newArr.length < n) {
        newArr.push(Math.floor(Math.random() * (max - min) + min))
    }
    return newArr
}
console.log(randomFunc(8))

//6. Ստեղծել ֆունկցիա, որը կգումարի տրված լիստի բոլոր թվերը և կվերադարձնի այն։ Եթե տարրերից մեկը 13 է, դադարեցնել հաշվարկը
//# և վերադարձնել մինչև այդ պահը հաշված գումարը։

let func = () => {
    let arr = [3, 6, 9, 13, 10, 30];
    let sum = 0;
    for (let item of arr) {
        if (item === 13) {
            break;

        }
        sum += item
    }
    return sum
}
console.log(func())





  


    
