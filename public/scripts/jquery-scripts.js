$(document).ready(function() {
	$("#ham-menu").on('click', function() {
		$(".shadow").toggleClass('shadow-show');
		$("#side-nav-bar").toggle('slide', {direction: "right"}, 400);
	});   
    $("#hide-menu").on('click', function() {
		$("#side-nav-bar").toggle('slide', {direction: "right"}, 400);
		$(".shadow").toggleClass('shadow-show');
	});
	$(".shadow").on('click', function() {
		$("#side-nav-bar").toggle('slide', {direction: "right"}, 400);
		$(".shadow").toggleClass('shadow-show');
	});
});
