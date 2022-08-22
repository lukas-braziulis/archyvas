// CAO - Paskaita 09 - Uzduotis 01 //
// H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

// const h1 = document.querySelector('h1');

// h1.addEventListener('click', () => {
//     h1.style.color = "red";
//     h1.style.fontSize = "50px";
//     h1.style.textAlign = "center";
// })

// console.log(h1);

// *********************************

// CAO - Paskaita 09 - Uzduotis 02 //
// Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

// const button = document.getElementById('change-button');

// button.addEventListener('click', changePosition);

// let buttonPosition = true;
// function changePosition(){
//     if (buttonPosition) {
//         button.classList.toggle('bottom-right')
//     } else {
//         button.classList.toggle('bottom-right')
//         button.classList.toggle('top-left')
//     }
//     buttonPosition = false;
//     console.log(button);
// }

// ***********************************


// CAO - Paskaita 09 - Uzduotis 03
// Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.

// const button = document.getElementById('change-button');
// button.style.cssText = 'position:absolute; top:0; left:0';

// let corner = 0;
// const cornerStyles = ['position:absolute; top:0; right:0;', 'position:absolute; bottom:0; right:0;', 'position:absolute; bottom:0; left:0;', 'position:absolute; top:0; left:0;'];
// function changePosition(event) {
//   if (corner < cornerStyles.length) {
//     button.style.cssText = cornerStyles[corner];
//     corner++;
//   }
//   if (corner === cornerStyles.length) {
//     corner = 0;
//   }
// }

// button.addEventListener('click', changePosition);

//mano darytas:

// const button = document.getElementById('change-button');

// button.addEventListener('click', changePosition);

// function changePosition(){

//     switch (button.classList[0]){
//         case 'top-left':
//             button.classList.remove('top-left');
//             button.classList.add('top-right');
//            break;
//         case 'top-right':
//             button.classList.remove('top-right');
//             button.classList.add('bottom-right');
//             break;
//         case 'bottom-right':
//             button.classList.remove('bottom-right');
//             button.classList.add('bottom-left');
//             break;
//         case 'bottom-left':
//             button.classList.remove('bottom-left');
//             button.classList.add('top-left');   
//             break;        
//     }
//     console.log(button);
// }

// **********************************************

// CAO - Paskaita 9 - Uzduotis 4

// Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias.

const textInput = document.getElementById('text-input');
const bodyHTML = document.querySelector('body');

textInput.addEventListener('input', inputLength)

function inputLength(){
    if (textInput.value.length <= 2) {
        bodyHTML.style.backgroundColor = 'red';
        }
    if (textInput.value.length > 2) {
            bodyHTML.style.backgroundColor = 'green';
        }
        console.log(textInput.value.length);
}