export function createImageModal(image) {
  const backgroundDim = document.createElement("div");
  backgroundDim.classList.add("modal");

  const closeModal = document.createElement("div");
  closeModal.classList.add("close-modal");
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa", "fa-times");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalImage = document.createElement("img");
  modalImage.classList.add("modal-image");
  modalImage.setAttribute("src", image.src);

  closeModal.append(closeIcon);
  modalContent.append(modalImage);
  backgroundDim.append(closeModal, modalContent);

  return backgroundDim;
}
