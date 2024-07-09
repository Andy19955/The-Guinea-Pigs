import { fetchSinglePost } from "../api/fetchSinglePost.js";
import { displaySinglePost } from "../ui/posts/displaySinglePost.js";
import { displayMessage } from "../ui/shared/displayMessage.js";
import { getQueryParam } from "../helpers/getQueryParam.js";

export async function handleSinglePostDisplay() {
  const loadingElement = document.querySelector("#loading-wrapper");
  const postId = getQueryParam("id");
  const postTitle = document.querySelector("#post-title");
  const postContainer = document.querySelector("#post-container");
  if (!postId) {
    window.location.href = "/";
  }

  try {
    const post = await fetchSinglePost(postId);
    postTitle.innerText = post.title.rendered;
    postContainer.innerHTML = post.content.rendered;
    const postDate = new Date(post.date);
    const dateFormatter = new Intl.DateTimeFormat("no-NO", { day: "2-digit", month: "2-digit", year: "numeric" });
    const postDateFormatted = dateFormatter.format(postDate);
    postContainer.innerHTML += `<small>Date: ${postDateFormatted}</small>`;
    // displaySinglePost(post);
  } catch (error) {
    displayMessage(".message-container", `Oops, something didn't work as we planned. Error: ${error.message}`, "error");
  } finally {
    loadingElement.classList.add("hidden");
  }
}
