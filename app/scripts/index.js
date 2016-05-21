var $ = require('jquery');

// parallax
// $(document).scroll(function() {
//   $(".banner-outer").css({
//     "background-position-y": (-$(this).scrollTop()/20)
//   })
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
