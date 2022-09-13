//Uzduotis 01. 
// Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje. Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

// WORKED vvvvvvv
// function createUserCard(userData) {
//     const card = document.createElement('div');
//     // const img = document.createElement('img');
//     const intro = document.createElement('h2');
//     const email = document.createElement('h3');

//     intro.innerText = ` ${userData.name}, ${userData.id}`;
//     email.innerText = userData.email;

//     card.append(intro, email);
//     document.body.append(card);
// }


// async function fetchUserData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     if(response.ok){
//         const responseJSON = await response.json();
        
//         // responseJSON.forEach((element) => {
//         //     createUserCard(element);
//         // });

//         createUserCard(responseJSON[2]);


//     } else {
//         console.log('Something went wong. Error code: ' +response.status);
//     }
// }
// WORKED ^^^^^

// alternative version (not tested)

// function fetchUserDataThen() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         if(response.ok){
//             return response.json();
//         } else {
//             console.log('error');
//         }
//     })
//     .then((userCards) => {
//         userCards.forEach((element) => {
//             createUserCard(element)
//         })
//     })
//     .catch((error) => console.log(error))
// }


// fetchUserData();


// *************

// Uzduotis 02:
//Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?


const isGuestVIP = (guests, guestName) => {
    const ieskomasGuest = guests.find(ieskomasGuest => ieskomasGuest.name === guestName);
    document.body.innerText = ieskomasGuest ? `${guestName} ${ieskomasGuest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found in the guest list`;
  }



 const fetchUserData = async () => {
    const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party');

    if(response.ok){
        const guests = await response.json();
        
        isGuestVIP(guests, 'Kristupas Lapeika');


    } else {
        console.log('Something went wong. Error code: ' +response.status);
    }};


    fetchUserData();

