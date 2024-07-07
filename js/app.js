import { toggleNavigation } from "./ui/shared/toggleNavbar.js";
import { handleContactForm } from "./handlers/handleContactForm.js";
import { handlePostsDisplay } from "./handlers/handlePostsDisplay.js";
import { carouselControl } from "./ui/carousel.js";

function router() {
  const { pathname } = location;

  switch (pathname) {
    case "/":
    case "/index.html":
      // Add api call
      carouselControl();
      break;
    case "/blog.html":
      handlePostsDisplay();
      break;
    case "/contact.html":
      handleContactForm();
      break;
  }
}

router();
toggleNavigation();
