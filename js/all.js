$(document).ready(function() {
  //menu button
  $('.hamburger-btn').click(function(event) {
    event.preventDefault();
    $('.nav').toggleClass('active');
    $(this).toggleClass('active');
  });
  //hidden menu option
  $('.nav li a').click(function(event) {
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
  });
  // back to top
  var scrollTrigger = 200;
  showToTop = () => {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > scrollTrigger) {
      $('.toTop').addClass('show');
    } else {
      $('.toTop').removeClass('show');
    }
  };
  $(window).on('scroll', () => {
    showToTop();
  });
  $('.toTop').click(function(event) {
    $('html, body').animate({scrollTop : 0}, 800);
});
