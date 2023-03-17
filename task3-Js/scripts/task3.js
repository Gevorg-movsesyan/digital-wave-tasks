//7.	Declare variable. Initialize it with the value, which shows temperature in degrees Celsius. Print its equivalent in degrees Fahrenheit.
//To convert temperaturesin degrees Celsius to Fahrenheit use the following formula: °C * 1.8 +32 = °F .

let temperatureFunc = () => {
    let c = 10;
    let f = c * 1.8 + 32
    return `${f} farenheit`
}
console.log(temperatureFunc())

 //8.	Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let dividerFunc = (num1, num2) => {
    if (num1 % num2 === 0 || num2 % num1 === 0) {
        console.log(1)
    } else {
        console.log(0)
    }
}
dividerFunc(16, 4)

 //9.Given three numbers. Find the maximum one.
let arr = [1, 45, 7]
let maxNumFunc = () => {
    let max = arr[0];
    for (let item of arr) {
        if (item > max) {
            max = item
        }
    }
    return max
}
console.log(maxNumFunc())

//14.Print all numbers between 1 and 10.
let numberFunc = (a) => {
    for (let i = 2; i < a; i++) {
        console.log(i)
    }
}
numberFunc(10)

//15.	Print all numbers between 1 and 10 except 6.
let printNumFunc = () => {
    for (let i = 2; i < 10; i++) {
        if (i === 6) {
            continue
        }
        console.log(i)
    }
}
printNumFunc()

//16.Print all even numbers between 1 and 10.

let evenNumFunc = () => {
    for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
evenNumFunc()

 //17.	Calculate the sum of all numbers between 1 and 10 (using loop).

let sumNumberFunc = () => {
    let sum = 0;
    for (let i = 2; i < 10; i++) {
        sum += i
    }
    return sum
}
console.log(sumNumberFunc())

//18.	Calculate the sum of all numbers between 1 and 10 except 8.

let sumFunc = () => {
    let sum = 0;
    for (let i = 2; i < 10; i++) {
        if (i === 8) {
            continue
        }
        sum += i
    }
    return sum
}
console.log(sumFunc())

 //19.	Calculate the sum of all odd numbers between 1 and 10.

let oddNumbersFunc = () => {
    let sum = 0;
    for (let i = 2; i < 10; i++) {
        if (i % 2 !== 0) {
            sum += i
        }
    }
    return sum
}
console.log(oddNumbersFunc());

 //20.	Calculate the sum of squares of all numbers between 1 and 10.

let squaresNumFunc = () => {
    let sum = 0;
    for (let i = 2; i < 10; i++) {

        sum += i ** 2
    }
    return sum
}
console.log(squaresNumFunc())

 //22.Given five numbers as input. Calculate and print the average of the numbers. 
let averageNumbersFunc = (arr) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += arr[i] / arr.length
    }
    return Math.round(num)
}
console.log(averageNumbersFunc([2, 3, 7, 8, 9]))





