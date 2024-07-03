export function toggleNavigation() {
  const navbar = document.querySelector("#navigation-collapsable");
  const toggleNavButton = document.querySelector("#toggle-nav-button");

  toggleNavButton.addEventListener("click", () => {
    navbar.classList.toggle("visible");
  });
}
