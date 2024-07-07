export function carouselControl() {
  const carousel = document.querySelector(".test-carousel");
  const arrowBtns = document.querySelectorAll(".carousel-controls i");
  const firstCardWidth = carousel.querySelector(".test-card").offsetWidth;

  // let isDragging = false,
  //   startX,
  //   startScrollLeft;

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
    btn.addEventListener("click", (e) => {
      // e.stopPropagation();
      carousel.scrollLeft += btn.id === "carousel-left" ? -firstCardWidth : firstCardWidth;
      // carousel.scrollLeft += scrollAmount;
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("test-dragging");
    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    carousel.scrollLeft = startScrollLeft - (x - startX);
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("test-dragging");
  };

  // carousel.addEventListener("mousedown", dragStart);
  // carousel.addEventListener("mousemove", dragging);
  // carousel.addEventListener("mouseup", dragStop);
  // carousel.addEventListener("mouseleave", dragStop);
  // carousel.addEventListener("touchstart", dragStart);
  // carousel.addEventListener("touchmove", dragging);
  // carousel.addEventListener("touchend", dragStop);

  carousel.addEventListener("scroll", updateButtonStates);

  updateButtonStates();
}
