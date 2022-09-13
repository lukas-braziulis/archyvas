// BASE URL = https://olive-bead-glazer.glitch.me
// 1. Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.
// 2. Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// 3. Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
// 4. Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja :)


function showCars(carObj) {
    const table = document.querySelector('table');

    const theadBrand = document.getElementById('thead-1');
    const theadModel = document.getElementById('thead-2');

    theadBrand.innerText = 'Brand';
    theadModel.innerText = 'Model';



    function myFunction() {    
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = carObj.brand;
        cell2.innerHTML = carObj.model;
    
        table.appendChild(row);
      };
      myFunction();

}

const getCars = async () => {
    try {
        const response = await fetch('https://olive-bead-glazer.glitch.me');
            if (response.ok) {
                const carsJSON = await response.json();

                console.log(carsJSON);

                carsJSON.forEach((element) => showCars(element));


            } else {
                console.log(`Something went wrong. Error code: ${response.status}`);
            }
    } catch (error) {
        console.log(error);
    }
}

getCars();



