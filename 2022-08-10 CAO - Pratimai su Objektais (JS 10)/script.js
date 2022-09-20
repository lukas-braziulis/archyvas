// ****** Pirma uzduotis *****

const car = {
    doors: 43,
    color: 'red',
    brand: 'VW',
};

// if(car.doors === 5){
//     alert ('turi penkias duris');
// } else if (car.doors === 4){
//     alert ('turi keturias duris')
// } else {
//     alert("neaisku kiek")
// }

document.querySelector('form').addEventListener("submit", e => {
    e.preventDefault();

// ***** Antra uzduotis *****

    // const name = e.target[0];
    // const surname = e.target[1]; // alternatyvus pasiemimas...

    // console.log(e);

    // const name = document.querySelector('input').value;
    // const surname = document.querySelector('input:nth-of-type(2)').value;

    // const person = {
    //     name: name,
    //     surname: surname,
    // }

    // console.log(person);

// ***** Trecia uzduotis ****

    const name = e.target.elements.name.value;
    const age = Number(e.target.elements.age.value);

    const isLegalAge = age >= 18; // ? true : false // true/false net nebutina rasyti.

    const person = {
        name: name,
        isLegal: isLegalAge,
    };

    console.log(person);

});


