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

  // showing and hiding elements
  $(".blue-box").hide();
  $(".blue-box").show();
  $(".blue-box").toggle(); // here first it hides, then it is shown and then toggle is executed which again hides the box
  $(".blue-box").show(4000);
  // $(".blue-box").hide(2000);
  // $(".blue-box").toggle();

  // sliding elements up and down
  $(".red-box").slideUp(2000);
  $(".red-box").slideDown(2000);
  $("p").slideUp(3000);
  $("p").slideDown(4000);  // there is also slideToggle

  // moving elements
  $(".red-box").animate({
    "margin-left": "+=200px"
  }, 2000, "linear"); 
  $(".red-box").animate({
    "margin-left": "-=200px"
  }, 3000, "linear");

  $(".red-box").fadeTo(1000, 1);
  $(".green-box").fadeTo(3000, 1);

  // More custom animations
  $(".blue-box").animate({
    "margin-left": "200px",
    "opacity": "0",
    "height": "50px",
    "width": "50px",
    "margin-top" : "25px"
  }, 2000);

  $("p").animate({
    fontSize: "20px"
  }, 1000);

  // bringing back the blue box
   $(".blue-box").animate({
    "margin-left": "-=200px",
    "opacity": "100",
    "height": "80px",
    "width": "80px",
    "margin": "10px 10px 10px 0px"
  }, 2000);

   // Delaying and chaining animations
   $(".red-box").fadeTo(1000, 0.2).delay(3000).fadeTo(1000, 1);
   $(".green-box").delay(1000).fadeTo(1000, 0.5).delay(4000).fadeTo(1000, 1);
   $(".blue-box").delay(2000).fadeTo(1000, 0.8).delay(5000).fadeTo(1000, 1);

   // timing using callback functions
   $(".red-box").fadeTo(1000, 0, function() {
     $(".green-box").fadeTo(1000, 0, function() {
       $(".blue-box").fadeTo(1000, 0, function() {
         $(".blue-box").fadeTo(1000, 1, function() {
           $(".green-box").fadeTo(1000, 1, function() {
             $(".red-box").fadeTo(1000, 1)
           });
         });
       });
     });
   });

   // sign up lightbox
   $(".lightbox").delay(500).fadeIn(1000);
});