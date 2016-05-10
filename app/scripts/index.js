var $ = require('jquery');

// hamburger menu function
$('.menu').click(function(){
  $(this).toggleClass('open');
});

$('.menu').click(function(){
  $('.header-inner').slideToggle(300, function(){
    $('.header-inner').removeClass('hidden');
  });
});

$('.menu').click(function(){
  $('.header-logo').slideToggle(300, function(){
    $('.header-logo').removeClass('hidden');
  });
});
