// 1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".

function convertToSeconds(minutes) {
    return minutes * 60 + ' seconds';
};

console.log(convertToSeconds(3));

// alternatyva:
 function convertToSeconds2(minutes) {
    return (minutes * 60).toString() + ' seconds';
};

console.log(convertToSeconds2(3));

// **********

// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

// tas pats kaip pirmoje uzduotyje

// ********************************************************************************************************************************************

// 3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25

const power2 = (x) => x * x; // po lygybes prasideda funkcija. Ir tos funkcijos pavadinimas yra tas pats kaip kintamojo pavadinimas.

// ta pati funkcija bus:
// function power2(x) {
//     return x * x;
// };

// IRGI tas pats:
// const power2 = (x) => {
//    x * x
// };

console.log(power2(5));

// kai darai "return" tai tada ta reiksme grazina i pagrindini kodo gabala. Ta reiksme galesi naudoti ir veliau.


// ********************************************************************************************************************************************

// 4. Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50



// ********************************************************************************************************************************************


// 5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".

function lastLetter (someString) {
    return someString[someString.length - 1];
    // return someString.charAt(someString.length -1) // alternatyva
}

console.log(lastLetter('Helluw'));



// ********************************************************************************************************************************************


// 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"

function lastLetterRev (someString) {
    return someString.split('').reverse().join('').toLowerCase();
}

console.log(lastLetterRev('LabaZ'));

// ********************************************************************************************************************************************


// 7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const arrayOfNumber = [-1, -100, -5, 10, 0, 11];

function largestNegativeNumber(array) {
    return array.filter((x) => x < 0).sort((a, b) => b - a)[0];
}

console.log(largestNegativeNumber(arrayOfNumber));

// ********************************************************************************************************************************************


// 8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

function generateArray(numberOfelements) {
    const rezArray = [];

    for (let index = 0; index < numberOfelements; index++) {
        rezArray.push(Math.floor(Math.random() * 10) + 1);
    }
    return rezArray;
}

console.log(generateArray(5));

// ********************************************************************************************************************************************


// 9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const checkIfLargerThan100 = (a, b) => (a+b) > 100;


console.log(checkIfLargerThan100(52, 50));


// ********************************************************************************************************************************************

// 10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

const people = [{name: "Alfredas", age: 25}, {name: "Jonas", age: 25}, {name: "Kasparas", age: 20}];


function sortByAgeAndName (array) {
    return array.sort((a, b) => {
        if (a.age > b.age) {                                                    // šitas tikrina pagal 'age'
            return 1;                                                           //    
        } else if (a.age === b.age) {   // šitas IF'as tikrina pagal 'name'
            if (a.name > b.name) {      //
                return 1;               //
            } else {                    //
                return -1;              //
            }
        }
        else {                                                                  //
            return -1;                                                          //
        }
})
}

console.log(sortByAgeAndName(people));

// kai darai return 1 ir -1 su sort(), tai realiai žiūri ar apmainyti vietomis ar ne. Jei yra less than zero - nothing happens; jei greater than 1 - then switches places


// ********************************************************************************************************************************************

// 11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true

function isDayOff(date) {
    const daysOff = [new Date(2020, 12, 25), new Date(2020, 12, 18)]

    return daysOff.some((object) => object.toString() === date.toString());

}

console.log(isDayOff(new Date(2020, 12, 25)));


// ********************************************************************************************************************************************

// 12. Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. 
// Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

const array = [1, 2, 4, 5];

const missingNumber = (array) => array.sort().find((x, i) => x + 1 !== array[i+1]) + 1;
// x - esamoji reiksme, kuri tikriname.
// i - indeksas kuri lyginame
// paskutinis +1 yra uz 'find' ribu. 
// tai ieskom ar kazkas ne taip ivyskta 


console.log(missingNumber(array));