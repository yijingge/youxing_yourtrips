// Cloud Float...
var $main = $cloud = mainwidth = null;
var offset1 = 450;
var offset2 = 0;
var offset3 = 100;

var offsetbg = 0;

$(document).ready(
	function () {
		$main = $("#briefSlider");
		$body = $("body");
		$cloud1 = $("#cloud1");
		$cloud2 = $("#cloud2");
    $cloud3 = $("#cloud3");
		mainwidth = $main.outerWidth();
	}
);

/// 飘动
setInterval(function flutter() {
	if (offset1 >= mainwidth) {
		offset1 = -580;
	}
  if (offset2 >= mainwidth) {
    offset2 = -580;
  }
	if (offset3 >= mainwidth) {
    offset3 = -580;
	}
	offset1 += 1.1;
	offset2 += 1.2;
  offset3 += 2;
	$cloud1.css("background-position", offset1 + "px 30px")
	$cloud2.css("background-position", offset2 + "px 160px")
  $cloud3.css("background-position", offset3 + "px 20px")
}, 70);
/*setInterval(function bg() {
	if (offsetbg >= mainwidth) {
		offsetbg =  -580;
	}
	offsetbg += 0.6;
	$body.css("background-position", -offsetbg + "px 0")
}, 90 );*/
