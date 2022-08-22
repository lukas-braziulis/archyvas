const people = [
{
    name: 'Marius',
    lastName: 'Pvardenis',
    number: 321435,
    car: 'audi',
},
{
    name: 'Tadas',
    lastName: 'Pvardenis',
    number: 321435,
},
{
    name: 'Vidmantas',
    lastName: 'Pvardenis',
    number: 321435,
},
{
    name: 'Juozas',
    lastName: 'Pvardenis',
    number: 321435,
},
];

const mainSection = document.querySelector('main');

const tableElement = document.createElement('table');

const headerRow = document.createElement('tr');

// ******

// Ilgesnis variantas, dar pakenciamas kai yra trys kintamieji, bet kai bus daugiau - geriau naudoti Object.keys/Object.values cikla.

// const tableHeaderName = document.createElement('th');
// tableHeaderName.textContent = 'Name';
// const tableHeaderLastName = document.createElement('th');
// tableHeaderLastName.textContent = 'Last Name';
// const tableHeaderNumber = document.createElement('th');
// tableHeaderNumber.textContent = 'Number';

// tableElement.appendChild(tableHeaderName);
// tableElement.appendChild(tableHeaderLastName);
// tableElement.appendChild(tableHeaderNumber);

// **********

//// Object.keys/Object.values ciklas

const peopleObjectKeys = Object.keys(people[0]);

for (let index = 0; index < peopleObjectKeys.length; index++) {
    const tableHeader = document.createElement('th');
    tableHeader.textContent = peopleObjectKeys[index];

    headerRow.appendChild(tableHeader);
    
}

tableElement.appendChild(headerRow);


for (let index = 0; index < people.length; index++) {
  const row = document.createElement('tr');

//   const name = document.createElement('td');
//   name.textContent = people[index].name;
//   const lastName = document.createElement('td');
//   lastName.textContent = people[index].lastName;
//   const number = document.createElement('td');
//   number.textContent = people[index].number;
  
//   row.appendChild(name);
//   row.appendChild(lastName);
//   row.appendChild(number);

const personValues = Object.values(people[index]);


for (let j = 0; j < personValues.length; j++) { // kai yra ciklas cikle, reikia pakeisti 'index' kintamojo pavadinima. Dazniausiai naudo 'i', 'j', 'k' raides.
    const cell = document.createElement('td');
    cell.textContent = personValues[j];

    row.appendChild(cell);   
}

  tableElement.appendChild(row);

}

console.log(Object.keys(people[0]));
console.log(Object.values(people[0]));


mainSection.appendChild(tableElement);

