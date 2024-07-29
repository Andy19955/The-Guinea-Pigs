import { fetchFeaturedMedia } from "../../api/fetchFeaturedMedia.js";

export async function createPost(post) {
  const banner = document.createElement("div");
  banner.classList.add("banner", "flex-h");

  const bannerContentLeft = document.createElement("div");
  bannerContentLeft.classList.add("banner-content");

  const bannerContentRight = document.createElement("div");
  bannerContentRight.classList.add("banner-content");

  const bannerImage = document.createElement("img");
  bannerImage.classList.add("banner-img");
  if (post.featured_media !== 0) {
    const featuredMedia = await fetchFeaturedMedia(post.featured_media);
    bannerImage.setAttribute("src", featuredMedia.source_url);
    bannerImage.setAttribute("alt", featuredMedia.alt_text);
  } else {
    bannerImage.setAttribute("src", "/images/no-image-found.jpg");
    bannerImage.setAttribute("alt", "Two guinea pigs on a pillow with text: Oops, we didn't find a picture...");
  }

  const bannerContentInner = document.createElement("div");
  bannerContentInner.classList.add("banner-inner", "flex-v");

  const bannerTitle = document.createElement("h2");
  bannerTitle.classList.add("banner-title");
  bannerTitle.innerHTML = post.title.rendered;

  const bannerDescription = document.createElement("p");
  bannerDescription.classList.add("banner-description");
  bannerDescription.innerHTML = post.excerpt.rendered;

  const centerDiv = document.createElement("div");
  centerDiv.classList.add("center");

  const bannerButton = document.createElement("button");
  bannerButton.classList.add("btn", "btn-lrg", "primary-btn");
  bannerButton.innerText = "Read more";

  const linkWrapper = document.createElement("a");
  linkWrapper.setAttribute("href", `/post.html?id=${post.id}`);
  linkWrapper.setAttribute("title", post.title.rendered);

  bannerContentLeft.append(bannerImage);
  centerDiv.append(bannerButton);
  bannerContentInner.append(bannerTitle, bannerDescription, centerDiv);
  bannerContentRight.append(bannerContentInner);
  banner.append(bannerContentLeft, bannerContentRight);
  linkWrapper.append(banner);

  return linkWrapper;
}
