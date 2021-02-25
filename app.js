$(function() {
  var header = $("#header");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

  /* Header Fixed */

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /*Smooth Scroll*/

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $(this).data("scroll");
    blockOffset = $(blockId).offset().top;

    
    $this.addClass("active");
    $("#nav a").removeClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset - 40
      },
      700
    );
  });

  /* Menu nav toggle */

  $("#nav-toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("nav").toggleClass("active");
  });

  /* Collapse */

  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this);
    var blockId = $(this).data("collapse");

    $this.toggleClass("active");
  });

  /* Sliser */

  $('[data-slider]').slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
