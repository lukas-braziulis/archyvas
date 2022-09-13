// 2. Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// 3. Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.


const inputBrand = document.getElementById('input-brand');
const inputModel = document.getElementById('input-model');

document.getElementById('submit-button').addEventListener('click', sendUserData);



async function sendUserData() {
    const brand = inputBrand.value;
    const model = inputModel.value;

    const res = await fetch('https://olive-bead-glazer.glitch.me', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      brand: brand,
      model: model,
    }),
});

    if(res.ok){
        const notification = document.createElement('h2');
        notification.innerText = 'Duomenys sekmingai issaugoti';
        document.body.prepend(notification);

    } else {
        const notification = document.createElement('h2');
        notification.innerText = `Something went wrong. Error code: ${res.status}`;
        document.body.prepend(notification);
    }
}

