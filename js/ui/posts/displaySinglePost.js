import { createSinglePost } from "./createSinglePost.js";
import { addPostImageEventListener } from "../../ui/posts/addPostImageEventListener.js";
import { fetchFeaturedMedia } from "../../api/fetchFeaturedMedia.js";

export async function displaySinglePost(post) {
  const hero = document.querySelector(".post-hero");
  const featuredImage = document.createElement("img");
  if (post.featured_media !== 0) {
    const featuredMedia = await fetchFeaturedMedia(post.featured_media);
    featuredImage.setAttribute("src", featuredMedia.source_url); // If no image, set default image using ??
    featuredImage.setAttribute("alt", featuredMedia.alt_text);
  } else {
    featuredImage.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1719230693490-786d994f72b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    featuredImage.setAttribute("alt", "Image indicating that no image is available.");
  }
  hero.prepend(featuredImage);

  const postContainer = document.querySelector("#post-container");
  const postItem = await createSinglePost(post);
  postContainer.append(postItem);
  addPostImageEventListener();
}
