$(document).ready(function(){

  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 100  // 2 seconds

  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
       // set distance user needs to scroll before we start fadeIn
      if ($(this).scrollTop() > 100) {
        $('.navbar').addClass("bg-second");
        $('.navbar').removeClass("bg-first");
        $('#img-logo').attr("src","assets/images/logo 4.png");
      } else {
        $('.navbar').removeClass("bg-second");
        $('.navbar').addClass("bg-first");
        $('#img-logo').attr("src","assets/images/logo 2.png");
      }
    });
  });

});
