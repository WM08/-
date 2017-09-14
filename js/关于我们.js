$(function(){
	$('nav li').eq(0).hover(function() {
		$(this).css('background','skyblue');
	}, function() {
		$(this).css('background','none');
	});

	$('nav li').eq(1).hover(function() {
		$(this).css('background','#990000');
	}, function() {
		$(this).css('background','none');
	});

	$('nav li').eq(2).hover(function() {
		$(this).css('background','green');
	}, function() {
		$(this).css('background','none');
	});

	$('nav li').eq(3).hover(function() {
		$(this).css('background','purple');
	}, function() {
		$(this).css('background','none');
	});

	$('nav li').eq(4).hover(function() {
		$(this).css('background','yellow');
	}, function() {
		$(this).css('background','none');
	});
})