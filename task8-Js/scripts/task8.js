//1․ Գրել ֆունկցիա, որը պարամետրով ստանում է n բնական թիվ և 
//1-3-ի դեպքում վերադարձնում է "Վատ",
//4-6 - "Միջին"
//7-8 - "Լավ"
//9-10 - "Գերազանց"
//այլ դեպքերում "Սխալ գնահատական"։

let getNumbersFunc = (n) => {
    if (n >= 1 && n <= 3) {
        return "Վատ"
    }
    else if (n >= 4 && n <= 6) {
        return "Միջին"
    }
    else if (n === 7 || n === 8) {
        return "Լավ"
    }
    else if (n === 9 || n === 10) {
        return "Գերազանց"
    }
    return "Սխալ գնահատական"
}
console.log(getNumbersFunc(9));

//2. Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում 0-ից n թվի
//միջև ընկած թվերի գումարը (n-ը ներառյալ)։

let amountFunc = (n) => {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(amountFunc(6));

//3․ Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում n թվի ֆակտորյալը։

let factorialFunc = (num) => {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialFunc(num - 1));
    }
}
console.log(factorialFunc(6));

//4 Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n ամբողջ թիվ և վերադարձնում true n-ը պարզ թիվ լինելու դեպքում,
//հակառակ դեպքում false:

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
console.log(primeNumberfunc(9));

//5․ Գրել ֆունկցիա, որը պարամետրով ստանում է (x1, y1) և (x2, y2) կետերի կոորդինատները և վերադարձնում 2 կետերի
//միջև եղած հեռավորությունը:

let distanceBetweenPoints = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(distanceBetweenPoints(1, 2, 4, 6));

//6. Գրել ֆունկցիա, որը պարամետրով ստանում է arr զանգված և վերադարձնում նոր զանգված առանց կրկնվող տարրերի։
//օր․ [ 4, 4, 7, 8, 9, 5, 5, 6] --> [ 4, 7, 8, 9, 5, 6 ]:

let arr = [4, 4, 7, 8, 9, 5, 5, 6]

let deleteDuobleArrFunc = (arr) => {
    return arr.filter((el, index) => arr.indexOf(el) === index);
}

console.log(deleteDuobleArrFunc([4, 4, 7, 8, 9, 5, 5, 6]));

// տարբերակ 2 
let deleteDuobleArrFunc2 = () => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let x = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                x = true;
                break
            }
        }
        if (!x) {
            newArr.push(arr[i]);
        }

    }
    return newArr

}
console.log(deleteDuobleArrFunc2());

//7.https://edabit.com/challenge/8Qg78sf5SNDEANKti
let chickens = 2;
let cows = 4;
let pigs = 4;

let countFunc = (a, b, c) => {
    return chickens * a + cows * b + pigs * c
}
console.log(countFunc(5, 2, 8))

//8․ https://edabit.com/challenge/JesaFi5ntBEbGT8bu


let sec = 1;
let min = 60 * sec;
let hour = 60 * min;
let minHoursFunc = (hours, minutes) => {
    return (hours * hour) + (minutes * min)
}
console.log(minHoursFunc(1, 3));

//9․ https://edabit.com/challenge/vvuAkYEAArrZvmp6X

let bitwiseFunc = (a, b) => {
    return a & b
}
console.log(bitwiseFunc(7, 12))

let bitwiseOrFunc = (a, b) => {
    return a | b
}
console.log(bitwiseOrFunc(7, 12))

let bitwiseXorFunc = (a, b) => {
    return a ^ b
}
console.log(bitwiseXorFunc(7, 12));

//10. https://edabit.com/challenge/3kcrnpHk7krNZdnKK

let converNumberFunc = (num) => {
    return num.toString(2)
}
console.log(converNumberFunc(5));

//11. https://edabit.com/challenge/Q3n42rEWanZSTmsJm

let array = [1, 2, 3, 4, 5];
let minMaxFunc = () => {
    let newArr = []
    newArr.push(Math.min(...array))
    newArr.push(Math.max(...array))
    return newArr
}
console.log(minMaxFunc());

// տարբերակ 2 

let minMaxFunc2 = () => {
    let arr = [1, 2, 3, 4, 5]
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        else if (arr[i] > max) {
            max = arr[i]
        }

    }
    return [
        min,
        max
    ]
}
console.log(minMaxFunc2());

//12. https://edabit.com/challenge/xsi99TwpGyFC8KS6d

let splitFunc = (n) => {
    let newArr = [];
    newArr.push(Math.floor(n / 2))
    newArr.push(Math.ceil(n / 2))
    return newArr
}
console.log(splitFunc(11));







