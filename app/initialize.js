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

    console.log(currentSlideElement);
    console.log(lastSlide);
    console.log(currentSlide !== lastSlide);


    if (nextSlide == 0 && currentSlide !== 1) {
      $(nextSlideElement).css({'animation-name': 'move-next-right'});
      $(currentSlideElement).css({'animation-name': 'move-prev-right'});

      setTimeout(function() {
        $(nextSlideElement).css('animation-name', '')
      }, 500);
      setTimeout(function() {
        $(currentSlideElement).css('animation-name', '')
      }, 500);

      setTimeout
    } else if (nextSlide == lastSlide && currentSlide == 0) {
      console.log('asdasd')
      $(nextSlideElement).css({'animation-name': 'move-next-left'});
      $(currentSlideElement).css({'animation-name': ' move-prev-left'});

      setTimeout(function() {
        $(nextSlideElement).css('animation-name', '')
      }, 500);
      setTimeout(function() {
        $(currentSlideElement).css('animation-name', '')
      }, 500);

    } else if (nextSlide > currentSlide && currentSlide !== lastSlide){
      $(nextSlideElement).css({'animation-name': 'move-next-right'});
      $(currentSlideElement).css({'animation-name': 'move-prev-right'});

      setTimeout(function() {
        $(nextSlideElement).css('animation-name', '')
      }, 500);
      setTimeout(function() {
        $(currentSlideElement).css('animation-name', '')
      }, 500);

    } else {
      $(nextSlideElement).css({'animation-name': 'move-next-left'});
      $(currentSlideElement).css({'animation-name': ' move-prev-left'});

      setTimeout(function() {
        $(nextSlideElement).css('animation-name', '')
      }, 500);

      setTimeout(function() {
        $(currentSlideElement).css('animation-name', '')
      }, 500);
    };
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

$('.top-block__container-animate').css('height', 0);

  var topAnimationTimeout = function (element, timeout) {
    var timeout = 0.3 * timeout + 's';
    $(element).css('animation-delay', timeout)
    $(element).css('animation-name', 'fadeIn');
}

  const os = new OnScreen();


    $('.top-block__container-animate').css('height', '0');
    ;

  os.on('enter', '.top-block__container-animate', function() {
    topAnimationTimeout('.top-block__man', 1);
    topAnimationTimeout('.top-block__wave', 2);
    topAnimationTimeout('.top-block__circle', 3);
    topAnimationTimeout('.top-block__ants', 4);
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

    $('.services__foto').css('animation-name', 'zoomIn');


    $('.services__item-text-animated').css('height', '0');


    topAnimationTimeout('.services__ants', 1);
    topAnimationTimeout('.services__triangle', 2);
    topAnimationTimeout('.services__wave', 3);
  });

  os.on('enter', '.portfolio__items', function() {
    topAnimationTimeout('.portfolio__item-1', 1);
    topAnimationTimeout('.portfolio__item-2', 2);
    topAnimationTimeout('.portfolio__item-3', 3);
    topAnimationTimeout('.portfolio__item-4', 4);
     $('.portfolio__man').css('animation-delay', '1.5s');
     $('.portfolio__man').css('animation-name', 'slideInUpPortfolio');
    topAnimationTimeout('.portfolio__plus', 4);
    topAnimationTimeout('.portfolio__square', 5);
  });

  os.on('enter', '.portfolio__man', function() {

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
      form__area: {
        required: true
      }
    },

  submitHandler: function(form) {
    $('.popup-thanks').removeClass('hidden');
    $("html,body").css("overflow","hidden");
  }
  });

  $("#popup__form").validate({
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
      form__area: {
        required: true
      }
    },
  submitHandler: function(form) {
    console.log('asdas');
    $('.popup-form').addClass('hidden');
    $('.popup-thanks').removeClass('hidden');
    $("html,body").css("overflow","hidden");
  }
  });

  $("a.main-nav__item").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });

  $('.popup__btn').on('click', function() {
    $('.popup').addClass('hidden');
    $('html,body').css('overflow','auto');
  });

  $('.overlay').click(function(evt) {
      if ($(evt.target).closest('.popup-container').length == 0) {

      $('.popup').addClass('hidden');
      $('html,body').css('overflow','auto');
    }
  });

  $('.btn:not(.contacts__btn)').on('click', function (evt) {
    evt.preventDefault();
    $('.popup-form').removeClass('hidden');
    $("html,body").css("overflow","hidden");
  });

  $('.portfolio__item-btn').on('click', function (evt) {
    evt.preventDefault();
    $('.popup-project').removeClass('hidden');
    $("html,body").css("overflow","hidden");
  });

  $('.project__btn').on('click', function (evt) {
    $('.popup-project').addClass('hidden');
    $('.popup.popup-form').removeClass('hidden');
  });

  $('.menu-btn').on('click', function () {
    $('.main-nav').addClass('main-nav-open');
  });

   $('.main-nav__close').on('click', function () {
     $('.main-nav').removeClass('main-nav-open');
  });


});




