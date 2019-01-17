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
        $('#img-logo').attr("src","assets/images/logo 3.png");
      }
    });
  });

  $("#CarouselMerchant").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });

});
