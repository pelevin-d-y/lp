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

  $('.clients__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {


    var nextSlideElement = $('.clients__slide')[nextSlide];
    var currentSlideElement = $('.clients__slide')[currentSlide];

    var lastSlide = $('.clients__slider').slick("getSlick").slideCount - 1;

    console.log(currentSlide);
    console.log(lastSlide);
    console.log(nextSlide == lastSlide);

    if (nextSlide > currentSlide){
      $(nextSlideElement).css({'animation-name': 'move-next'});
      $(currentSlideElement).css({'animation-name': ''});
    } else if (nextSlide == 0 && currentSlide !== 1) {
      $(nextSlideElement).css({'animation-name': 'move-next'});
      $(currentSlideElement).css({'animation-name': ''});
    } else if (nextSlide == 0 && currentSlide == lastSlide) {
      console.log("центр");
      $(nextSlideElement).css({'animation-name': 'move-prev'});
      $(currentSlideElement).css({'animation-name': ''});
    } else {
      $(nextSlideElement).css({'animation-name': 'move-prev'});
      $(currentSlideElement).css({'animation-name': ''});
    }
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

