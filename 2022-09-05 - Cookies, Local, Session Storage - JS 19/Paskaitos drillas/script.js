// Local Storage:
// Kaip ka nors ideti i Local Storage?

localStorage.clear(); // skirtas isvalyti visam 'Local Storage';


// jei nori ka nors priduoti, rasom. .setItem. Ir reikia duoti 'key' ir 'value' - savotiski JS objektai. ---> localStorage.setItem(key, value);
localStorage.setItem('name', 'Lukas'); 

// jei nori pasiimti kazka is Local Storage - .getItem();
// paduodi 'key' - gauni 'value
// 'key' bus visada unikalus, negali kartotis.
console.log(localStorage.getItem('name'));

// jei nori istrinti konkretu 'item';
// paduoti komanda pagal 'key', kuria "key-value" pora nori trinti.
localStorage.removeItem('name');


// ***********

// Session Storage:
// kaip ka nors ideti i Session Storage?
// Viskas realiai kaip 'Local Storage', tik identifikuojama kaip 'Session Storage

// Taip pat kaip su 'Local" - .setItem('key', 'value') - su key-value pora;
sessionStorage.setItem('name', 'Lukutis');

console.log(sessionStorage.getItem('name'));

sessionStorage.removeItem('name')



// *******************************

// Cookies:

// Kaip prideti?:
document.cookie = 'name=Lukas';

// Jeigu nori prideti su Expiration date:
document.cookie = 'name=Lukas; expires=' + new Date(2022, 10, 5).toUTCString();
document.cookie = 'lastName=Braza; expires=' + new Date(2022, 10, 5).toUTCString();
// reikia Nauja data paversti UTC String'u, nes reikia prideti 'String'a', o ne data.


// Kaip pasiimti 'Cookies'?
// negalim pasiimti tik vieno Cookies, juos paima visus.
// Cookies yra VIENAS didelis strin'as - ta ir spausdina

// console.log(document.cookie);


// Jei reikia pasiimti konkretu, tai reikia Extra darbo;

const nameCookie = document.cookie.split(';').find((element) => {
   return element.split('=')[0].trim() === 'name';
});

console.log(nameCookie);

console.log(nameCookie.split('=')[1]);

// Paprasciau butu pasidaryti template'a:

function getCookie(name) {
   return document.cookie
   .split(';')
   .find((element) =>  element.split('=')[0].trim() === name)
   .trim()
   .split('=')[1];
}
// .trim() - kad nuimti tarpus lauk.

console.log(getCookie('lastName'));

// Bet dazniausiai visi naudojasi kokia nors Library, Apps'a ar ka nors kita, kad pasiimti Cookie.