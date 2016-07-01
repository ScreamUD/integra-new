(function(){
	$(document).ready(function(){
		$buttons = $('.scroll-to');
		$buttons.on('click', function(e){
			e.preventDefault();
			$.scrollTo($(this).attr('data-target'), 1000);
		});
		calculateHeader();
	});

	$(window).resize(function(){
		calculateHeader();
	});

	function calculateHeader(){
		var $header = $('.header');
		var $puzzle = $('.block10');
		var height = $(window).height();
		$header.css('height', height + 'px');
		$puzzle.css('height', height + 'px');
		console.log(height);
	}
})()