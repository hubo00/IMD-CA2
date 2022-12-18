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

$(document).ready(function () {
  $('.carousel').carousel()
})

function sendEmail() {
  // Get the values of the subject and content fields
  const subject = document.getElementById('subjectInput').value;
  const body = document.getElementById('contentInput').value;

  // Construct the mailto: URL with the subject and body
  const url = `mailto:hub.bukowski@gmail.com?subject=${subject}&body=${body}`;

  // Open the URL in a new window
  window.open(url);
}
