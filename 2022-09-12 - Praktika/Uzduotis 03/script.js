// Uzduotis 03:
// Parašyti funkciją kuri grazina tik vartotojus kurie turi šunis.



const people = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];

function dogOwners(people) {
        const obj = people.filter(person => person.hasDog === true);
        console.log(obj);
}

// function dogOwners(people {
//   const res = people.filter ((person) => {
//     return person.hasDog === true; });
//     return res;
// })

dogOwners(users);



