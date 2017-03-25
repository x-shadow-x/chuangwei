$(function() {
	// 获取节点
	var processBtnEl = document.getElementById("processBtn");
	var blurPicEl = document.getElementById("blurPic");
	var oW,
		maxW = $('#process').width();

	processBtnEl.addEventListener("touchstart", function(e) {
		var touches = e.touches[0];
		oW = touches.clientX - processBtnEl.offsetLeft;
		document.addEventListener("touchmove", defaultEvent, false);
	}, false)

	processBtnEl.addEventListener("touchmove", function(e) {
		var touches = e.touches[0];
		var oLeft = touches.clientX - oW;
		if (oLeft < 0) {
			oLeft = 0;
		} else if (oLeft > maxW) {
			oLeft = maxW;
		} else if (oLeft > document.documentElement.clientWidth - processBtnEl.offsetWidth) {
			oLeft = (document.documentElement.clientWidth - processBtnEl.offsetWidth);
		}
		processBtnEl.style.left = oLeft + "px";
		blurPicEl.style.opacity = 1 - oLeft / maxW;
	}, false);

	processBtnEl.addEventListener("touchend", function() {
		document.removeEventListener("touchmove", defaultEvent, false);
	}, false);

	function defaultEvent(e) {
		e.preventDefault();
	}
})