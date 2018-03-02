$(document).ready(function() {
  $('.hamburger-btn').click(function(event) {
    event.preventDefault();
    $('.nav').toggleClass('active');
    $(this).toggleClass('active');
  });
  $('.nav li a').click(function(event) {
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
  });
});
