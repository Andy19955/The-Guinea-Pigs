import { createSinglePost } from "./createSinglePost.js";
import { addPostImageEventListener } from "../../ui/posts/addPostImageEventListener.js";
import { fetchFeaturedMedia } from "../../api/fetchFeaturedMedia.js";

export async function displaySinglePost(post) {
  const postContainer = document.querySelector("#post-container");
  const postItem = await createSinglePost(post);
  postContainer.append(postItem);
  addPostImageEventListener();
}
