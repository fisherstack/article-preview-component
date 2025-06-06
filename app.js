const shareButton = document.querySelector(".share-btn");
const closeShareButton = document.querySelector("#close");
const card = document.querySelector(".card");
const meta = document.querySelector(".meta");
const tooltip = document.querySelector("#tooltip");

// Crée une seule instance Popper
const popperInstance = Popper.createPopper(shareButton, tooltip, {
  placement: "top",
  modifiers: [
    {
      name: 'setWidthAndCenter',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn({ state }) {
        const cardRect = card.getBoundingClientRect();
        console.log("cardRect = ", cardRect);
        const buttonRect = shareButton.getBoundingClientRect();
        const a = cardRect.bottom - buttonRect.top;

        state.styles.popper.transform += `translateX(${-cardRect.x}px) translateY(${a}px)`;
      }
    }
]
});

// Fonction pour ajuster la largeur de la tooltip à celle de la card
function syncTooltipWidth() {
  const cardRect = card.getBoundingClientRect();
  tooltip.style.width = cardRect.width + "px";
}

// Toggle l'affichage de la tooltip au clic
shareButton.addEventListener("click", () => {
  syncTooltipWidth();
  tooltip.toggleAttribute("data-show");
  popperInstance.update();
});

closeShareButton.addEventListener("click", () => {
  syncTooltipWidth();
  tooltip.toggleAttribute("data-show");
  popperInstance.update();
});

// (Optionnel) Adapter la largeur si la fenêtre est redimensionnée
window.addEventListener("resize", () => {
  if (tooltip.hasAttribute("data-show")) {
    syncTooltipWidth();
    popperInstance.update();
  }
});

