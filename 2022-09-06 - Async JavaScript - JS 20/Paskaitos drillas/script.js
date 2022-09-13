// Visas asinchroninis programavimas paremtas 'pazadais'
// Promise veikia kaip bet kuris kitas objektas.
// sukuriamas su 'New' ir kazkur ji issisaugojam.

// 1. kaip apsirasyti 'promise'?

const myPromise = new Promise((resolve, reject) => {
    if (true) {
    setTimeout(() => {
    console.log('Set Timeout ivyko');
    resolve('viskas ivyko gerai');
    }, 1000);
 } else {
    reject('kazkas negerai')
}
} );
// skliausteliuose rasom Funkcija. 
// Kuriai duodam du parametrus - resolve, reject.
// dazniausiai nematysit resolve ir reject viena paskui kita funkcijoje.
// dazniausiai bus kazkos If'as
// setTimeout() - funkcija kuri uzdelsia kodo vygdyma. 
// setTimeout(), 1000 - rasoma miliSekundes; 1000 = 1s.



// 2. kaip su jais dirbti?
// pirmiausiai paduodam jam koki nors callback'a.
// Callback'o funkcijoje paduodame parametra, kuris yra Promise'o 'resolve'as. 
// Visada su .then() bus 'resolve' grazinimas;
// Visada su .catch() callback'u bus grazinamas 'reject'

myPromise
.then((rez) => {
console.log(rez);
})
.catch((err) => {
    console.log(err);
})

console.log('kodas vyksta toliau');


// *************

// Kaip padaryti kazkokius Request'us?
// fetch() - funkcija kuri sukuria request'a; Kuri pati yra kaip Promise'as.
// fetch() parametrui, kaip string'a keliame 'URL'a'
// fetch() skaitosi kaip 
// response - tai ka gaunam paklibine paduota URL

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      return response.json();
    }).then((jsonRes) => {
        console.log(jsonRes);
    }).catch((err) => {
        console.log(err);
    })

    // estetiskiau:
    fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
     .then(jsonRes => console.log(jsonRes))
     .catch(err => console.log(err));
     


// Kai chain'ini .then(), tai atrasis .then() pasiima pirmojo grazinta/retunr value;
// tada treciasis .then() paima antrojo .then() reiksme ir t.t.
// .then() gali tik .then() padavineti... .catch()'ams nieko nepaduos.
// .catch() veiks tik kai ivyksta reject'as.


// ************

// Kaip pasiimti tam tikra paveiksliuka?
// fetch'inti reikalinga URL
// pasirasyti .json() ir ji grazinti su .then();
// antrasis .then() kuris uzmeta URL'a ant img.src.


// .json() buvo sukurtas bendrauti internete - siusim ir gausim request'us json'u.



fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      return response.json();
    })
    .then((jsonRes) => {
        document.getElementById('paveiksliukas').src = jsonRes[0].url // [0] 
    })
    .catch((err) => {
        console.log(err);
    })



// .catch() realiai suveiks tik tada, kai pats fetch'as neivyks (kardinaliai)..
// t.y., jeigu internetas nulus, ar kompiuteris, ar serveris/duombaze...
// geriau pirmajame .then() pasitikrinti ar gavom kazkoki error'a ar ne.
// geriausia tai daryti su if() funkcija. Ir tikrinti ar json'o "ok" statusas yra "true" ar "false."
// json - 'OK' = true, kai tinklapio kodas yra iki 299.
// jeigu daugiau, tai bus 'false'. Tai 404 error'as bus reportintas kaip 'false.


    fetch('https://jsonplaceholder.typicode.com/photos/999999999')
    .then((response) => {
        console.log(response.ok);
        if (response.ok) {
            return response.json();
        } else {
             console.log(`kazkas ivyko negerai - ${response.status}`);
        }
    })
    .then((jsonRes) => {
        document.getElementById('paveiksliukas').src = jsonRes[0].url // [0] 
    })
    .catch((err) => {
        console.log(err);
    })