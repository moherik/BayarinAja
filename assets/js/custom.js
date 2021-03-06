$(document).ready(function(){

  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 100  // 2 seconds

  // set distance user needs to scroll before we start fadeIn
 if ($(this).scrollTop() > 100) {
   $('.navbar').addClass("bg-second");
   $('.navbar').removeClass("bg-first");
   $('#img-logo').attr("src","assets/images/logo 4.png");
 } else {
   $('.navbar').removeClass("bg-second");
   $('.navbar').addClass("bg-first");
   $('#img-logo').attr("src","assets/images/logo 3.png");
 }

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
        $('#img-logo').attr("src","assets/images/logo 3.png");
      }
    });
  });

  $('.merchant-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop':  $target.offset().top //no need of parseInt here
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

});
