// sort

const testArray = [4, 5, 8, 22, 4, -1];
const testArrayString = ['Lukas', 'Donatas', 'Juozas'];

const sortedArray = testArray.sort(); // delioja viska nuo maziausio iki didziausio. Bet viska sort'ina "pagal abecele", paimdamas kaip pirmaji character. 
// array lieka toks pats kaip ir buvo pries tai, nepakeistas.
const sortedArrayString = testArrayString.sort();

// const sortedArrayFx = testArray.sort((a,b) => {
//     if (a > b) {
//         return 1
//     } 
//     if (a < b) {
//         return -1
//     }
// });
const sortedArrayFx = testArray.sort((a,b) => a - b); // alternatyva; trumpesne.
 // geresne funkcija, kuri tiksliau su'sort'ina, naudojant pilnas reiksmes.

console.log(sortedArray);
console.log(sortedArrayString);
console.log(sortedArrayFx);

// ************

// reduce

// Nepadavus pradines reiksmes:
// acc = 4, element = 5
// acc = 9, element = 8
// acc = 17, element = 22
// ...

// Padavus pradine reiksme:
// acc = -20, element = 4
// acc = -16, element = 5
// acc = -11, element = 8
// ...


const arrayReduced = testArray.reduce((acc, element) => { // acc = reiksme prie kurios bus pastoviai jungiama, bazine reiksme; element = vis nauja reiksme kuria pridejines; next in line.
// naujoji sukurta reiksme nukeliauja i kintamaji, kuri dabar sukureme, siuo metu - arrayReduced.
return acc + element; 
}, -20); // -20 = Default reiksme, nuo kurios viskas prasideda (acc reiksme siuo atveju bus). Jei jos nera - tada pati pirmoji reiksme yra acc.
console.log(arrayReduced);

// const arrayReduced = testArray.reduce((acc, element) => acc + element, -20) // trumpesne lygties reiksme.

const phones = ["iPhone 7", "OnePlus", "Samsung 9"];

phones.sort((a,b) => {
  if(a.includes(" ") && !b.includes(" ")){
    return -1;
  } else {
    return 1;
  }
})

console.log(phones);