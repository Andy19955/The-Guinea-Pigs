import { fetchFeaturedMedia } from "../../api/fetchFeaturedMedia.js";

export async function createLatestPost(post) {
  const carouselCard = document.createElement("li");
  carouselCard.classList.add("carousel-card");

  const linkWrapper = document.createElement("a");
  linkWrapper.setAttribute("href", `/post.html?id=${post.id}`);
  linkWrapper.setAttribute("title", post.title.rendered);

  const carouselCardContainer = document.createElement("div");
  carouselCardContainer.classList.add("carousel-card-container");

  const carouselCardImageWrapper = document.createElement("div");
  carouselCardImageWrapper.classList.add("carousel-card-image");

  // Må sette alt verdier
  const carouselCardImage = document.createElement("img");
  if (post.featured_media !== 0) {
    const featuredMedia = await fetchFeaturedMedia(post.featured_media);
    carouselCardImage.setAttribute("src", featuredMedia.media_details.sizes.medium_large.source_url); // If no image, set default image using ??
  } else {
    carouselCardImage.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1719230693490-786d994f72b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  }

  const carouselCardTitle = document.createElement("h3");
  carouselCardTitle.innerText = post.title.rendered;

  carouselCardImageWrapper.append(carouselCardImage);
  carouselCardContainer.append(carouselCardImageWrapper, carouselCardTitle);
  carouselCard.append(carouselCardContainer);
  linkWrapper.append(carouselCard);

  return linkWrapper;
}
