let obj = {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
}

//1. Զանգվածով ստանալ վերը նշված օբյեկտի key-երը

let objKeyFunc = () => {
    let newArr = [];
    for (let key in obj) {
        newArr.push(key)
    }
    return newArr
}
console.log(objKeyFunc());

//2. Զանգվածով ստանալ վերը նշված օբյեկտի value-ները

let objValueFunc = () => {
    let newArr = [];
    for (let key in obj) {
        newArr.push(obj[key])
    }
    return newArr
}
console.log(objValueFunc());

//3․ ['author', 'title', 'readingStatus'] և ['Bill Gates', 'The Road Ahead', true] զանգվածներից ստանալ օբյեկտ, որտեղ key-երը 
//առաջին զանգվածի էլեմենտներն են, իսկ value-ները 2րդ զանգվածի։

let arr = ['author', 'title', 'readingStatus'];
let arr1 = ['Bill Gates', 'The Road Ahead', true]

let newObjFunc = () => {
    let newobj = {};
    for (let i = 0; i < arr.length; i++) {
        newobj[arr[i]] = arr1[i]
    }
    return newobj
}

console.log(newObjFunc())

//4.  Սորտավորել զանգվածը ըստ յուր․ օբյեկտի libraryId-ի։

let library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

let sortFunc = () => {
    library.sort((a, b) => a.libraryID - b.libraryID);
    return library
}
console.log(sortFunc())

// տարբերակ 2 
let sortFunc2 = () => {
    let x;
    for (let i = 0; i < library.length; i++) {
        for (let j = i; j < library.length; j++) {
            if (library[i].libraryID > library[j].libraryID) {
                x = library[i].libraryID;
                library[i].libraryID = library[j].libraryID;
                library[j].libraryID = x;
            }
        }

    }
    return library;
}
console.log(sortFunc2());

//5․ Գրել ֆունկցիա, որը կջնջի զանգվածում եղած null, 0, '', "", undefined, false էլեմենտները

const array = [NaN, 0, 15, false, -22, '', undefined, 47, null]
let deleteelemFunc = () => {
    const result = array.filter(arr => arr !== null && arr !== 0 && arr !== '' && arr !== undefined && arr !== false);
    return result
}
console.log(deleteelemFunc());





