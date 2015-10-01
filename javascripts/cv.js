(function($){

  $(function() {
    var dialog, form,
 
      // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
      emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      name = $( "#name" ),
      email = $( "#email" ),
      message = $( "#message" ),
      allFields = $( [] ).add( name ).add( email ).add( message ),
      tips = $( ".validateTips" );
 
    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
 
    function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }
 
    function SendMail() {
      var valid = true;
      allFields.removeClass( "ui-state-error" );
 
      valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
 
      if ( valid ) {
        $( "#users tbody" ).append( "<tr>" +
          "<td>" + name.val() + "</td>" +
          "<td>" + email.val() + "</td>" +
          "<td>" + message.val() + "</td>" +
        "</tr>" );
        dialog.dialog( "close" );
      }
      return valid;
    }
 
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      buttons: {
        "Envoyer": SendMail,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      SendMail();
    });
 
    $( "#create-user" ).on( "click", function() {
      dialog.dialog( "open" );
    });
  });
    
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
    });
      $("#footer").animate({
        right: 0
      }, 1000);
    $("#myLetter").dialog({});
  });

})(jQuery); // end of jQuery name space
