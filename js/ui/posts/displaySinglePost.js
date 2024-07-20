import { createSinglePost } from "./createSinglePost.js";
import { addPostImageEventListener } from "../../ui/posts/addPostImageEventListener.js";

export async function displaySinglePost(post) {
  const postContainer = document.querySelector("#post-container");
  const postItem = await createSinglePost(post);
  postContainer.append(postItem);
  addPostImageEventListener();
}
