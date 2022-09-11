const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  setTimeout(() => {
    if (scrollY > 300) {
      header.classList.add("header--sticky");
    } else {
      header.classList.remove("header--sticky");
    }
  }, 300);
});
