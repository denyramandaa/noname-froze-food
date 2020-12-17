$(document).ready(function() {
  function initSwiper(){
    new Swiper('.swiper--jumbotron', {
        effect: 'fade',
        followFinger: false,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        navigation: {
          nextEl: '.jumbotron--next',
          prevEl: '.jumbotron--prev',
        },
        pagination: {
          el: '.jumbotron--pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
    });
  }
  function initSwiperProducts(a){
    swiper = new Swiper('.swiper--products', {
      effect: 'slide',
      followFinger: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: a,
      spaceBetween: 0,
      pagination: {
        el: '.product--pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.product--next',
        prevEl: '.product--prev',
      }
    });
  }
  initSwiper();
  let productView = 0;
  window.innerWidth >= 1024 ? productView = 2.2 : productView = 1.2
  setTimeout(function(){
    initSwiperProducts(productView);
  },1000)
  $('.nav-our-product').on('mouseover touchstart', function () {
      $('.sub-menu-product').fadeIn();
  });
  $('.sub-menu-product').on('mouseleave touchend', function () {
      $('.sub-menu-product').fadeOut();
  });

  $(window).scroll(function() {
    // untuk event scroll
  });
  $(window).load(function(){
    // loader
  });
});
function gointTo(a) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.getElementById(a).offsetTop - 50
  })
}
function openMenu() {
  $('.side-menu').addClass('show');
  $('.overlay-side').fadeIn(100);
}
function closeMenu() {
  $('.side-menu').removeClass('show');
  $('.overlay-side').fadeOut(100);
}