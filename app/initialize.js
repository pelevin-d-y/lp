import $ from "jquery"
import ScrollMagic from "scrollmagic"
import slick from "slick-carousel"
import validation from "jquery-validation"


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
    $(element).css('animation-delay', timeout);
    $(element).css('animation-name', 'fadeIn');
}


  var controller = new ScrollMagic.Controller();

  //top-block
var scene = new ScrollMagic.Scene({triggerElement: ".top-block"})
	.setClassToggle(".top-block__man", "fadein-animate-1")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".top-block"})
	.setClassToggle(".top-block__wave", "fadein-animate-2")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".top-block"})
	.setClassToggle(".top-block__circle", "fadein-animate-3")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".top-block"})
	.setClassToggle(".top-block__ants", "fadein-animate-4")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".top-block"})
	.setClassToggle(".top-block__triangle", "fadein-animate-5")
	.addTo(controller);

  // who-block
var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__card-woman", "card-woman-animate")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__card-square", "fadein-animate-1").re
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__card-plus", "fadein-animate-2")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__wave", "fadein-animate-3")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__big-circle", "fadein-animate-4")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__triangle", "fadein-animate-5")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__min-circle", "fadein-animate-6")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__ants", "fadein-animate-7")
	.addTo(controller);

  // services-block
var scene = new ScrollMagic.Scene({triggerElement: ".services"})
	.setClassToggle(".services__foto", "services-foto-animate")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".services"})
	.setClassToggle(".services__item-text-animated", "services-foto-text-animated")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".services"})
	.setClassToggle(".services__ants", "fadein-animate-2")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".services"})
	.setClassToggle(".services__triangle", "fadein-animate-3")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".services"})
	.setClassToggle(".services__wave", "fadein-animate-4")
	.addTo(controller);

  // portfolio-block
var scene = new ScrollMagic.Scene({triggerElement: ".portfolio"})
	.setClassToggle(".portfolio__item-1", "fadein-animate-1")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".portfolio"})
	.setClassToggle(".portfolio__item-2", "fadein-animate-2")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".portfolio"})
	.setClassToggle(".portfolio__item-3", "fadein-animate-3")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".portfolio"})
	.setClassToggle(".portfolio__item-4", "fadein-animate-4")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".portfolio"})
	.setClassToggle(".portfolio__man", "portfolio-man-animated")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".portfolio"})
	.setClassToggle(".portfolio__plus", "fadein-animate-5")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".portfolio"})
	.setClassToggle(".portfolio__square", "fadein-animate-6")
	.addTo(controller);

  //clients-block
var scene = new ScrollMagic.Scene({triggerElement: ".clients"})
	.setClassToggle(".clients__big-circle", "fadein-animate-1")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".clients"})
	.setClassToggle(".clients__min-circle", "fadein-animate-2")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".clients"})
	.setClassToggle(".clients__wave", "fadein-animate-3")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".clients"})
	.setClassToggle(".clients__triangle", "fadein-animate-4")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".clients"})
	.setClassToggle(".clients__ants", "fadein-animate-5")
	.addTo(controller);

  //contacts-block
var scene = new ScrollMagic.Scene({triggerElement: ".contacts"})
	.setClassToggle(".contacts__man", "contacts-block-man-animated")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".contacts"})
	.setClassToggle(".contacts__square", "fadein-animate-1")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".contacts"})
	.setClassToggle(".contacts__wave", "fadein-animate-2")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".contacts"})
	.setClassToggle(".contacts__ants", "fadein-animate-3")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".contacts"})
	.setClassToggle(".contacts__plus", "fadein-animate-4")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".contacts"})
	.setClassToggle(".contacts__triangle", "fadein-animate-5")
	.addTo(controller);


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
    //$('.popup-thanks').removeClass('hidden');
    //$("html,body").css("overflow","hidden");
    //form.submit();
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
    //$('.popup-form').addClass('hidden');
    //$('.popup-thanks').removeClass('hidden');
    //$("html,body").css("overflow","hidden");
    //form.submit();
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
    $('.popup-project').addClass('hidden');
    $('html,body').css('overflow','auto');
  });

  $('.overlay').click(function(evt) {
      if ($(evt.target).closest('.popup-container').length == 0) {

      $('.popup').addClass('hidden');
      $('.popup-project').addClass('hidden')
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

  $('.menu-btn').on('click', function () {
    $('.main-nav').addClass('main-nav-open');
  });

   $('.main-nav__close').on('click', function () {
     $('.main-nav').removeClass('main-nav-open');
  });

  $('.project__btn').on('click', function (evt) {
    evt.preventDefault();

    $('.popup-project').addClass('hidden');
    console.log('asdasd')
    $('.popup-form').removeClass("hidden");
  });

});



