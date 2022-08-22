const text = document.querySelector('h1');
const divas = document.querySelector('div');
const changeColorButton = document.querySelector('button');

changeColorButton.addEventListener('click', () => {
    text.classList.toggle('red-text');
    // text.classList.toggle('large-text');
    console.log(text.classList);
})

// varuable.classList.add - prideda klase;
// varuable.classList.remove - nuima klase;
// varuable.classList.toggle - jeigu nera - uzdeda; jeigu yra - nuima

console.log(text.classList); // parodo visas klases ant to kintamojo

