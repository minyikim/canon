// navigation
$('.gnb-left li:nth-child(1)').mouseenter(function(){
  $('.sub-menu').stop().slideDown()
})
$('.gnb-left li:nth-child(1)').mouseleave(function(){
  $('.sub-menu').stop().slideUp()
})

// bg
$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    effect:'fade',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

