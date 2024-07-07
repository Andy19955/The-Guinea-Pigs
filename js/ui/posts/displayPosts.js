import { createPost } from "./createPost.js";

export async function displayPosts(posts) {
  const postContainer = document.querySelector("#post-container");

  for (let i = 0; i < posts.length; i++) {
    const postItem = await createPost(posts[i]);
    postContainer.append(postItem);
  }
}
