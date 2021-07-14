$(document).ready(function () {
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1200,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.svg"></button>',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: true,
          arrows: false
        }
      },
    ]
  });
});