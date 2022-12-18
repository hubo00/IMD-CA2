$(document).ready(function () {
  $('.carousel').carousel()
})

function sendEmail() {
  const subject = document.getElementById('subjectInput').value;
  const body = document.getElementById('contentInput').value;

  const url = `mailto:hub.bukowski@gmail.com?subject=${subject}&body=${body}`;

  window.open(url);
}
