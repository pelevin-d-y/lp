import $ from "jquery"
import slick from 'slick-carousel'

function initSlick () {
  $('.features-list').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  })
}

$(document).ready(() => {
  initSlick()
})


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

