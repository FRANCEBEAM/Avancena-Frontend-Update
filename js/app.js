// LETS CREATE SWIPER
var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// $(document).ready(function () {
//   if ($(window).width() > 991){
//   $('.navbar-light .d-menu').hover(function () {
//           $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
//       }, function () {
//           $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
//       });
//       }
//   });