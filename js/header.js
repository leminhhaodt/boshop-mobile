$(document).ready(function () {
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 55,
    animation: "effectOverlay 0.24s ease-in-out",
  };

  // Button Bars
  $("#icon-close").hide();
  $("#bars").click(function () {
    $("#icon-bars").hide();
    $("#icon-close").show();
    $("#menuCategory").addClass("active");
    $("body").prepend('<div id="overlay"></div>');
    $("body").css("overflowY", "hidden");
    $("#menu").hide();
    // Overlay Shadow
    $("#overlay").css(overlayStyle);
    $("#overlay").click(function () {
      $("#overlay").detach();
      $("#menuCategory").removeClass("active");
      $("#icon-close").hide();
      $("#icon-bars").show();
      $("body").removeAttr("style");
      $("#menu").show();
    });
  });

  // Category Close
  $("#category-close").click(function (e) {
    $("#menuCategory").removeClass("active");
    $("#icon-close").hide();
    $("#icon-bars").show();
    $("#overlay").detach();
    $("body").removeAttr("style");
    $("#menu").show();
  });

  // Button Cart
  $("#button-cart").click(function (e) {
    e.preventDefault();
    $("#cart").toggleClass("active");
    $("body").prepend('<div id="overlay"></div>');
    $("#menu").hide();
    // Overlay Shadow
    $("#overlay").css(overlayStyle);
    $("#overlay").click(function () {
      $("#overlay").detach();
      $("#cart").removeClass("active");
      $("body").removeAttr("style");
      $("#menu").show();
    });
    $("body").css("overflowY", "hidden");
  });
  // Icon Close Cart
  $("#cart-close").click(function () {
    $("#cart").removeClass("active");
    $("#overlay").detach();
    $("#cart-close").addClass("active");
    $("body").removeAttr("style");
    $("#menu").show();
  });

  // Dropdown Category
  $("#dropdown-button-1").click(function () {
    $("#dropdown-content-1").toggleClass("show");

    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up1").toggleClass("rotate");
  });

  $("#dropdown-button-2").click(function () {
    $("#dropdown-content-2").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up2").toggleClass("rotate");
  });

  $("#dropdown-button-3").click(function () {
    $("#dropdown-content-3").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up3").toggleClass("rotate");
  });

  $("#dropdown-button-4").click(function () {
    $("#dropdown-content-4").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up4").toggleClass("rotate");
  });

  $("#dropdown-button-5").click(function () {
    $("#dropdown-content-5").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up5").toggleClass("rotate");
  });

  $("#dropdown-button-6").click(function () {
    $("#dropdown-content-6").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");

    $("#icon-up6").toggleClass("rotate");
  });

  function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  const headerSearchWrapper = $("#headerSearch-wrapper");
  const headerTop = headerSearchWrapper && headerSearchWrapper.offset().top;
  $(window).scroll(
    debounceFn(function () {
      const windowScroll = $(window).scrollTop();
      if (windowScroll > headerTop) {
        headerSearchWrapper.css({
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          transition: "all 0.24s ease-in-out",
          padding: "14px",
        });
        $("#search-list").hide();
      } else {
        headerSearchWrapper.removeAttr("style");
        $("#search-list").show();
      }
    }, 50)
  );
});
