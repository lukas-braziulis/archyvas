let mylesiu = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000)
}) 

mylesiu
    .then(() => console.log('susitaikom'))
    .catch(() => console.log('radau kita'));



       // if(Petras.tampa.geras){
    //     resolve()
    // } else {
    //     reject()
    // }

    // Fetch'sa atrodo, lyg toks new Promise funkcija:
    // let fetch = new Promise((resolve, reject) => {
    //     console.log('Eik i url');
    //     console.log('Siusk ta JSONa');
    //     if(file.ok) {
    //         resolve(file);
    //     } 
    //     else{
    //         reject(error);
    //     }
    // })

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => console.log(data))