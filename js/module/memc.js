$(function() {
	// 获取节点
	var processBtnEl = document.getElementById("processBtn");
	var blurPicEl = document.getElementById("blurPic");
	var oW,
		minW = $('#blurTip').width() + 20,
		maxW = $(window).width() * 0.8 - $('#clearTip').width() - 20,
		steps = maxW - minW;

	processBtnEl.addEventListener("touchstart", function(e) {
		var touches = e.touches[0];
		oW = touches.clientX - processBtnEl.offsetLeft;
		document.addEventListener("touchmove", defaultEvent, false);
	}, false)

	processBtnEl.addEventListener("touchmove", function(e) {
		var touches = e.touches[0];
		var oLeft = touches.clientX - oW;
		if (oLeft < minW) {
			oLeft = minW;
		} else if (oLeft > maxW) {
			oLeft = maxW;
		}
		processBtnEl.style.left = oLeft + "px";
		blurPicEl.style.opacity = 1 - (oLeft - minW) / steps;
		$('.swiper-slide-active').removeClass('init');
	}, false);

	processBtnEl.addEventListener("touchend", function() {
		document.removeEventListener("touchmove", defaultEvent, false);
	}, false);

	function defaultEvent(e) {
		e.preventDefault();
	}
})