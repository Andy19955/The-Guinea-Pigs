export async function createSinglePost(post) {
  document.title = `${post.title.rendered} | The Guinea Pigs`;

  const postArticle = document.createElement("article");

  const postHeader = document.createElement("div");
  postHeader.classList.add("post-header");

  const postTitle = document.createElement("h1");
  postTitle.classList.add("post-title");
  postTitle.innerHTML = post.title.rendered;

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

  const postBody = document.createElement("div");
  postBody.classList.add("post-body", "flex-v");
  postBody.innerHTML = post.content.rendered;

  const main = document.querySelector("main");
  const postHero = document.createElement("section");
  postHero.classList.add("post-hero");

  const featuredImage = document.createElement("img");
  if (post.featured_media !== 0) {
    featuredImage.setAttribute("src", post._embedded["wp:featuredmedia"][0].source_url);
    featuredImage.setAttribute("alt", post._embedded["wp:featuredmedia"][0].alt_text);
  } else {
    featuredImage.setAttribute("src", "/images/no-image-found.jpg");
    featuredImage.setAttribute("alt", "Two guinea pigs on a pillow.");
  }
  postHero.append(featuredImage);
  main.prepend(postHero);

  postDate.append(clockIcon, postTime);
  postHeader.append(postTitle, postDate);
  postArticle.append(postHeader, postBody);

  return postArticle;
}
