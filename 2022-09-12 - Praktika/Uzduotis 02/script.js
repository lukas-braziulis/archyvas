// pasiimti info is https://api.github.com/users . atvaizduoti github naudotojus su ju login, šalia paveiksliukas (naudoti avatar url) ir sukurti subscribe mygtuką kuris kol kas gali vesti į bet kokį puslapį.

function gitUserCard(fetchData) {
    const cardContainer = document.createElement('div');
    const gitUser = document.createElement('h2');
    const gitAvatar = document.createElement('img');
    const subButton = document.createElement('button');
    const breakTag = document.createElement('br');

    gitUser.textContent = fetchData.login;
    gitAvatar.src = fetchData.avatar_url;
    subButton.textContent = 'Subscribe';

    subButton.addEventListener('click', visitPage)

    function visitPage(){
        window.open(fetchData.url,'_blank') //.focus() // tektu focus() kad numestu i kita tab'a, jei nemeta ir taip..;
    } // atidaro kitam tab'e

    // function visitPage(){
    //     window.location=fetchData.url;
    // } // atidaro tam paciame lange

    cardContainer.appendChild(gitUser);
    cardContainer.appendChild(gitAvatar);
    cardContainer.appendChild(breakTag);
    cardContainer.appendChild(subButton);
    document.body.appendChild(cardContainer);

}


const gitUserDatabase = async () => {
    try {
        const response = await fetch('https://api.github.com/users');
            if (response.ok) {
                const responseJSON = await response.json();

                console.log(responseJSON);

                responseJSON.forEach((element) => {
                    gitUserCard(element);
                }); 
                               
            } else {
                console.log(`Something went wrong. Error code: ${response.status}`);
            }
    } catch (error) {
        console.log(error);
    }
}

gitUserDatabase();
