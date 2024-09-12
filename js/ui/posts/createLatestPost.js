export async function createLatestPost(post) {
  const carouselCard = document.createElement("li");
  carouselCard.classList.add("carousel-card");

  const linkWrapper = document.createElement("a");
  linkWrapper.classList.add("carousel-link");
  linkWrapper.setAttribute("href", `/post.html?id=${post.id}`);
  linkWrapper.setAttribute("title", post.title.rendered);

  const carouselCardContainer = document.createElement("div");
  carouselCardContainer.classList.add("carousel-card-container");

  const carouselCardImageWrapper = document.createElement("div");
  carouselCardImageWrapper.classList.add("carousel-card-image");

  const carouselCardImage = document.createElement("img");
  if (post.featured_media !== 0) {
    carouselCardImage.setAttribute("src", post._embedded["wp:featuredmedia"][0].source_url);
    carouselCardImage.setAttribute("alt", post._embedded["wp:featuredmedia"][0].alt_text);
  } else {
    carouselCardImage.setAttribute("src", "/images/no-image-found.jpg");
    carouselCardImage.setAttribute("alt", "Two guinea pigs on a pillow.");
  }

  const carouselCardTitle = document.createElement("h3");
  carouselCardTitle.classList.add("carousel-card-title");
  carouselCardTitle.innerHTML = post.title.rendered;

  carouselCardImageWrapper.append(carouselCardImage);
  carouselCardContainer.append(carouselCardImageWrapper, carouselCardTitle);
  // carouselCard.append(carouselCardContainer);
  // linkWrapper.append(carouselCard);

  linkWrapper.append(carouselCardContainer);
  carouselCard.append(linkWrapper);

  // return linkWrapper;

  return carouselCard;
}
