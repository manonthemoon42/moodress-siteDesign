function header() {
	var header = document.getElementById('header'),
		SPEED_SLIDE_BOTTOM = 150,
		$bottom = $('.bottom', header),
		lastIconCliqued;

	$('.icon a', header)
		.click(function() {
			$(this)
				.parent().parent()
				.toggleClass('selected');
			if (lastIconCliqued === this) {
				$bottom.slideUp(SPEED_SLIDE_BOTTOM);
				lastIconCliqued = null;
			} else {
				if (!lastIconCliqued)
					$bottom.slideDown(SPEED_SLIDE_BOTTOM);
				else
					$(lastIconCliqued).parent().parent().removeClass('selected');
				lastIconCliqued = this;
			}
			return false;
		});

	$(document.body)
		.click(function() {
			$(lastIconCliqued).click();
		});

	$bottom
		.click(function(e) {
			e.stopPropagation();
		});
}
