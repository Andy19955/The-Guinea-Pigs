import { fetchPosts } from "../api/fetchPosts.js";
import { displayLatestPosts } from "../ui/posts/displayLatestPosts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleLatestPostsDisplay() {
  const loadingElement = document.querySelector("#loading-wrapper");
  try {
    const posts = await fetchPosts(1);
    displayLatestPosts(posts);
  } catch (error) {
    displayMessage(".message-container", error.message, "error");
  } finally {
    loadingElement.classList.add("hidden");
  }
}
