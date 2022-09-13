// Uzduotis 01:
// Pasiimti info is https://jsonplaceholder.typicode.com/posts padaryti, kad atvaizduotu posta, virs jo title ir dar virs jo userId

function postCard(data) {
    const cardContainer = document.createElement('div');
    const idNumber = document.createElement('h3');
    const pavadinimas = document.createElement('h1');
    const postContent = document.createElement('p');

    idNumber.textContent = `User ID: ${data.userId}`;
    pavadinimas.textContent = data.title;
    postContent.textContent = data.body;

    cardContainer.append(idNumber, pavadinimas, postContent);
    // cardContainer.appendChild(pavadinimas);
    // cardContainer.appendChild(postContent);
    document.body.appendChild(cardContainer);
}


const fetchDatabase = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseJSON = await response.json();

    console.log(responseJSON);

    responseJSON.forEach((element) => {
        postCard(element);
    });


}

fetchDatabase();
