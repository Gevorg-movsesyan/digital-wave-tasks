//2. Ստեղծել to do list. 
//Օգտատերը էկրանին տեսնում է մեկ մուտքագրման դաշտ, որի կողքին կա կոճակ՝ Ավելացնել։ Տվյալ դաշտի միջոցով օգտատերը մուտքագրում է այն առաջադրանքները, որոնք 
//ուզում է կատարել։ Օրինակ՝ կատարել տնային աշխատանքը, գնալ կինո նայելու և այլն։ 
//Մուտքագրված տվյալները ավելանում են ներքևում ՝ կատարման ենթակա ցուցակում, որի կողքին կա "Կատարված է" և "Ջնջել" կոճակները։ 
//Ջնջել կոճակը սեղմելուց հետո առաջադրանքը անհետանում է, իսկ կատարված-ի դեպքում ավելանում ներքևում՝ մեկ այլ ցուցակում։ 

let text = document.getElementById('text');
let containerone = document.getElementById('containerone');
let containertwo = document.getElementById("containertwo");

function disiredTask() {

    let p = document.createElement('p');
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    if (text.value) {
        p.append(text.value);
        p.append(button1);
        p.append(button2);
        containerone.append(p);
        button1.innerHTML = "Կատարված է"
        button2.innerHTML = "Ջնջել"
        text.value = ''
    }

    button1.addEventListener('click', addFunction);
    function addFunction() {
        containertwo.append(p);
        button1.remove();
    }

    button2.addEventListener('click', deleteFunction);
    function deleteFunction() {
        p.remove();
        button1.remove();
        button2.remove();
    }
}


//1․ Օգտատերը մուտքագրում է թիվ։ Անհրաժեշտ է ստեղծել այնքան գալդիատոր, որքան օգտատիրոջ մուտքագրված թիվն է։ 
//Յուրաքանչյուր գլադիատորը ունի 
//health (կյանք) - պատահական գեներացված թիվ 80-100 միջակայքում
//power (ուժ)- պատահական գեներացված թիվ 5-15 միջակայքում
//Գլադիատորները ստեղծելուց հետո անհրաժեշտ է պատահական վերցնել 2 գլադիատոր։ Առաջին գլադիատորը հարվածում է երկրոդին և երկրորդի 
//կյանքը պակասում է այնքանով որքանով առաջին գլադիատորի ուժն է։ Այնուհետև 2-րդը հարվածում է առաջինին նույն սկզբունքով։ 
//Մեկական հարվածից հետո նորից պատահական վերցնում ենք 2 գլադիատոր։ 
//Վերը նշված գործողությունները անում ենք այնքան ժամանակ մինչև մնա 1 գլադիատոր։ 
//Հաղթողին տպում ենք կոնսոլում։ 

let gladiatorNum = +prompt('Enter the number of gladiators');
let arr = []
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
