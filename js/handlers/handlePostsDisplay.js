import { fetchPosts } from "../api/fetchPosts.js";
import { displayPosts } from "../ui/posts/displayPosts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handlePostsDisplay(page) {
  const loadingElement = document.querySelector("#loading-wrapper");
  const loadMore = document.querySelector("#load-posts-btn");
  const postsPerPage = 10;
  let postCount;
  try {
    const posts = await fetchPosts(page, postsPerPage);
    postCount = posts.length;
    displayPosts(posts);
  } catch (error) {
    displayMessage(".message-container", `Oops, something didn't work as we planned. Error: ${error.message}`, "error");
  } finally {
    loadingElement.classList.add("hidden");
    if (postCount < postsPerPage) {
      loadMore.classList.add("hidden");
    } else {
      loadMore.classList.remove("hidden");
      loadMore.addEventListener("click", () => {
        loadMore.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Loading more posts";
        handlePostsDisplay(page + 1);
      });
    }
  }
}
