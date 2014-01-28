$(document).ready(function(){

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