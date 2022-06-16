import $ from "jquery";
import "slick-carousel";

function slickCarousel() {
  $("#js-slickSlider").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
//   .on("setPosition", function (event, slick) {
//     slick.$slides.css("height", slick.$slideTrack.height() + "px");
// });
}

export { slickCarousel };