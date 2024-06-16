import { toggleNavigation } from "./ui/toggleNavbar.js";

function router() {
  const { pathname } = location;

  switch (pathname) {
    case "/":
    case "/index.html":
      console.log("index");
      break;
  }
}

router();
toggleNavigation();
