const bodySection = document.querySelector('body');
const mainSection = document.createElement('main');
const picture = document.createElement('img');
const h1Header = document.createElement('h1');
const h3Header = document.createElement('h3');
const h4Header = document.createElement('h4');

bodySection.style.background = "aqua";

picture.src = "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg";
h1Header.textContent = "Trent Walton";
h3Header.textContent = "Founder & 1/3 of @paravelinc";
h4Header.textContent = "Austin, TX";

mainSection.appendChild(picture);
mainSection.appendChild(h1Header);
mainSection.appendChild(h3Header);
mainSection.appendChild(h4Header);

bodySection.style.padding = "10rem";
mainSection.style.background = "white";
mainSection.style.padding = '20rem auto 20rem auto';
mainSection.style.borderRadius = "15px";
mainSection.style.textAlign = 'center';
picture.style.height = '100px';
picture.style.marginTop = "-60px";
picture.style.padding = '0.5rem';
picture.style.border = '1px solid #eee';
picture.style.borderRadius = "50%";
h4Header.style.paddingBottom = "3rem";



bodySection.appendChild(mainSection);