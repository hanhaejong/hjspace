$(document).ready(function(){

     var step = 1000; 
     $('.pf_cover .cover').each(function(index) { 
		index++; 
		var delay = step * index;
		$(this).delay(delay).animate({ 
			   left: "-100%" 
		}, 500);
     }); 
	
	var text = "UX/UI_FrontEnd Developer, Publisher<br /> HanHaeJong";
	var cnt = 0;
	var speed = 60;
	var timer1 = null;
	 
	function typing(){
		document.getElementById('texts').innerHTML = text.substring(0, cnt) + "_";
		cnt++;
		timer = setTimeout(typing, speed);
	 
		if(text.length < cnt){
			clearTimeout(timer)
			//cnt = 0;
		}
	}
	typing();
	

	$("header, #container, footer, img").delay(4000).fadeIn(2000);
	function pfCover(){
		$(".pf_cover").remove();
	}
	var remove = setTimeout(pfCover, 4000);

	var hHeight = $("header").outerHeight();
	var fHeight = $("footer").outerHeight();
	$("#container .cont").css("height", $(window).height() - hHeight - fHeight);

	$(".cont dl").on("click", function(){
		$(this).hide();
		$(this).next(".detail_cont").fadeIn(800);
		$("a.btn").css("display","inline-block");
	});
	$(".detail_cont ul li a").attr({
		"target":"_blank",
		"title":"새창열림"
	});

	$("a.btn").on("click", function(){
		$(this).fadeOut(600);
		$(this).parent().fadeOut(600);
		$(this).parent().prev().fadeIn(800);
	});
});