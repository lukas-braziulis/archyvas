//***** Callback Function *****/

// Funkcija, kuri yra paduodama kaip parametras kitai funkcijai.
// pvz.:
// const element = document.querySelector('h1');

// element.addEventListener('click', listener) // listener - butu Callback function


// concat - sujungia du array'us ir grazina nauja array.

const a1 = [1, 2, 3, 4];
const a2 = [10, 25];

const rezConCat = a1.concat(a2);

console.log(rezConCat);

// *****

// join - sujungia array reiksmes ir grazina viena string'a. Panaudojus jungiamaji zenkla.

const rezJoin = a1.join('Labas');

console.log(rezJoin);

// *****

// slice - paima tam tikra dali is array, grazina nauja array pagal identifikuotas reiksmas (not inclusive last value)

const rezSlice = a1.slice('2', '3');

console.log(rezSlice);


// *****

// indexOf - skliausteliuose identifikuoji kokios reiksme nori ieskoti. Iesko nuo pradzios ir kai randa, tau grazina jo 'index' reiksme.
// jei tokios reiksmes neranda, tada tau grazina '-1' reiksme

const rezIndexOf = a1.indexOf(2);
console.log(rezIndexOf);

// lastIndexOf - tas pats kaip indexOf, bet iesko nuo array galo, is kitos puses.

// *****
// *****

// forEach - ivykdo fukcija kiekvienai array'aus reiksmei. Eina visam array'ui.  Savotiskas 'for' ciklo pakaitalas

a1.forEach((element, index) => {
console.log(element, index);
}
);

// *****

// every - patikrina ar kiekvienas elementas array'uje atitinka s1lyga kuria mes aprasem.
// visada reikia rasyti 'return' fukcijoje
// grazins boolean - true/false - patikrinus visus array'aus reiksmes ir turi visos reiksmes atitikti salyga aprasyta funkcijoje

// const rezEvery = a1.every((value) => {
//     return value > 2;
// })

// alternatyvus arrow function
const rezEvery = a1.every((value) => value >= 1);

console.log(rezEvery);

// *****

// some - kaip ir every - tikrina ar atitinka salygas. bet sitam uztenka, kad bent vienas elementas atitiktu salyga ir tada grazins 'true'


// ***** 
// filter - mums grazina array'u, su reiksmemis, kurios atitinka funkcijos salyga.

const rezFilter = a1.filter((value) => value > 1);

console.log(rezFilter);

// ***** 
// ***** 

// map - ima tuos pacius parametrus kaip 'forEach'


const rezMap = a1.map((element, index) => {
    element += 5;
    element *= 2;
    return element > 12;
});

console.log(rezMap);

// ***** 

// reduce - sujungineja parametro reiksmes, kol grazina viena reiksme.
// gali pradeti nuo konkrecios reiksmes; 

// prev = 1, cur = 2
// prev = 3, cur = 3;
// prev = 6, cur 4.
// return = 10


// panaudojus kableli:
// prev = 3, cur = 1;
// prev = 4, cur = 2;
// prev = 6, cur = 3;
// prev = 9, cur = 4.
// return = 13


const rezReduce = a1.reduce((prev, cur) => {
    return prev + cur;
}, 3); // gali per kableli prideti dar viena kokia nors reiksme kad prideti prie viso sujungimo

console.log(rezReduce);


// ***** 
// reduceRight - daro ta pati kaip reduce, tik is desines

// ***** 
// ***** 

// Mutating - koreguoja turima array ir ji pakeicia.

// pop - panaikina paskutinia array reiksme ir ja grazina. originaliame array'ui tos paskutines reiksmes nelieka.

const rezPop = a1.pop();

console.log(rezPop);
console.log(a1);

// ***** 

// push  - prie array galo prideda kokia nors reiksme
// jei saugai 'push' kaip reiksme - grazina array.length reiksme

const rezPush = a1.push(9);
console.log(rezPush);
console.log(a1);

// ***** 

// reverse - pertvarko array ir grazina reiksmes is kitos puses

console.log(a1.reverse());

// ***** 

// sort - rusioja reiksmes. jei rasai '-' tada darys didejimo tvarka; jei fukcija atvirksciai: 'b - a' tada bus mazejimo tvarka.

const rezSort = a1.sort((a, b) => a - b);
// const rezSort2 = a1.sort ((a, b) => b - a);

console.log(rezSort);
// console.log(rezSort2);

// ***** 

// splice - skirta keisti, trinti, prideti ir pan. elementam. 
// identifikuoji nuo kur pradesi. ir tada kiek elementu trinsi. 
// o jei parasai reiksmes po trinamu reiksmiu kiekio kablelio - tas reiksmes prides prie array'aus
//sito 'splice' grazins istrintas reiksmes, o originaliame array bus likusios reiksmes.


// const rezSplice = a1.splice(2, 2)

// console.log(rezSplice);
// console.log(a1);

const rezSpliceAdd = a1.splice(2, 2, 6, 6, 6);
console.log(rezSpliceAdd);
console.log(a1);

// ***** 

// unshift - atvirkscias 'push' - prideda naujas reiksmes array priekyje.

// ***** 
// ***** 

// GENERAL - nekeicia orginalo

// toString - sujungia kaip ir 'join', bet visada naudoja kableli. Ir grazina 'stringa'

console.log(a1.toString());

// ***** 

// Array.isArray(var) - patikrina ar elementas yra array

console.log(Array.isArray(a1));
console.log(Array.isArray(5));

// ***** 

// length - grazina kiek yra elementu array'uj

console.log(a1.length);

// ***** 
// a1[0] - grazina konkretu array reiksme. Skaiciuojama nuo 0.

console.log(a1[0]);
console.log(a1[2]);