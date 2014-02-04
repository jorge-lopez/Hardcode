
    // var $window = $(window); 
    // var velocity = 0.4; 

    // function update()
    // { 
    //   var pos = $window.scrollTop(); 
    //   $('.container').each(function() 
    //     { 
    //       var $element = $(this); 
    //       var height = $element.height(); 
    //       $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
    //     }); 
    // }; 
    // $window.bind('scroll', update);
$(document).ready(function(){
  // Cache the Window object
  $window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
    // Scroll the background at var speed
    // the yPos is a negative value because we're scrolling it UP!                
    var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
    
    // Put together our final background position
    var coords = '50% '+ yPos + 'px';

    // Move the background
    $bgobj.css({ backgroundPosition: coords });
    
}); // window scroll Ends

 });  

}); 




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