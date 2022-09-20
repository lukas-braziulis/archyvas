const inputImg = document.getElementById("product-image");
const inputTitle = document.getElementById("product-title");
const inputPrice = document.getElementById("product-price");

document
  .getElementById("submit-button")
  .addEventListener("click", sendProductData);

async function sendProductData(e) {
  e.preventDefault();

  const image = inputImg.value;
  const price = inputPrice.value;
  const title = inputTitle.value;

  const res = await fetch("https://golden-whispering-show.glitch.me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: image,
      price: price,
      title: title,
    }),
  });

  console.log(res);

  alert("Product added successfully");
  window.location.href = "./index.html";
}
