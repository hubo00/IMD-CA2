jQuery(".nav-logo-link").hover(
  function () {
    jQuery(this).addClass("hover");
  },
  function () {
    jQuery(this).removeClass("hover");
  }
);

// Script which listens for scrolling events, and takes the user directly to the section
$(document).ready(function () {
  var currentSection = 1;
  $(window).on("wheel mousewheel", function (e) {
    if (e.originalEvent.deltaY > 0) {
      // Scrolling down
      if (currentSection < 4) {
        currentSection++;
        $("html, body").animate(
          {
            scrollTop: $("#section-" + currentSection).offset().top,
          },
          1000
        );
      }
    } else {
      // Scrolling up
      if (currentSection > 1) {
        currentSection--;
        $("html, body").animate(
          {
            scrollTop: $("#section-" + currentSection).offset().top,
          },
          1000
        );
      }
    }
  });
});