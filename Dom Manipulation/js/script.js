// uncomment each line one by one to see the changes in the index.html

$(function() {
  //$("ul ul:first").append("<li>I am gonna be the last sub- item</li>");
  //$("<li>I am gonna be the last item</li>").appendTo($("ul ul:first"));
  //$("ul ul:first").prepend("<li>I am gonna be the first sub-item</li>");
  //$("ul ul").prepend("<li>I am gonna be the first sub-item</li>");
  //$("<li>I am gonna be the first item</li>").prependTo($("ul ul"));
  //$("<h2>I am Rohith V</h2>").prependTo($("#content"));
  //$(".red-box").after("<div class='red-box'>Another red</div>");
  //$(".red-box").before("<div class='red-box'>Another red</div>");
  // $(".red-box").before(function(){
  //   return "<div class='red-box'>Another Red</div>"
  // });
  //$(".red-box").before($(".blue-box"));
  //$("p").after($("#list")); // clone

  //$("li").replaceWith("<li>Replaced</li>");
  // $("li").replaceWith(function() {
  //   return "<li>Replaced with function</li>"
  // });
  // var firstListItem = $("li:first");
  // $("p:first").replaceWith(firstListItem);
  //$(".red-box, .blue-box").replaceWith("<div class='green-box'>More green </div>");
  //$("<div class='green-box'>More green </div>").replaceAll(".red-box, .blue-box");

  //$("li").remove();
  //$(".red-box").remove();
  //$("form").children().not("input:text, textarea, br").remove();
  // var detachListItem = $("li").detach(); // remember the event handler
  // $("#content").append(detachListItem);
  //$("p:first").empty();
  //$(".red-box, .green-box, .blue-box").empty();

  // attr(), prop(), val()
   var specialLink = $("#special-link");
   console.log(specialLink.attr("href"));
   specialLink.attr("href", "/rohith");
});