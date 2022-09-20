const gridContainer = document.getElementById("grid-container");

function createProductCard(productData) {
  const productCard = document.createElement("span");
  const productImage = document.createElement("img");
  const productTitle = document.createElement("h3");
  const productPrice = document.createElement("h2");
  const delButton = document.createElement("button");

  productImage.src = productData.image;
  productTitle.innerText = productData.title;
  productPrice.innerText = productData.price;
  delButton.innerText = "Istrinti";
  delButton.id = productData.id;

  productCard.classList.add("flex-container");
  delButton.classList.add("delete-button");

  delButton.addEventListener("click", delProduct);

  productCard.appendChild(productImage);
  productCard.appendChild(productTitle);
  productCard.appendChild(productPrice);
  productCard.appendChild(delButton);

  gridContainer.appendChild(productCard);
}

const getProducts = async () => {
  try {
    const response = await fetch("https://golden-whispering-show.glitch.me");
    if (response.ok) {
      const productsJSON = await response.json();

      console.log(productsJSON);

      productsJSON.forEach((element) => {
        createProductCard(element);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

getProducts();

async function delProduct(e) {
  const idToDelete = e.target.id;

  await fetch("https://golden-whispering-show.glitch.me/" + idToDelete, {
    method: "DELETE",
  });

  window.location.reload();
}
