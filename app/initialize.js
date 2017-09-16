import $ from "jquery"
import slick from "slick-carousel"
import validation from "jquery-validation"
import OnScreen from "onscreen"


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

  });

  $('.overlay').click(function(evt) {
  if ($(evt.target).closest('.popup-container').length == 0) {

      $('.popup').addClass('hidden');
      $('html,body').css('overflow','auto');
    }
  });

 $('.top-block__container-animate').css('height', 0);

  var topAnimationTimeout = function (element, timeout) {
  setTimeout(function() {
      $(element).css('animation-name', 'fadeIn')
    }, 500 * timeout);
}

  setTimeout(function() {
      $('.top-block__container-animate').css('height', '0')
    }, 500);


  const os = new OnScreen();

  setTimeout(function() {
    $('.top-block__container-animate').css('height', '0')
    }, 500);

  os.on('enter', '.top-block__container-animate', function() {
    topAnimationTimeout('.top-block__man', 1);
    topAnimationTimeout('.top-block__ants', 2);
    topAnimationTimeout('.top-block__wave', 3);
    topAnimationTimeout('.top-block__circle', 4);
    topAnimationTimeout('.top-block__triangle', 5);
  });


  os.on('enter', '.who', function() {
    $('.who__card-woman').css('animation-name', 'slideInUp');

    topAnimationTimeout('.who__card-square', 1);
    topAnimationTimeout('.who__card-plus', 2);
    topAnimationTimeout('.who__wave', 3);
    topAnimationTimeout('.who__big-circle', 4);
    topAnimationTimeout('.who__triangle', 5);
    topAnimationTimeout('.who__min-circle', 6);
    topAnimationTimeout('.who__ants', 7);
  });

  os.on('enter', '.services__items', function() {
    setTimeout(function() {
    $('.services__foto').css('animation-name', 'zoomIn')
    }, 100);

    setTimeout(function() {
    $('.services__item-text-animated').css('height', '0')
    }, 100);

    topAnimationTimeout('.services__ants', 1);
    topAnimationTimeout('.services__triangle', 2);
    topAnimationTimeout('.services__wave', 3);
  });

  os.on('enter', '.portfolio__items', function() {
    topAnimationTimeout('.portfolio__item-1', 1);
    topAnimationTimeout('.portfolio__item-2', 2);
    topAnimationTimeout('.portfolio__item-3', 3);
    topAnimationTimeout('.portfolio__item-4', 4);
  });

  os.on('enter', '.portfolio__man', function() {
    $('.portfolio__man').css('animation-name', 'slideInUpPortfolio');
    topAnimationTimeout('.portfolio__plus', 1);
    topAnimationTimeout('.portfolio__square', 2);
  });

  os.on('enter', '.clients__slider', function() {
    topAnimationTimeout('.clients__big-circle', 1);
    topAnimationTimeout('.clients__min-circle', 2);
    topAnimationTimeout('.clients__wave', 3);
    topAnimationTimeout('.clients__triangle', 4);
    topAnimationTimeout('.clients__ants', 5);
  });

  os.on('enter', '.contacts', function() {
    $('.contacts__man').css('animation-name', 'slideInUpPortfolio');

    topAnimationTimeout('.contacts__square', 1);
    topAnimationTimeout('.contacts__wave', 2);
    topAnimationTimeout('.contacts__ants', 3);
    topAnimationTimeout('.contacts__plus', 4);
    topAnimationTimeout('.contacts__triangle', 5);
  });


  $("#contacts__form").validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        digits: true
      },
      email: {
      required: true,
      email: true
    },
      fotos__area: {
        required: true
      }
    }
  });
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

