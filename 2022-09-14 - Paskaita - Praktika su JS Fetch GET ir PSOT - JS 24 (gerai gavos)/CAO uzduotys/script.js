const gridContainer = document.getElementById("property-cards-section");

function generatePropertyCard(propertyData) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const price = document.createElement("span");
  const city = document.createElement("span");
  const description = document.createElement("p");

  card.classList.add("property-card");
  card.classList.add(propertyData.city);

  img.src = propertyData.image;
  price.innerText = propertyData.price;
  city.innerText = propertyData.city;
  description.innerText = propertyData.description;

  card.appendChild(img);
  card.appendChild(price);
  card.appendChild(city);
  card.appendChild(description);

  gridContainer.appendChild(card);
}

const getProperties = async () => {
  try {
    const response = await fetch("https://robust-safe-crafter.glitch.me/");
    if (response.ok) {
      const propertiesJSON = await response.json();

      console.log(propertiesJSON);

      propertiesJSON.forEach((element) => {
        generatePropertyCard(element);
      });
    }
  } catch (error) {
    console.log(`Something went wrong. Error code: ${response.status}`);
  }
};

getProperties();

// Filter selection variantas... https://www.w3schools.com/howto/howto_js_filter_elements.asp
//

// document
//   .getElementsByClassName("property-button-all")
//   .addEventListener("focus", filterSelection("all"));
// document
//   .getElementsByClassName("property-button-vilnius")
//   .addEventListener("focus", filterSelection("vilnius"));
// document
//   .getElementsByClassName("property-button-kaunas")
//   .addEventListener("focus", filterSelection("kaunas"));
// document
//   .getElementsByClassName("property-button-klaipeda")
//   .addEventListener("focus", filterSelection("klaipeda"));

// filterSelection("all");
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("property-card");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
