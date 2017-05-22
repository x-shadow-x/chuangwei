window.onload = function() {
	$('#loadingToast').hide();
	var swiper = new Swiper('.swiper-container', {
		paginationClickable: true,
		direction: 'vertical',
		onInit: function(swiper) {
			if (!!$('.swiper-slide-active').attr('data-init') == true) {
				$('.swiper-slide-active').addClass('init');
			}
			if (!$('.swiper-slide-active').hasClass('play')) {
				$('#loadingToast').show();
				var imgList = new Array($('.swiper-slide-active').find('img').length);
				$('.swiper-slide-active').find('img').each(function(index, item) {
					$(item).attr('src', $(item).attr('data-src'));
					item.onload = function() {
						imgList.pop();
						if (imgList.length <= 0) {
							$('.swiper-slide-active').addClass('play');
							$('#loadingToast').hide();
						}
					}
				});
			}
		},
		onSlideChangeEnd: function(swiper) {
			if (!!$('.swiper-slide-active').attr('data-init') == true) {
				$('.swiper-slide-active').addClass('init');
			}
			if (!$('.swiper-slide-active').hasClass('play')) {
				$('#loadingToast').show();
				var imgList = new Array($('.swiper-slide-active').find('img').length);
				$('.swiper-slide-active').find('img').each(function(index, item) {
					$(item).attr('src', $(item).attr('data-src'));
					item.onload = function() {
						imgList.pop();
						if (imgList.length <= 0) {
							$('.swiper-slide-active').addClass('play');
							$('#loadingToast').hide();
						}
					}
				});
			}
		}
	});
}