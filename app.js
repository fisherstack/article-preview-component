const shareButton = document.querySelector(".share-btn");
const author = document.querySelector(".author");
const share = document.querySelector(".share");

let largeur = window.innerWidth;
const mediaQuery = window.matchMedia("(min-width: 601px)");

shareButton.addEventListener("click", (e) => {
    share.classList.toggle("hide");
});

