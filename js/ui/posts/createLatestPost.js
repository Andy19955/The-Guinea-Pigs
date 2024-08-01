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

  const carouselCardImage = document.createElement("img");
  if (post.featured_media !== 0) {
    try {
      const featuredMedia = await fetchFeaturedMedia(post.featured_media);
      carouselCardImage.setAttribute("src", featuredMedia.media_details.sizes.medium_large.source_url);
      carouselCardImage.setAttribute("alt", featuredMedia.alt_text);
    } catch (error) {
      displayMessage("#message-container-carousel", `Oops, something didn't work as we planned. Error: ${error.message}`, "error");
    }
  } else {
    carouselCardImage.setAttribute("src", "/images/no-image-found.jpg");
    carouselCardImage.setAttribute("alt", "Two guinea pigs on a pillow with text: Oops, we didn't find a picture...");
  }

  const carouselCardTitle = document.createElement("h3");
  carouselCardTitle.classList.add("carousel-card-title");
  carouselCardTitle.innerHTML = post.title.rendered;

  carouselCardImageWrapper.append(carouselCardImage);
  carouselCardContainer.append(carouselCardImageWrapper, carouselCardTitle);
  carouselCard.append(carouselCardContainer);
  linkWrapper.append(carouselCard);

  return linkWrapper;
}
