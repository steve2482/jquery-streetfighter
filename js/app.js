$(document).ready(function() {
  $(".ryu").mouseenter(function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
  })
  .mouseleave(function() {
	$('.ryu-ready').hide();
	$('.ryu-still').show();
  })
  .mousedown(function() {
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	// play hadouken sound
  	$('.hadouken').show();
  })
  .mouseup(function() {
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  	$('.hadouken').hide();
  })
});
