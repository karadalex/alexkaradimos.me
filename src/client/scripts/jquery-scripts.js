$(document).ready(function() {
	$("#ham-menu").on('click', function() {
		$("#side-nav-bar").toggle('slide', {direction: "right"}, 400);
	});   
    $("#hide-menu").on('click', function() {
		$("#side-nav-bar").toggle('slide', {direction: "right"}, 400);
	});
});
