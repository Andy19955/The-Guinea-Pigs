export function carouselControl() {
  const carousel = document.querySelector(".carousel-items");
  const arrowBtns = document.querySelectorAll(".carousel-control");
  const firstCardWidth = carousel.querySelector(".carousel-card").offsetWidth;

  const updateButtonStates = () => {
    const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;
    const tolerance = 1;

    if (carousel.scrollLeft <= 0) {
      document.querySelector("#carousel-left").classList.add("inactive");
    } else {
      document.querySelector("#carousel-left").classList.remove("inactive");
    }

    if (carousel.scrollLeft >= maxScrollLeft - tolerance) {
      document.querySelector("#carousel-right").classList.add("inactive");
    } else {
      document.querySelector("#carousel-right").classList.remove("inactive");
    }
  };

  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "carousel-left" ? -firstCardWidth : firstCardWidth;
    });
  });

  carousel.addEventListener("scroll", updateButtonStates);

  updateButtonStates();
}
