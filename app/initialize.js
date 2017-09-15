import $ from "jquery"
import slick from "slick-carousel"

$(document).ready(function() {
  $('.clients__slider').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    useTransform: true,
    fade: true,
    speed: 600,
    cssEase: 'linear'
  })


});


/*(function () {
var topLine = document.querySelector('.top-line');
var pageHeader = document.querySelector('.page-header');
var pageHeaderHeight = pageHeader.offsetHeight

window.addEventListener('scroll', function() {
  if (pageHeaderHeight > window.pageYOffset) {
    topLine.classList.remove('sticky');
  } else {
    topLine.classList.add('sticky');
  }
})
})(); */

