import { handlePostImageClick } from "../../handlers/handlePostImageClick.js";

export function addPostImageEventListener() {
  const postImages = document.querySelectorAll("img");
  postImages.forEach((postImage) => {
    postImage.addEventListener("click", () => {
      handlePostImageClick(postImage);
    });
  });
}
