const soonItem = document.querySelectorAll(".soon__item");
const soonContainer = document.querySelector(".js-soon");
let fullHeight = 0;

console.log(fullHeight);
window.addEventListener("load", () => {
  let height = 0;
  Array.from(soonItem)
    .slice(0, 3)
    .forEach((elem) => {
      height += Math.ceil(elem.getBoundingClientRect().height);
    });
  soonContainer.style.height = `${height}px`;
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".js-soon-trigger")) {
    soonItem.forEach((elem) => (fullHeight += elem.getBoundingClientRect().height));
    soonContainer.style.height = `${fullHeight}px`;
    e.target.remove();
  }
});
