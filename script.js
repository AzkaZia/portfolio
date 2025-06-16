const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("data-type");

    cards.forEach(card => {
      if (type === "all" || card.dataset.type === type) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});