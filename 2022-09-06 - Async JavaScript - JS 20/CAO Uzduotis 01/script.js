// Uzduotis 01:
// Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut

// const myPromise = new Promise((resolve, reject) => {
//     if(true) {
//         setTimeout(() => {
//             resolve()
//         }, 5000)
//     } else {
//         reject();
//     }
// })

// myPromise
//     .then((rez) => {
//         alert('Yes, veikia');
//     })
//     .catch((err) => {
//         console.log("Error");
//     })


// ************

// Uzduotis 02:
// Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

const myPromise = new Promise((resolve, reject) => {
    const randomNumb = Math.floor(Math.random()*5) + 1;

    console.log(randomNumb);

    setTimeout(() => {
        if(randomNumb === 1) {
            reject();
        } else {
            resolve();
        }
    }, 1000)
})

myPromise
    .then((rez) => {
        console.log('Yes, veikia');
    })
    .catch((err) => {
        console.log("Error");
    })


// Uzduotis 03:
// Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą. 

myPromise
    .then((msg) => 'This is the message')
    .then((msg) => alert(msg))
    .catch((error) => console.log('Oops.. error'))
