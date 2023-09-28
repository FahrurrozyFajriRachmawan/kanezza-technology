// AOS SETTINGS
AOS.init({
  easing: "ease",
  duration: 1000,
});

// SLICK SLIDING RUNNING TEXT
$(document).ready(function () {
  $(".sliding-running-text").slick({
    slidesToShow: 2,
    infinite: true,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 500,
    variableWidth: true,
  });
});

// SLICK OUR CLIENT SAY
$(document).ready(function () {
  $(".our-client-say").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
