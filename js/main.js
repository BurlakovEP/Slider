var indexMax = $(".album img").length - 1;

$(".next").click(function(){
	var currentImg = $(".current");
	var nextImg = currentImg.next();
	currentImg.fadeOut(800);
	currentImg.removeClass("current");
	nextImg.fadeIn(800);
	nextImg.addClass("current");

	if(currentImg.index() == indexMax) {
		$(".album img").eq(0).fadeIn(800);
		$(".album img").eq(0).addClass("current");
	}
});

$(".prev").click(function(){
	var currentImg = $(".current");
	var prevImg = currentImg.prev();
	currentImg.fadeOut(800);
	currentImg.removeClass("current");
	prevImg.fadeIn(800);
	prevImg.addClass("current");

	if(currentImg.index() == 0) {
		$(".album img").eq(indexMax).fadeIn(800);
		$(".album img").eq(indexMax).addClass("current");
	}
});


