import { fetchFeaturedMedia } from "../../api/fetchFeaturedMedia.js";

export async function createPost(post) {
  const banner = document.createElement("div");
  banner.classList.add("banner");

  const bannerContentLeft = document.createElement("div");
  bannerContentLeft.classList.add("banner-content");

  const bannerContentRight = document.createElement("div");
  bannerContentRight.classList.add("banner-content");

  // Må sette alt verdier
  const bannerImage = document.createElement("img");
  bannerImage.classList.add("banner-img");
  if (post.featured_media !== 0) {
    const featuredMedia = await fetchFeaturedMedia(post.featured_media);
    bannerImage.setAttribute("src", featuredMedia.source_url); // If no image, set default image using ??
    bannerImage.setAttribute("alt", featuredMedia.alt_text);
  } else {
    bannerImage.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1719230693490-786d994f72b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    bannerImage.setAttribute("alt", "Image indicating that no image is available.");
  }

  const bannerContentInner = document.createElement("div");
  bannerContentInner.classList.add("banner-inner", "flex");

  const bannerTitle = document.createElement("h2");
  bannerTitle.classList.add("banner-title");
  bannerTitle.innerText = post.title.rendered;

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
