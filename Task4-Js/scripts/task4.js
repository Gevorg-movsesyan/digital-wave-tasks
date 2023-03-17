//1․ Տրված են երկու թվեր, տպեք դրանցից մեծը

let bigNumFunc = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}
console.log(bigNumFunc(86, 47));

//2․ Տրված է բնական թիվ։ Ստուգեք արդյոք վերջին թվանշանը 2 է։ 

let lastNumberFunc = (num) => {
  let number = num % 10;
  if (number === 2) {
    return true
  }
  return false
}
console.log(lastNumberFunc(102))

//3․ Տրված է երկու հեռավորություն, մեկը կիլոմետրով, մյուսը մետրով։ Գտեք որն է ավելի մեծ։ 

let distanceFunc = () => {
  let mm = 1;
  let sm = 10 * mm;
  let m = 10 * sm;
  let km = 10 * m;
  let meter;
  let kilometer;
  let meterPrompt = prompt('Մուտքագրեք թիվ մետրով');
  meter = meterPrompt * m * sm * mm
  let kilometerPrompt = prompt('Մուտքագրեք թիվ կիլոմետրով');
  kilometer = kilometerPrompt * km * m * sm * mm
  if (meter > kilometer) {
    alert(`${meterPrompt} մետրը մեծ է ${kilometerPrompt} կիլոմետրից`)
  } else if (meter < kilometer) {
    alert(`${kilometerPrompt} կիլոմետրը մեծ է ${meterPrompt} մետրից`)
  } else if (meter === kilometer) {
    alert(`${kilometerPrompt} կիլոմետրը հավասար է ${meterPrompt} մետրին`)
  }
}
distanceFunc();


let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45]
//4․ Գտնել զանգվածի երկարություն

console.log(arr.length)

//5. Տպել զանգվածի բոլոր էլեմենտները

for (let item of arr) {
  console.log(item);
}

//6․ Գտնել զանգվածի բոլոր թվերի գումարը

let numAmountFunc = () => {
  let numAmount = 0;
  for (let i = 0; i < arr.length; i++) {
    numAmount += arr[i]
  }
  return numAmount
}
console.log(numAmountFunc())

//7․ Գտնել թե քանի 1 կա զանգվածում

let numFunc1 = () => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sum++
    }
  }
  return sum
}
console.log(numFunc1())

//8․ Գտնել զույգ թվերի քանակը

let evenNumFunc = () => {
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum++
    }
  }
  return evenSum

}
console.log(evenNumFunc())

//9․ Գտնել կենտ էլեմենտների քանակը  

let oddNumFunc = () => {
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddSum++
    }
  }
  return oddSum

}
console.log(oddNumFunc())

//10․ Գտնել զանգվածի մինիմում արժեքը

let minFunc = () => {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}
console.log(minFunc())
// տարբերակ 2  
let minFunc2 = () => {
  return Math.min(...arr)
}
console.log(minFunc2())

//11․ Գտնել զանգվածի մաքսիմում արժեքը

let maxFunc = () => {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

console.log(maxFunc())

// տարբերակ 2  
let maxFunc2 = () => {
  return Math.max(...arr)
}
console.log(maxFunc2())

//12. Գտնել զանգվածի էլեմենտների քառակուսիների գումարը

let func5 = () => {
  let sum3 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum3 += arr[i] ** 2
  }
  return sum3
}
console.log(func5())
//13*․ Շուռ տալ զանգվածը, այնպես որ վերջին արժեքը դառնա առաջինը, իսկ առաջին դառնա վերջինը և այդպես շարունակ

let reverseFunc = () => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result
};
console.log(reverseFunc());

// տարբերակ 2 

let reverseFunc2 = () => {
  return arr.reverse()
}
console.log(reverseFunc2())

//14*․ Դասավորել աճման կարգով 

let minMaxFunc = () => {
  let num;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        num = arr[i];
        arr[i] = arr[j];
        arr[j] = num;
      }
    }

  }
  return arr;
}
console.log(minMaxFunc());

// տարբերակ 2 

let minMaxFunc2 = () => {
  return arr.sort((a, b) => a - b)
}
console.log(minMaxFunc2())

let arr1 = ["Hello", 15, "World", true, 89, 157, [1, 3, 7],65];

//15. Գտնել զանգվախի էլեմենտներից քանիսի տիպն է number

let arr2 = [];
let typeNumFunc = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'number') {
      arr2.push(array[i]);
    }
    else if (!Array.isArray(array[i])) continue;
    result.push(...typeNumFunc(array[i]));
  }
  return result;
}
typeNumFunc(arr1);
console.log(arr2.length)

//16. Գտնել զանգվածի էլեմենտներից քանիսն են բուլյան տիպի

let arr3 = [];
let typeBoolFunc = (array2) => {
  let result1 = [];
  for (let i = 0; i < array2.length; i++) {
    if (typeof array2[i] == 'boolean') {
      arr3.push(array2[i]);
    }
    else if (!Array.isArray(array2[i])) continue;
    result1.push(...typeBoolFunc(array2[i]));
  }
  return result1;
}
typeBoolFunc(arr1);
console.log(arr3.length)

//17․ Տպել զանգվածի վերջին էլեմենտի բոլոր էլեմենտները

let lastElemFunc = () => {
  for (let i = arr1.length - 1; i < arr1.length; i--) {
    if (Array.isArray(arr1[i])) {
      return arr1[i]
    }
  }
}
console.log(lastElemFunc())

//18․ Տպել զանգվախի վերջին էլեմենտի բոլոր էլեմենտների գումարը

let lastElemAmountFunc = () => {
  let num = 0;
  for (let i = arr1.length - 1; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      for (let item of arr1[i]) {
        num += item
      }

    }
  }
  return num
}
console.log(lastElemAmountFunc())

//19․ Տպել միայն զույգ ինդեքս ունեցող անդամները

let evenIndexFunc = () => {
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      console.log(arr1[i])
    }
  }
}
evenIndexFunc()

//20․ Օգտատերը ներմուծում է թիվ։ ներմուծված թվին համապատասխան տպել Ամիսը։ Չօգտագործել if

let user = prompt('Թիվ-ամիս');
switch (user) {
  case '1':
    console.log('Հունվար');
    break;
  case '2':
    console.log('Փետրվար');
    break;
  case '3':
    console.log('Մարտ');
    break;
  case '4':
    console.log('Ապրիլ');
    break;
  case '5':
    console.log('մայիս');
    break;
  case '6':
    console.log('Հունիս');
    break;
  case '7':
    console.log('Հուլիս');
    break;
  case '8':
    console.log('Օգոստոս');
    break;
  case '9':
    console.log('Սեպտեմբեր');
    break;
  case '10':
    console.log('Հոկտեմբեր');
    break;
  case '11':
    console.log('Նոյեմբեր');
    break;
  case '12':
    console.log('Դեկտեմբեր');
    break;
  default:
    alert('մուտքագրել 1-12 Թվերը')
}

//21. Օգտատերը ներմուծում է թվեր։ Այդ թվերը ավելացրեք զանգվածում այնքան ժամանակ մինչև չգրի "exit"

let numArr = []
let userNumFunc = () => {
  while (true) {
    let user2 = prompt('մուտքագրել Թվեր ')
    if (user2 !== 'exit') {
      numArr.push(Number(user2))
    }
    else if (user2 === 'exit') {
      return numArr
    }
  }
}
console.log(userNumFunc(numArr));


//22. Տրված են 2 զանգվածներ։ Համեմատել նրանց
//ա) երկարությունը և տպել առաջինն է մեծ թե երկրորդը

let arrFirst = [4, 6, 8, 7, 99]
let arrLast = [3, 4, 5, 7, 9, 3, 4, 11, 23]

let compareFunc = () => {
  for (let i = 0; i < arrFirst.length; i++) {
  }
  for (let j = 0; j < arrLast.length; j++) {
  }
  if (arrFirst.length > arrLast.length) {
    return arrFirst
  } else {
    return arrLast
  }
}
console.log(compareFunc());

//բ) էլեմենտների գումարը և տպել առաջինն է մեծ թե երկրորդը

let compareAmountFunc = () => {
  let amount1 = 0;
  let amount2 = 0;
  for (let i = 0; i < arrFirst.length; i++) {
    amount1 += arrFirst[i]
  }
  for (let j = 0; j < arrLast.length; j++) {
    amount2 += arrLast[j]
  }
  if (amount1 > amount2) {
    return ` մեծ է առաջինն`
  } else {
    return `մեծ է երկրորդը`
  }

}
console.log(compareAmountFunc())








