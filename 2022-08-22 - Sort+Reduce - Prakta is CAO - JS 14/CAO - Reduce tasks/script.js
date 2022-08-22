// ***** Pirma uzduotis *****
// Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.


const numbers = [10, 5, 20, 4];

const reducedNumbers = numbers.reduce((acc, element) => acc + element);
console.log(reducedNumbers);


// ***** Antra uzduotis *****
// Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

// console.log(cars.filter(cars => cars.length === 3));

console.log(cars.reduce((acc, element) => element.length === 3 ? acc + 1 : acc, 0)); // Tai čia kai darai Reduce ant string'ų tai reikia kažkaip jiems suteikti reikšmes. Kaip kad šiuo atveju buvo, kad patikrino ar iš 3 raidžių susideda tai tada dave 1. antraip butu 0.


// ***** Trecia uzduotis *****
// Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.

const nums = [5, 10, 20, 4, 11, 13];
console.log(nums.reduce((a,v) => a > v ? a : v));

//[21:14] Marius  Matulevičius
// Tas A yra akumuliatorius, tai kokią reikšmę grąžinam tokia ir išsisaugoja tolimesniam ciklo vykdimui

// [21:15] Marius  Matulevičius
// Pvz jei vieną kartą grąžini reikšmę 20, tai kitą kartą kai suksis ciklas A reikšmė bus 20

// [21:15] Marius  Matulevičius
// Jei patikrinaim ir pamatysim, kad B yra mažesnis negu 20 tada vėl grąžinsim tą patį 20

// tai realiai tą Reduce() galima panaudoti kaip funkciją, kad praeitų per visą array su tam tikru ciklu. Nebūtina kad ten sudėjinėti kas jame yra ir pan.
