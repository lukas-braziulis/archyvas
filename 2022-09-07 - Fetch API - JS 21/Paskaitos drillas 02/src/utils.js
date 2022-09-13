export function filterPhotosById(photos, id) {
    return photos.filter((element) => element.albumId === +id)
}

export function hideElements(element) {
    for (let item of element) {
        item.classList.add('hidden')
    }        
}

// element.forEach((item) => {
//     item.classList.add('hidden');
// })
