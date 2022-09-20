function doStuff() {
  console.log("labas");
  return 5; // return visiskai sustabdo  tolimesni funkcijos veikima ir grazina reiksme
  console.log("kazkas vyskta toliau");
}

console.log(doStuff());

function doStuff2() {
  console.log("labas2");

  for (let index = 0; index < 9; index++) {
    console.log(index);
    if (index === 5) {
      break; // break - naudojamas, kad issoktum lauk is loop'o, bet kodas/funkcija toliau vyksta.
    }
  }
  console.log("kazkas vyskta toliau2");
}

console.log(doStuff2());

function doStuff3() {
  console.log("labas3");

  for (let index = 0; index < 9; index++) {
    console.log(index);
    if (index === 8) {
      return index;
    }
  }
  console.log("kazkas vyskta toliau3");
}

console.log(doStuff3());

// ****** SPREAD OPERATOR ******
// ... - trys taskiukai prie6ais kintamyni, kurio reiksme yra array'us.
// panaudojus spread operator - jis isskaido array i daug atskiru reiksmiu.

const data = [8, 7, 5, 6, 32, 2, 4];

console.log(...data);

// bet veikia ir atvirkstiniu budu:

function doStuffy(...param) {
  // kai nezinai kiek tau reiksmiu paduos, tu gali pries parametro pavadinima parasysi, tada visas paduotas reiksmes sugrupuos i array'u.
  console.log(param);
}

doStuffy(7, 8, 9, 5, 6, 2, 4, 2, 23);
