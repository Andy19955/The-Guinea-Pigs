import { fetchFeaturedMedia } from "../../api/fetchFeaturedMedia.js";

export async function createSinglePost(post) {
  document.title = `${post.title.rendered} | The Guinea Pigs`;

  const postArticle = document.createElement("article");

  const postHeader = document.createElement("div");
  postHeader.classList.add("post-header");

  const postTitle = document.createElement("h1");
  postTitle.classList.add("post-title");
  postTitle.innerText = post.title.rendered;

  const postDate = document.createElement("div");
  postDate.classList.add("post-date");

  const clockIcon = document.createElement("i");
  clockIcon.classList.add("fa-regular", "fa-clock");
  const newDate = new Date(post.date);
  const dateFormatter = new Intl.DateTimeFormat("no-NO", { day: "2-digit", month: "2-digit", year: "numeric" });
  const postDateFormatted = dateFormatter.format(newDate);
  const postTime = document.createElement("time");
  postTime.setAttribute("datetime", post.date);
  postTime.innerText = postDateFormatted;

  // const featuredImage = document.createElement("img");
  // featuredImage.classList.add("post-featured-image");
  // if (post.featured_media !== 0) {
  //   const featuredMedia = await fetchFeaturedMedia(post.featured_media);
  //   featuredImage.setAttribute("src", featuredMedia.source_url); // If no image, set default image using ??
  //   featuredImage.setAttribute("alt", featuredMedia.alt_text);
  // } else {
  //   featuredImage.setAttribute(
  //     "src",
  //     "https://images.unsplash.com/photo-1719230693490-786d994f72b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   );
  //   featuredImage.setAttribute("alt", "Image indicating that no image is available.");
  // }

  const postBody = document.createElement("div");
  postBody.classList.add("post-body", "page-content");
  postBody.innerHTML = post.content.rendered;

  postDate.append(clockIcon, postTime);
  postHeader.append(postTitle, postDate);
  postArticle.append(postHeader, postBody);

  return postArticle;
}
