var $ = require('jquery');

// parallax
// $(document).scroll(function() {
//   $(".banner-outer").css({
//     "background-position-y": (-$(this).scrollTop()/20)
//   })
// });

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 650);
        return false;
      }
    }
  });
});

// var targetOffset = $(".skills-section").offset().top;
//
// var $w = $(window).scroll(function(){
//     if ( $w.scrollTop() > targetOffset ) {
//       $('.icon').css({"background-color": "white"});
//       $('.menu-title').css({"color": "white"});
//       $('.menu div').removeClass('icon').addClass('change');
//     }else{
//       $('.icon').css({"background-color": "rgba(54, 59, 68, 1)"});
//       $('.menu-title').css({"color": "rgba(54, 59, 68, 1)"});
//       $('.menu div').removeClass('change').addClass('icon');
//     }
// });

$('.banner-title').addClass('banner-title-load');

// hamburger menu function
$('.menu').click(function(){
  $(this).toggleClass('open');
  $('.header-inner').toggleClass('menu-active');
  $('.header-nav-item').toggleClass('nav-active');
  $('.header-logo').toggleClass('logo-active');
});

$('.skills-item a').hover(function(e){
  if (e.type === "mouseenter") {
    $(this).find('h4').addClass('skills-hover');
  }else{
    $(this).find('h4').removeClass('skills-hover');
  }
});

$('.project-img').hover(function(e){
  if (e.type === "mouseenter") {
    $(this).find('.project-slide-wrapper').addClass('project-slide-hover');
    $(this).find('.project-title').addClass('project-hover');
  }else{
    $(this).find('.project-slide-wrapper').removeClass('project-slide-hover');
    $(this).find('.project-title').removeClass('project-hover');
  }
});

$('.project-img').hover(function(e){
  if (e.type === "mouseenter") {
    $(this).find('.project-title').addClass('project-title-hover');
  }else{
    $(this).find('.project-title').removeClass('project-title-hover');
  }
});
