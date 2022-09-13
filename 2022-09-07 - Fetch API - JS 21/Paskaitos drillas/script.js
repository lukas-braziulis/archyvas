const containerGrid = document.getElementById('grid-container');
const loadButton = document.getElementById('load-photos');

loadButton.addEventListener('click', loadPhotos);

// function loadPhotos() {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => {
//         if(response.ok) {
//             return response.json();
//         } else {
//             console.log('something went wrong' + response.status)
//         }
//     })
//     .then((photos) => {
//         photos.forEach((element) => {
//             createPhotoCard(element)
//             });
//         })
//     .catch((error) => console.log(error));
// };



function createPhotoCard(photoData) {
    const cardContainer = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');

    cardContainer.classList.add('card');

    img.src = photoData.url;
    title.textContent = photoData.title;

    cardContainer.appendChild(title);
    cardContainer.appendChild(img);
    containerGrid.appendChild(cardContainer);
};


// *************

// Async await:
// Naudojant Async-await nebereikia .then() ir .catch()

async function loadPhotos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');

    if (response.ok) {
        const responseJSON = await response.json();

        responseJSON.forEach((element) => {
            createPhotoCard(element);
        });
    } else {
        console.log('something went wrong ' + response.status);
    }
};


