import { fetchPosts } from "../api/fetchPosts.js";
import { displayLatestPosts } from "../ui/posts/displayLatestPosts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleLatestPostsDisplay() {
  try {
    const posts = await fetchPosts(1, 10);
    displayLatestPosts(posts);
  } catch (error) {
    displayMessage("#message-container-carousel", `Oops, something didn't work as we planned. Error: ${error.message}`, "error");
  }
}
