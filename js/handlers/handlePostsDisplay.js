import { fetchPosts } from "../api/fetchPosts.js";
import { displayPosts } from "../ui/posts/displayPosts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handlePostsDisplay() {
  const loadingElement = document.querySelector("#loading-wrapper");
  try {
    const posts = await fetchPosts(1);
    displayPosts(posts);
  } catch (error) {
    displayMessage(".message-container", error.message, "error");
  } finally {
    loadingElement.classList.add("hidden");
  }
}
