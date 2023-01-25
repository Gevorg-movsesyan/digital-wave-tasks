 //1. Ստուգել, արդյո՞ք ներմուծված սթրինգը սկսվում է a կամ o-ով։ Եթե հա տպենք սթրինգն ինչպես կա, իսկ հակառակ դեպքում՝ սթրինգի հակառակը։
let checkStringFunc = () => {
    let checkString = prompt('մուտքագրեք բառ')
    if (checkString[0] === 'a' || checkString[0] === 'o') {
        console.log(checkString)
    } else {
        console.log(checkString.split('').reverse().join(''))
    }

}
checkStringFunc()

// տարբերակ 2 
// let checkStringFunc2 = () => {
//     let checkString2 = prompt('մուտքագրեք բառ')
//     let z = ''
//     if(checkString2[0]==='a' || checkString2[0] ==='o'){
//         console.log(checkString2)
// }
// else{
//     for(let i =checkString2.length-1;i>=0;i--){
//      z+=(checkString2[i])

//     }  
// }
// console.log(z)
// }
// checkStringFunc2()

 //2. Պահանջել մուտքագրել ծածկագիր։ Եթե ծածկագիրը պարունակում է 6-ից 12-ից նիշ և պարունակում է թվանշաններ, տառեր և հետևյալ սիմվոլներից մեկը "%", տպել, որ ծածկագիրն ուժեղ է։ Հակառակ դեպքում զգուշացրեք օգտատիրոջը, որ ծածկագիրը պետք է փոխվի։
 let passwordFunc = () => {
    let x = document.getElementById("password").value
    let p = document.getElementById("p")
    let min = 6;
    let max = 12;
    let regNumber = new RegExp("[0-9]");
    let regSumbol = new RegExp("[!@#$%^&*]");
    let regString = new RegExp("[a-zA-Z]")
    if ((x.length >= min && x.length <= max) && (regNumber.test(x)) && (regSumbol.test(x)) && (regString.test(x))) {
        p.innerText = 'ծածկագիրն ուժեղ է ';
    } else {
        p.innerText = "ծածկագիրը պետք է փոխվի"
    }
}

 //3. Տրված է սթրինգ։ Տպեք նոր սթրինգ, որը կպարունակի օրիգինալ սթրինգի բոլոր տառերը կրկնապատկված։
//Օրինակ, եթե ունենք հետևյալ սթրինգը՝ Monty, պետք է ստանանք MMoonnttyy

let string = 'alo'
let newString = string.split('').reduce((a, b) => {
    return a += b + b

}, [])
console.log(newString)

// տարբերակ 2 

let doubledStringFunc = (x) => {
    let string = x.split('')
    let newString = ''
    for (let i = 0; i < string.length; i++) {
        newString += string[i] + string[i]
    }
    return newString
}
console.log(doubledStringFunc("hello"))

 //4. # Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings
let a = "xxcaazz"
let b = "xxbaaz"
let sum = 0;
let stringFunc = () => {
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] + (a[i + 1]) === b[i] + (b[i + 1])) {
            sum++
        }
    }
    return sum
}
console.log(stringFunc())

 //5․ Տրված է թվերի զանգված։ Ֆիլտրել և ստանալ նոր զանգված, որտեղ բոլոր էլեմենտները մեծ կլինեն 6-ից։
let arr = [4, 5, 8, 25, 63, 98, 14];
let arrFilterFunc = () => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 6) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(arrFilterFunc())

//6. Տրված է թվերի զանգված։ Բոլոր էլեմենտները մեծացնել 5 անգամ։

let arrFunc = () => {
    let newArr = []
    for (let item of arr) {
        newArr.push(item * 5)
    }
    return newArr
}
console.log(arrFunc())

//7․ Տրված է օգտատերերի օբյեկտների զանգված․
 //ա) գտնել օգտատերերի միջին տարիքը

let arr2 = [
    { name: "John", age: 30 },
    { name: "Lilit", age: 25 },
    { name: "Ani", age: 27 },
    { name: "Karen", age: 20 },
    { name: "Aram", age: 32 },
    { name: "Luse", age: 17 }];

let averageAgeFunc = () => {
    let sum = 0;
    for (let item of arr2) {
        sum += item.age
    }
    return Math.round(sum / arr2.length)
}
console.log(averageAgeFunc())

 //բ) ֆիլտրել բոլոր օգտատերերին, որոնց տարիքը մեծ է 23-ից։

let filterAgeFunc = () => {
    let newArr = []
    for (let item of arr2) {
        if (item.age > 23) {
            newArr.push(item)

        }
    }
    return newArr
}
console.log(filterAgeFunc())

 //8․Տրված է հետևյալ օբյեկտը
 //ա) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի բանալիները(keys)

let obj =
{
    id: 1,
    firstName: "Avetiq",
    lastName: "Avetiq",
    age: 30,
    address: "Komitas 15",
    city: "Ijevan",
    isAdmin: true,
};

let keysFunc = () => {
    let newArr = [];
    for (let key in obj) {
        newArr.push(key)

    }
    return newArr
}
console.log(keysFunc())

//բ) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի արժեքները(values)

let valuesFunc = () => {
    let newArr = [];
    for (let key in obj) {
        newArr.push(obj[key])

    }
    return newArr
}
console.log(valuesFunc())