import { toggleNavigation } from "./ui/shared/toggleNavbar.js";
import { handleContactForm } from "./handlers/handleContactForm.js";

function router() {
  const { pathname } = location;

  switch (pathname) {
    case "/":
    case "/index.html":
      console.log("index");
      break;
    case "/contact.html":
      handleContactForm();
  }
}

router();
toggleNavigation();
