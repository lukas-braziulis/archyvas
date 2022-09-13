// Uzduotis 04:

// Sukurkite klasę alus. Ji turės 3 savybes : pavadinimas(string) kaina(number) ir laipsniai(number) ir vieną metoda: shouldStudentsBuy() kuri grąžins ‘studentas pirks *alaus pavadinimas* arba ‘studentas nepirks *alaus pavadinimas*’ arba false. jei alus kainuoja daugiau nei 1.30eu studentas nepirks ir jei alus turi mažiau laipsnių nei 5 studentas irgi nepirks. bonus taskas jei padarysit, kad sukurta klasė būtų atskirame js faile

import { Alus } from './class.js';


const utena = new Alus('Utenos', 1.4, 5);

console.log(utena.shouldStudentsBuy());;
