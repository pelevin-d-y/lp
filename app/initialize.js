import $ from "jquery"
import slick from "slick-carousel"

$(document).ready(function() {
  $('.clients__slider').slick({
    infinite: true,
    slidesToShow: 1,
    useTransform: true,
    fade: true,
    speed: 600,
    cssEase: 'linear',
    appendArrows: $('.clients__slider-arrows'),
    prevArrow: '<button id="prev" type="button" class="clients-btn-prev"></button>',
    nextArrow: '<button id="next" type="button" class="clients-btn-next"></button>'

  })

  $('.clients__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {


    var nextSlideElement = $('.clients__slide')[nextSlide];
    var currentSlideElement = $('.clients__slide')[currentSlide];

    var lastSlide = $('.clients__slider').slick("getSlick").slideCount - 1;

    console.log(currentSlide);
    console.log(lastSlide);
    console.log(currentSlide !== lastSlide);


    if (nextSlide == 0 && currentSlide !== 1) {
      $(nextSlideElement).css({'animation-name': 'move-next'});
      $(currentSlideElement).css({'animation-name': ''});
    } else if (nextSlide == lastSlide && currentSlide == 0) {
      console.log("центр");
      $(nextSlideElement).css({'animation-name': 'move-prev'});
      $(currentSlideElement).css({'animation-name': ''});
    } else if (nextSlide > currentSlide && currentSlide !== lastSlide){
      $(nextSlideElement).css({'animation-name': 'move-next'});
      $(currentSlideElement).css({'animation-name': ''});
    } else {
      $(nextSlideElement).css({'animation-name': 'move-prev'});
      $(currentSlideElement).css({'animation-name': ''});
    }
  });



  $('.portfolio__item').each(function() {
    $(this).on('mouseover', function() {
      $(this).css('background-size', '100%');

      $(this).css('border-color', 'rgba(255, 255, 255, 1)');
    });

    $(this).on('mouseout', function() {
      $(this).css('background-size', '110%');
      $(this).css('border-color', 'rgba(255, 255, 255, 0)');
    });
  });

  $('.popup__btn').on('click', function() {
    $('.popup').addClass('hidden');
  })
});

$('.overlay').click(function(evt) {
  if ($(evt.target).closest('.popup-container').length == 0) {
    $('.popup').addClass('hidden');
    $('html,body').css('overflow','auto');
  }
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

