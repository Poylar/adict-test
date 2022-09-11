document.addEventListener("click", (e) => {
  if (e.target.closest(".js-open-nav")) {
    const nav = document.querySelector(".js-mobile-nav");
    nav.classList.toggle("mobile-nav-wrapper--opened");

  }
});
