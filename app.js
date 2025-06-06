const shareButton = document.querySelector(".share-btn");
const author = document.querySelector(".author");
const share = document.querySelector(".share");

let largeur = window.innerWidth;
const mediaQuery = window.matchMedia("(min-width: 601px)");
mediaQuery.addEventListener("change", handleChange);

shareButton.addEventListener("click", (e) => {
  if (window.innerWidth <= 600) {
    author.classList.toggle("hide");
    share.classList.toggle("hide");
  } else {
    share.classList.toggle("hide");
  }
});

function handleChange(e) {
  if (e.matches) {
    console.log("> 600");
    if (!share.classList.contains("hide")) {
      author.classList.remove("hide");
    }
  } else {
    console.log("<= 600");
    if (!share.classList.contains("hide")) {
      author.classList.add("hide");
    }
  }
}

console.log("Largeur du viewport :", largeur);
