// Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  };
  
  const form = document.querySelector('form');
  const output = document.getElementById('output');
  const name = getCookie('name');
  const clearButton = document.getElementById('clear');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formName = document.getElementById('formName').value;
    setCookie('name', formName, 1);

    document.getElementById('outputName').innerText = formName;
    form.classList.add('hidden');
    output.classList.remove('hidden');
  }  );

  clearButton.addEventListener('click', (event) => { 
    console.log(document.cookie);
    deleteAllCookies();
    console.log(document.cookie);

    document.getElementById('outputName').innerText = '';

    form.classList.remove('hidden');
    output.classList.add('hidden');
});


// if (getCookie("name")) {
//     form.classList.add('hidden');
//     output.classList.remove('hidden');
//   } else {
//     form.classList.remove('hidden');
//     output.classList.add('hidden');
//   };

