import { toggleNavigation } from "./ui/shared/toggleNavbar.js";
import { handleLatestPostsDisplay } from "./handlers/handleLatestPostsDisplay.js";
import { handleContactForm } from "./handlers/handleContactForm.js";
import { handlePostsDisplay } from "./handlers/handlePostsDisplay.js";

function router() {
  const { pathname } = location;

  switch (pathname) {
    case "/":
    case "/index.html":
    case "/index":
      handleLatestPostsDisplay();
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
