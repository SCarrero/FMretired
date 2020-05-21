Foundation.Reveal.deepLink = true;
Foundation.Reveal.fullScreen = true;
Foundation.Reveal.resetOnClose = true;
$(document).foundation();


function isElementInViewport(item) {
  var el = item[0];
  if (el.getBoundingClientRect) {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  } else {
    return true;
  }
}
function animTrigger() {
  if (isElementInViewport($(".large-1"))) {
    $(".large-1, .small-1, .small-2").addClass("buildings-animate");
  } else {
    $(".buildings-animate").removeClass("buildings-animate");
  }
  if (isElementInViewport($(".map"))) {
    $(".map-wrapper").children().addClass("houses-animate");
  } else {
    $(".houses-animate").removeClass("houses-animate");
  }
  if (isElementInViewport($(".odometer"))) {
    $(".odometer-number").children().addClass("odometer-animate");
  } else {
    $(".odometer-animate").removeClass("odometer-animate");
  }
}
$(window).on("load scroll resize orientationchange", function() {
  var timerAnim = setTimeout(animTrigger, 300);
});


