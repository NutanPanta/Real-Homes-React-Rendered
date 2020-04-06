// nav ko scroll ko lago js start
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("nav").addClass("nutan");
    $(".side_nav-list").removeClass("nutan");
  } else {
    $("nav").removeClass("nutan");
  }
});
// nav ko scroll ko lago js end
