const vardas = document.createElement('h1');
vardas.textContent = 'Lukas';
vardas.style.color = "red";

document.body.append(vardas);


const unList = document.createElement('ul');

const autoBrands = ['Audi', 'BMW', 'Merc'];

for (let index = 0; index < autoBrands.length; index++) {
  const liItem = document.createElement('li');
liItem.textContent = autoBrands[index];

unList.appendChild(liItem);

    
}

document.body.appendChild(unList);
