// ***** Pirma uzduotis *****
// Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.


const friends = ['Dovydas', 'Karolis', 'Kamile', 'Egle', 'Deimante'];

friends.sort();
console.log(friends);

// ***** Antra uzduotis *****
// Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.


friends.sort((a,b) => b > a ? 1 : -1);
console.log(friends);

// ***** Trecia uzduotis *****
// su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

const nums = [5, 10, 20, 11, 12, 1, 0, 14, 25];

nums.sort((a,b) => b - a);
console.log(nums);

// ****** Ketvirta uzduotis *****
// grąžink didžiausią skaičių (vieną skaičių).

const numbers = [10, 5, 20, 4];

numbers.sort((a,b) => b - a);
console.log(numbers[0]);

