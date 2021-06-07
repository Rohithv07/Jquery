$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000);
  $(".red-box").fadeIn(3000);
  $(".green-box").fadeIn(3000);
  $(".red-box").fadeTo(3000, 0.2);
  $(".green-box").fadeTo(4000, 0.5);
  $(".blue-box").fadeTo(5000, 0.8);
  $(".blue-box").fadeToggle(5000); // fadeout if its faded in, else fade in
  $(".blue-box").fadeToggle(6000);
  $(".green-box").fadeTo(2000, 0); // invisible
});