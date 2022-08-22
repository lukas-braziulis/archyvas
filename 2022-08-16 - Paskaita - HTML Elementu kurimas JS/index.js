// document.createElement(''); // sukuria nauja HTML elementa

// document.body.append(); // prideda musu sukurta elemnta i HTML.. bet prideda prie pacio pacio galo, kaip paskutini elmento child'a. // galima ideti ir kaip String'a

// document.body.prepend(); // prideda i pradzia, kaip pirma elemento child'a // galima ideti ir kaip String'a // retai kada bus prie pradzios bus idedamas

// document.body.appendChild(); // galima prideti tik HTML elementa. // REKOMENDACIJA naudoti butent sita


const headerText = document.createElement('h1');
headerText.textContent = 'Hello';

const mainSection = document.querySelector('main');

const headerText2 = document.createElement('h2');
headerText2.textContent = 'Bye';

mainSection.append(headerText);
mainSection.appendChild(headerText2);








