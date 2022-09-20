const inputImg = document.getElementById("property-img");
const inputPrice = document.getElementById("property-price");
const inputDescription = document.getElementById("property-description");
const inputCity = document.getElementById("property-city");

document
  .getElementById("submit-button")
  .addEventListener("click", sendPropertyData);

async function sendPropertyData(e) {
  e.preventDefault();

  const image = inputImg.value;
  const price = inputPrice.value;
  const description = inputDescription.value;
  const city = inputCity.value;

  const res = await fetch("https://robust-safe-crafter.glitch.me/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: image,
      price: price,
      description: description,
      city: city,
    }),
  });

  console.log(res);
}
