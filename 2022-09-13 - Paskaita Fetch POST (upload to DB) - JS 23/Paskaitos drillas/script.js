// POST - nusiusti i duomenu baze
// PUT - atnaujinti duomenu baze
// PATCH - panasiai i PUT;
// DELETE - istrinti is duombazes

// const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST', // kaip uzpildyti, galime paziureti guide: https://jsonplaceholder.typicode.com/guide/
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     // body nurodom kokia info norime siusti.
//     body: JSON.stringify({
//         title: "title",
//         body: "body",
//         userID: 1,
//     }),
// });

// const resJSON = await res.json();
// console.log(resJSON);


const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-last-name');
const inputEmail = document.getElementById('email');

document.getElementById('button-send').addEventListener('click', sendUserData);


async function sendUserData() {
    const name = inputName.value;
    const lastName = inputLastName.value;
    const email = inputEmail.value;


    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      lastName: lastName,
      email: email,
    }),
});

console.log(res);
console.log(await res.json()); // patikrinam kokia info nukeliauja.
}

// ***************

// Kaip dazniausiai dar buna:
// sukuriami atskiri kintamieji "headers" ir "body", kuriu reiksmes atiduodam i fetch'a.

/*
async function sendUserData() {
    const name = inputName.value;
    const lastName = inputLastName.value;
    const email = inputEmail.value;

    const headers = {
        'Content-Type': 'application/json',
    },

    cosnt postBody = JSON.stringify({
        name: name,
        lastName: lastName,
        email: email,
      }),

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: headers,
    body: postBody,
});
*/

// *******

// Objektuose - jeigu tavo key sutampa su kintamojo pavadinimu - gali tik viena ju rasyti, pvz.:

/*
async function sendUserData() {
    const name = inputName.value;
    const lastName = inputLastName.value;
    const email = inputEmail.value;

    const headers = {
        'Content-Type': 'application/json',
    },

    cosnt postBody = JSON.stringify({
        name, // <----<<
        lastName, // <----<<
        email, // <----<<
      }),

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers, // <----<<
    body: postBody,

    */