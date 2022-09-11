import { closest } from "./Helpers";

const archonLinks = document.querySelectorAll('a[href^="#"]');
document.addEventListener("click", (e) => {
  archonLinks.forEach((elem) => {
    if (closest(e.target, elem)) {
      elem.classList.add("nav-list__link--active");
    } else {
      elem.classList.remove("nav-list__link--active");
    }
  });
});
