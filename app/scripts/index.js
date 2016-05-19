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
    $(this).find('a').addClass('project-hover');
  }else{
    $(this).find('a').removeClass('project-hover');
  }
});
