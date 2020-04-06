// nav ko scroll ko lago js start
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("nav").addClass("scrolltop");
    // $(".side_nav-list").removeClass("scrolltop");
  } else {
    $("nav").removeClass("scrolltop");
  }
});
// nav ko scroll ko lago js end
