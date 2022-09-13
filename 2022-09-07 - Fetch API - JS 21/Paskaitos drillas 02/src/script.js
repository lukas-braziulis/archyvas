import { getAlbums, getAllPhotos } from './fetchingData.js';
import { generateAlbum } from './generatingHTML.js';


const albums = await getAlbums();


albums.forEach((element) => {
    generateAlbum(element);
});

