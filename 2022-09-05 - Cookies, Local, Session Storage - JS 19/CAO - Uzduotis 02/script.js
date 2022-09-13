// Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.

// localStorage.setItem ('name', 'Lukas');
// localStorage.setItem ('surname', 'Braziulis');
// localStorage.setItem ('picture', 'https://cf.geekdo-images.com/mg_ICPKMHsQRs_9WzcVcYg__opengraph/img/OvaUpa6ImSXF4sTAzvIM0RbxY5U=/fit-in/1200x630/filters:strip_icc()/pic4214871.png');
// localStorage.setItem('description', 'Jon Snow is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which he is portrayed by English actor Kit Harington. In the novels, he is a prominent point of view character.')

// const name = localStorage.getItem('name');
// const surname = localStorage.getItem('surname');
// const picture = localStorage.getItem('picture');
// const description = localStorage.getItem('description');

// const profilePicture = document.createElement('img');
// profilePicture.src = picture;

// const profileName = document.createElement('h2');
// profileName.innerText = `${name} ${surname}`;

// const profileDescription = document.createElement('p');
// profileDescription.innerText = description;

// const profileCard = document.createElement('div');
// profileCard.append(profilePicture, profileName, profileDescription);
// document.body.append(profileCard);


// DUOTAS ATSAKYMAS
// Geresnis, funkcionalesnis atsakymas:

const profileInfo = {
    firstName: 'John',
    lastName: 'Snow',
    picture: 'https://tele1.com.tr/wp-content/uploads/2019/05/john-snow.jpg',
    description: 'Jon Snow is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which he is portrayed by English actor Kit Harington. In the novels, he is a prominent point of view character.'
  }
  localStorage.setItem('profile', JSON.stringify(profileInfo)); 
  // viską sudeda į String'us, nes localStorage tik taip priima.
  
  const renderProfileCard = (profile) => {
    const img = document.createElement('img');
    img.width = '200';
    img.src = profile.picture;
    img.alt = `${profile.firstName} ${profileInfo.lastName} profile picture`;
  
    const name = document.createElement('h4');
    name.innerText = `${profile.firstName} ${profile.firstName}`;
  
    const description = document.createElement('h5');
    description.innerText = profile.description;
  
    const card = document.createElement('div');
    card.append(img, name, description); // visą eiliškumą pradžiai sudelioja JS ir tik tada push'ina į HTML'ą.
    document.body.append(card);
  };
  
  const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem('profile')); // JSON.parse - paima localStorage duomenis (.getItem) ir juos vėl padaro Objektu. 
  // Tie duomenys toliau keliau į renderProfileCard duomenis, pagal sekančią (eil 59) funkciją

  renderProfileCard(profileInfoFromLocalStorage);

