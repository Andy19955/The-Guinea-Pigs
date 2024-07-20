import { createImageModal } from "../ui/modal/createImageModal.js";

export function handlePostImageClick(postImage) {
  const body = document.querySelector("body");
  body.classList.add("no-scroll");
  const main = document.querySelector("main");
  const imageModal = createImageModal(postImage);
  main.append(imageModal);
  imageModal.addEventListener("click", (event) => {
    const image = document.querySelector(".modal-image");
    if (event.target != image) {
      imageModal.remove();
      body.classList.remove("no-scroll");
    }
  });
}
