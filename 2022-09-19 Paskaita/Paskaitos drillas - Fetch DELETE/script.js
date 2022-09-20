const stuff = await fetch("https://golden-whispering-show.glitch.me");
const stuffJson = await stuff.json();
console.log(stuffJson);

const idToDelete = 2;

fetch("https://golden-whispering-show.glitch.me/" + idToDelete, {
  method: "DELETE",
});
