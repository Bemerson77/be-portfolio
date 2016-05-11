var $ = require('jquery');

// hamburger menu function
$('.menu').click(function(){
  $(this).toggleClass('open');
  $('.header-inner').toggleClass('menu-active');
  $('.header-nav-item').toggleClass('nav-active');
  $('.header-logo').toggleClass('logo-active');
});


// parallax
$(document).scroll(function() {
  $(".banner-outer").css({
    "background-position-y": (-$(this).scrollTop()/60)
  })
});
