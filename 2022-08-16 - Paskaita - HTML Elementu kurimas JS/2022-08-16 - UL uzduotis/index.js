const peopleNames = ['Rytis', 'Ana', 'Viktorija'];

const mainSection = document.querySelector('main');

const listElement = document.createElement('ul');

for (let index = 0; index < peopleNames.length; index++) {
    const liElement = document.createElement('li');
    liElement.textContent = peopleNames[index];

    listElement.appendChild(liElement);   
}

mainSection.appendChild(listElement);