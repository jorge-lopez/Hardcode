
    var $window = $(window); 
    var velocity = 0.4; 

    function update()
    { 
      var pos = $window.scrollTop(); 
      $('.container').each(function() 
        { 
          var $element = $(this); 
          var height = $element.height(); 
          $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
        }); 
    }; 
    $window.bind('scroll', update);





       	$( document ).ready(function() {

$(function(){
    $('.nav li a').click(function(){
        var divID = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(divID).offset().top 
        }, {
            duration: 'slow', 
            easing: 'swing'
        }); 
    }); 
});
});

$(document).ready(function() { 
    var $winwidth = $(window).width();
    $("#home").attr({
      width: $winwidth
    });
    $(window).bind("resize", function(){ 
      var $winwidth = $(window).width();
      $("#home").attr({
        width: $winwidth
      });
     });
  }); 
$(document).ready(function() { 
    var $winwidth = $(window).width();
    $("#about").attr({
      width: $winwidth
    });
    $(window).bind("resize", function(){ 
      var $winwidth = $(window).width();
      $("#about").attr({
        width: $winwidth
      });
     });
  }); 
$(document).ready(function() { 
    var $winwidth = $(window).width();
    $("#crew").attr({
      width: $winwidth
    });
    $(window).bind("resize", function(){ 
      var $winwidth = $(window).width();
      $("#crew").attr({
        width: $winwidth
      });
     });
  }); 