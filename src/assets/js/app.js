import { Swiper, EffectFade, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";

import Form from "./Form";
import "./HeaderSticky";
import "./SoonItems";
import "./Menu";
import "./Anchor";

new Form(".js-form-simple");
new Form(".js-form-default");

function allSliders() {
  const heroSlider = new Swiper(".js-hero-slider", {
    autoHeight: true,
    observer: true,
    observeParents: true,
    threshold: 20,
  });

  const caseSlider = new Swiper(".js-cases-slider", {
    modules: [Pagination],
    observer: true,
    observeParents: true,
    slidesPerView: 1.2,
    spaceBetween: 30,
    pagination: {
      el: ".cases-container__pagination",
      type: "bullets",
    },
    breakpoints: {
      576: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 0,
        pagination: false,
      },
    },
  });
}
allSliders();
