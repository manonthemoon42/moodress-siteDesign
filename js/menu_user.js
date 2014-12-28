function menu_user() {
	var $window = $(window),
		$header = $('#header'),
		header_isFixed = $header.css('position') === 'fixed',
		header_height = !header_isFixed ? 0 :
			$header.height() + $('.couture', $header).height();
	
	function menu_fixed_toggle() {
		var $menu = $('#menu'),
			headerMenuContainer = $('#header .menu-fixed')[0],
			bodyContainer = $('#user-body .border .container')[0],
			menu_posY = $menu.offset().top - header_height,
			fixed = false;
		return function() {
			if ($window.scrollTop() >= menu_posY) {
				if (!fixed) {
					fixed = true;
					$menu.appendTo(headerMenuContainer);
				}
			} else if (fixed) {
				fixed = false;
				$menu.prependTo(bodyContainer);
			}
		};
	}

	function menu_avatar_toggle() {
		var	$avatar = $('#menu .avatar'),
			$links = $('#menu .links'),
			avatar_width = $('#menu').height(),
			$avatar_cover = $('#user-cover .avatar img'),
			avatar_cover_bottom = $avatar_cover.offset().top + $avatar_cover.height() - header_height,
			show = 0,
			avatar_prop = [
				{width:'0px'},
				{width:avatar_width}
			],
			links_prop = [
				{paddingLeft:'0px'},
				{paddingLeft:avatar_width}
			];
		$avatar.css(avatar_prop[0]);
		return function() {
			if ($window.scrollTop() >= avatar_cover_bottom) {
				if (!show) {
					show = 1;
					$links.animate(links_prop[show]);
					$avatar
						.css('background-image', 'url('+$avatar_cover[0].src+')')
						.animate(avatar_prop[show]);
				}
			} else if (show) {
				show = 0;
				$links.animate(links_prop[show]);
				$avatar.animate(avatar_prop[show]);
			}
		};
	}

	if (header_isFixed)
		$window.scroll(menu_fixed_toggle());
	$window.scroll(menu_avatar_toggle());
}
