const carousel = document.querySelector(".test-carousel");
const arrowBtns = document.querySelectorAll(".test-wrapper i");
const firstCardWidth = carousel.querySelector(".test-card").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;

    document.querySelector("#left").classList.remove("inactive");
    document.querySelector("#right").classList.remove("inactive");
    // if (test2 === 0) {
    //   document.querySelector("#left").classList.add("inactive");
    // } else if (test2 === carousel.scrollWidth - carousel.offsetWidth) {
    //   document.querySelector("#right").classList.add("inactive");
    // }
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("test-dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);

  document.querySelector("#left").classList.remove("inactive");
  document.querySelector("#right").classList.remove("inactive");
  if (carousel.scrollLeft === 0) {
    document.querySelector("#left").classList.add("inactive");
  } else if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
    document.querySelector("#right").classList.add("inactive");
  }
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("test-dragging");
};

const test = () => {
  document.querySelector("#left").classList.remove("inactive");
  document.querySelector("#right").classList.remove("inactive");
  if (carousel.scrollLeft === 0) {
    document.querySelector("#left").classList.add("inactive");
  } else if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
    document.querySelector("#right").classList.add("inactive");
  }
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
