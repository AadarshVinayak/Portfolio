import Swiper, {
  Navigation,
  Pagination,
} from "htts://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

Swiper.use([Navigation, Pagination]);

$(document).ready(function () {
  var mySwiper = $(".swiper-container").swiper({
    mode: "horizontal",
    watchActiveIndex: true,
    loop: true,
    onSlideChangeStart: function (swiper) {
      console.log("slide change start - before");
      console.log(swiper);
      console.log(swiper.activeIndex);
      //before Event use it for your purpose
    },
    onSlideChangeEnd: function (swiper) {
      console.log("slide change end - after");
      console.log(swiper);
      console.log(swiper.activeIndex);
      //after Event use it for your purpose
      if (swiper.activeIndex == 1) {
        //First Slide is active
        console.log("First slide active");
      }
    },
  });
});
