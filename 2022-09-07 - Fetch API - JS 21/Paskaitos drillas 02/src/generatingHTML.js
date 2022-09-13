import { getAllPhotos } from "./fetchingData.js";
import { filterPhotosById, hideElements } from "./utils.js";


const gridContainer = document.getElementById('grid-container');

export function generateAlbum(albumData) { // Is kur tas 'albumData' parametras? is kur ta info ateis?
    const card = document.createElement('div');
    const title = document.createElement('p');

    card.classList.add('card');
    card.id = albumData.id // sitai kortelei - div'ui - pridedam ID. O ID paiimam is duombazes ID.

    card.addEventListener('click', cardClickHandler) // kiekviena kortele ture Listener'i. jei ant ju paspaus.

    title.textContent = albumData.title;
    card.appendChild(title);
    gridContainer.appendChild(card);
}

function createPhotoCard(photoData) { // tai sita situs PhotoCard sukuriam sekancioje funkcijoje?? bet niekaip ne'exportuojam? ne, nes panaudojam tam paciam file'e su cardClickHandler

    const cardContainer = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');

    img.src = photoData.url;
    title.textContent = photoData.title;

    cardContainer.appendChild(title);
    cardContainer.appendChild(img);
    gridContainer.appendChild(cardContainer);
};

async function cardClickHandler(event) {
    const photos = await getAllPhotos();
    const filteredPhotos = filterPhotosById(photos, event.target.id); // is kur ten tas ID? Kiekvienas 'event' gali grazinti viena reiksme. Tai su 'target' galima paimti kazkuria info. siuo atveju paiimama div'ui suteiktas ID, is card.id

    hideElements(getAllAlbums());

    filteredPhotos.forEach((photo) => {
        createPhotoCard(photo);
    });
}

function getAllAlbums() {
    return document.getElementsByClassName('card');
}