/*$(document).ready(function(){

	var $window= $(window);
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); //Se asigna el objeto
		
		$(window).scroll(function(){
			var yPos = -($window.scrollTop()/$bgobj.data('speed'));
			
			//Posicion final del fondo
			var coords = '50%' + yPos + 'px';

			//Mover el fondo
			$bgobj.css({backgoundPosition:coords})
		});
	});
});

//IE fix
document.createElement("article");
document.createElement("section");
*/
$( document ).ready(function() 
{
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