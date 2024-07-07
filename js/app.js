import { toggleNavigation } from "./ui/shared/toggleNavbar.js";
import { handleContactForm } from "./handlers/handleContactForm.js";
import { handlePostsDisplay } from "./handlers/handlePostsDisplay.js";
import { carouselControl } from "./ui/carousel.js";

function router() {
  const { pathname } = location;

  switch (pathname) {
    case "/":
    case "/index.html":
    case "/index":
      // Add api call
      carouselControl();
      break;
    case "/blog.html":
    case "/blog":
      handlePostsDisplay();
      break;
    case "/contact.html":
    case "/contact":
      handleContactForm();
      break;
  }
}

router();
toggleNavigation();
