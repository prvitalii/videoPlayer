$(document).ready(function(){
	console.log("let's start");
	
	respOnBtn();
	setInterval(showTimeLap, 100);
	// var playBtn = $(".btn[data-val=play]");

});

function showTimeLap(){
	var video = document.getElementById("video");
	$("#timeLap").text((video.currentTime).toFixed(2));
	var scroll = document.getElementById("scroll");
	scroll.value = parseInt(video.currentTime);
}

function respOnBtn(){
	var playBtn = $(".controls div:nth-child(2)"),
		stopBtn = $(".controls div:nth-child(3)"),
		backBtn = $(".controls div:nth-child(4)"),
		forwBtn = $(".controls div:nth-child(5)"),
		scroll = document.getElementById("scroll"),
		video = document.getElementById("video"),
		flag = true,
		step = 15;

	$(".controls").hover(function(){
		$(this).css("opacity", 1);
	},function(){
		$(this).css("opacity", 0.5);
	});
	/*$("#video").hover(function(){
		$(".controls").css("opacity", 1);
	},function(){
		$(".controls").css("opacity", 0.5);
	});*/
	playBtn.click(function(){
		if(flag === true){
			video.play();
			playBtn.html("<i class='fa fa-pause'></i>")
			flag = false;

		} else {
			video.pause();
			playBtn.html("<i class='fa fa-play'></i>")
			flag = true;
		}
	});
	stopBtn.click(function(){
		video.currentTime = 0;
	});
	backBtn.click(function(){
		var timeBack = video.currentTime - 15;
		video.currentTime = timeBack; 

	});
	forwBtn.click(function(){
		var timeForw = video.currentTime + 15;
		video.currentTime = timeForw; 
	});

	video.currentTime = scroll.value;
	scroll.oninput = function() {
				video.currentTime = this.value;
				$("#timeLap").text(this.value);
		}
}