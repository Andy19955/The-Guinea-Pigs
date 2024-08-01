import { createLatestPost } from "./createLatestPost.js";
import { carouselControl } from "../carouselControl.js";
import { displayMessage } from "../shared/displayMessage.js";

export async function displayLatestPosts(posts) {
  const carouselContainer = document.querySelector(".carousel-items");
  carouselContainer.innerText = "";
  for (let i = 0; i < posts.length; i++) {
    try {
      const latestPostItem = await createLatestPost(posts[i]);
      carouselContainer.append(latestPostItem);
    } catch (error) {
      displayMessage("#message-container-carousel", `Oops, something didn't work as we planned. Error: ${error.message}`, "error");
    }
  }

  carouselControl();
}
