(function($){
    $(function(){

    if ($('body').hasClass("slide-vertical")) {
      var tid = setInterval(tagline_vertical_slide, 2500);
    }
    else {
      var tid = setInterval(tagline_fade, 2500);
    }
 
    // fade style
    function tagline_fade() {
      var curr = $("span.tagline span a.active");
      curr.removeClass("active");
      var nextTag = curr.next('a');
      if (!nextTag.length) {
        nextTag = $("span.tagline span a").first();
      } 
      nextTag.addClass("active");
    }
 
    // vertical slide
    function tagline_vertical_slide() {
      var curr = $("span.tagline span a.active");
      curr.removeClass("active").addClass("vs-out");
      setTimeout(function(){
        curr.removeClass("vs-out");
      }, 500);
 
      var nextTag = curr.next('a');
      if (!nextTag.length) {
        nextTag = $("span.tagline span a").first();
      } 
      nextTag.addClass("active");
    }
 
    function abortTimer() { // to be called when you want to stop the timer
      clearInterval(tid);
    }
 
    }); // end of document ready


    $(window).load(function(){
      $( ".LN_title_resum" ).animate({
        opacity: 1
      }, 1700, function() {
        $( ".LN_aboutme" ).show("drop", {direction: "right", easing: "easeInOutBack"}, 3000);
        $(".LN_resum").slideDown(2500, "easeInOutBack");
        $(".LN_photo").animate({
          opacity: 1,
          top: 0
        }, 1000, function() {
          $(".talk-bubble").animate({
            opacity: 1
          }, 2000);
        });
      });
      $("#footer").animate({
        right: 0
      }, 1000);
    });

    $("#myLetter").dialog({});

})(jQuery); // end of jQuery name space
