import { toggleNavigation } from "./ui/shared/toggleNavbar.js";
import { handleContactForm } from "./handlers/handleContactForm.js";
import { handlePostsDisplay } from "./handlers/handlePostsDisplay.js";

function router() {
  const { pathname } = location;

  switch (pathname) {
    case "/":
    case "/index.html":
      // Add api call
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
