$(document).ready(function(){
	//Аккордеон
	var $tabs = $('.accordeon_tab');
	var $menu = $('.fixed-menu-container');
	var url  = new Url;

	if($('.accordeon_tab.active').length > 0){
		$.scrollTo('.accordeon_tab.active', 1000);
	}

	$.each($tabs, function(key, tab){
		var $tab = $(tab);
		var $handler = $tab.find('.head-accord');
		$handler.on('click', function(){
			$tab
				.toggleClass('active')
				.siblings('.accordeon_tab').removeClass('active');
			$.scrollTo($tab);
			var $menuItems = $menu.find('li');
			$menuItems.eq($tab.index('.accordeon_tab') + 1)
				.addClass('active')
				.siblings('li').removeClass('active');
			url.query.di = $tab.index('.accordeon_tab') + 1;
			history.pushState(null, null, url);
		});
	});
	//Меню
	$menu.find('li').click(function(e){
		e.preventDefault();
		$(this)
			.addClass('active')
			.siblings('li').removeClass('active');
		var scrollTarget = $(this).attr('data-target');
		$($(this).attr('data-open'))
			.addClass('active')
			.siblings('.accordeon_tab').removeClass('active');
		$.scrollTo(scrollTarget, 0);
		if($(this).index('li') > 0){
			url.query.di = $(this).index('li');
		}else{
			delete url.query.di;
		}
		
		history.pushState(null, null, url);
	});

	//Стрелки
	$('a.scroll-to.head').on('click', function(e){
		e.preventDefault();
		$.scrollTo('.two', 1000);
	});
	$('a.scroll-to.blck2').on('click', function(e){
		e.preventDefault();
		$.scrollTo('.block3', 1000);
	});

	$('a.click2').on('click', function(e){
		e.preventDefault();
		$.scrollTo('.block5', 1000);
	});

});

			