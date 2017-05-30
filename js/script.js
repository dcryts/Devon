$(document).ready(function() {

	// list of page states
	var STATE_STARTUP	= 'startup';
	var STATE_READY 	= 'ready';
	var STATE_TURNON 	= 'turnon';
	var STATE_ON 		= 'on';

	// current page state
	var pageState = STATE_STARTUP;

	$('a').attr('draggable', false);

	// function offBlink() {
	// 	$('#off').animate({color:'#3d3d3d'}, 1000, function() {
	// 		$('#off').animate({color:'#333'}, 1000, function() {
	// 			offBlink();
	// 		});
	// 	});
	// }

	// offBlink();

	$('#off').click(function() {
		// $('#off').effect('slide', {direction:'right', mode:'hide'}, 1000, function() {
		// 	$('#on').effect('slide', {direction:'left', mode:'show'}, 1000);
		// });
		$('#off').hide();
		$('body').animate({backgroundColor:'#fff'},300);
		$('#on').show().animate({color:'#151515'}, 700, function() {
			$('#name').animate({opacity:1},1200);
			// $("#menu").show().animate({left: '0px', opacity:1}, 800);
			$("#hi").animate({opacity:1},1200);

			var time = 0;
			var transTime = 3000;
			time += transTime;
			var to = setTimeout(function() {
				$('#hi').animate({opacity:0}, 400)
			}, time);

			transTime = 300;
			time += transTime;
			var to2 = setTimeout(function() {
				$('#menu').show().animate({left: '0px', opacity:1}, 800);
				$('#check').animate({opacity:1}, 800);
			}, time);

			transTime = 4000;
			time += transTime;
			var to3 = setTimeout(function() {
				$('#check').animate({opacity:0}, 400);
			}, time);
		});
	});

	// $('#name').click(function() {
	// 	$('#content-wrap').animate({top:'20%'},1000);
	// });

	$('#content-wrap').on('mousedown', function(mdEvent) {
		let oldX = mdEvent.pageX;
		let oldY = mdEvent.pageY;
		$('#content-wrap').on('mousemove', function(mmEvent) {
			let newX = mmEvent.pageX;
			let newY = mmEvent.pageY;
			let dX = newX - oldX;
			let dY = newY - oldY;
			$('#content-wrap').css({left:'+='+dX, top: '+='+dY});
			oldX = newX;
			oldY = newY;
		});

		$('#content-wrap').on('mouseup', function(mdEvent) {
			$('#content-wrap').unbind('mousemove');
		});
	});

	// $('#content-wrap').bind('mouseup', function(mdEvent) {
	// 	$('#content-wrap').unbind();
	// });

	// $.fn.hideAnimateUp = function() {
	// 	$(this).animate({height:0}, 500, function() {$(this).css({display:"none",overflow:"", height:""});});
	// }




});

function dragExample() {
	$('#content-wrap').on('mousedown', function(mdEvent) {
		let oldX = mdEvent.pageX;
		let oldY = mdEvent.pageY;
		$('#content-wrap').on('mousemove', function(mmEvent) {
			let newX = mmEvent.pageX;
			let newY = mmEvent.pageY;
			let dX = newX - oldX;
			let dY = newY - oldY;
			$('#content-wrap').css({left:'+='+dX, top: '+='+dY});
			oldX = newX;
			oldY = newY;
		});

		$('#content-wrap').on('mouseup', function(mdEvent) {
			$('#content-wrap').unbind('mousemove');
		});
	});
}