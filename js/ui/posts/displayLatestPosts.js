import { createLatestPost } from "./createLatestPost.js";
import { carouselControl } from "../carouselControl.js";

export async function displayLatestPosts(posts) {
  const carouselContainer = document.querySelector(".carousel-items");
  carouselContainer.innerText = "";
  for (let i = 0; i < posts.length; i++) {
    const latestPostItem = await createLatestPost(posts[i]);
    carouselContainer.append(latestPostItem);
  }

  carouselControl();
}
