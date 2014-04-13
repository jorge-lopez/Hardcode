$(document).ready(function(){
	$('#nav').localScroll(500);
	$('.links').localScroll(500);
	$('#home').parallax("50%", 0.1);
	$('#about').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.4);
	$('#crew').parallax("50%", 0.3);
});

$(document).ready(function() {
   $('#jorgeP').hide();
    $('#jorge').animate({
       opacity:1 
});

$(document).ready(function() {
	$('#ficachiP').hide();
    $('#ficachi').animate({
       opacity:1

	});

	$(document).ready(function() {
	 $('#ivanP').hide();
    $('#ivan').animate({
       opacity:1

	});
$('#jorge').hover(function() {
    $(this).stop().animate({opacity:.4},500);
    $('#jorgeP').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('#jorgeP').fadeOut();
});
});
$('#ficachi').hover(function() {
    $(this).stop().animate({opacity:.4},500);
    $('#ficachiP').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('#ficachiP').fadeOut();
});
});
$('#ivan').hover(function() {
    $(this).stop().animate({opacity:.4},500);
    $('#ivanP').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('#ivanP').fadeOut();
});
});