$(document).ready(function () {
  const backToTopObj = $(".back-to-top");

  if (backToTopObj) {
    backToTopObj.click(function (e) {
      e.preventDefault();

      $(window).scrollTop(0);
    });
  }
});
