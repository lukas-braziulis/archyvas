// const isLegalAge = true;

// console.log(isLegalAge); // Atvaizduos kaip boolean
// console.log(isLegalAge.toString()); // Atvaizduos kaip string

// const price = 3;

// if (Number.isInteger(price)) {
//     alert('Nereikes centu');
// } else {
//     alert("rekia centu");
// }

// alert(price.toFixed(2));

// document.querySelector("form").addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Pasiimant input value, visada paduoda string. Nepamirštame konveruoti į skaičių su Number()
//     const price = Number(document.getElementById("price").value);
//     const quant = Number(document.getElementById("quant").value);

//     const total = price * quant;

//     const priceDisplay = document.createElement("h1");
//     priceDisplay.textContent = total.toFixed(2);
//     document.body.append(priceDisplay);
//   });

// ******

const name = document.getElementById('name');
const qty = document.getElementById('qty');
const submit = document.querySelector('button');

submit.addEventListener('click', listener);

function listener(e) {
    e.preventDefault();

if (Number.isInteger(+qty.value)) {
    const h1 = document.createElement('h1');

    h1.textContent = name.value.repeat(+qty.value);
    document.body.append(h1);
} else {
    alert("Reikia sveiko skaiciaus");
}
}


//// ******

// const nameLength = document.getElementById('name-length');
// const findLength = document.querySelector('button');

// findLength.addEventListener('click', listener);

// function listener() {

//     alert('Length: ' + nameLength.value.trim().length);
    
// }
