function alertName(text) {
    alert(text)
  }
  
  function consoleName(text) {
    console.log(text)
  }
  
  function coreFunction(name, callback) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    callback(capitalizedName)
  }
  
  coreFunction("peTras", consoleName);

// galiausiai išsikvieti 'coreFunction'.
// ji turi du parametrus: 'petras' nueina į 'name' parametrą, o 'consoleName' tampa 'callback.
// 'coreFunction' viduje sutvarko tavo paduota name.
// kadangi callback = consoleName - iškviečiama 'consoleName' funkcija. Atiduodamas 'capitalizedName' parametras 
// jos 'text' yra 'capitalizedName', kurį galiausiai ir log'ina.