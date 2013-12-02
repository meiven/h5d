window.onload = function() {
	var mySwiper = new Swiper('.swiper-container',{
		mode:'horizontal',
		loop: false
	});  
	setTimeout(function(){window.scrollTo(0,1);},1);
	justclosed = false;
}

scaleedge(2);
function scaleedge(iz){
	$(".edge").css({
		"transform": "scale("+iz+")", 
		"-webkit-transform": "scale("+iz+")",
		"-webkit-transform-origin": "0 0",
		"-moz-transform": "scale("+iz+")",
		"-moz-transform-origin": "0 0", 
	});
}

$(window).on("dblclick", function(e){ e.preventDefault(); e.stopPropagation(); });


//**************** hoja 6 **************************

$("#animacion_6_1").hide();
$("#animacion_6_2").hide();

$("#transcription_6_1").on('touchstart', function(){
	$("#transcription_6_1").toggleClass("active");
	if (! ($("#transcriptionbox_6_1").css('display') == 'none')){
		$("#transcriptionbox_6_1").hide();
		justclosed = true;
	}
});
$("#transcription_6_1").on('touchend', function(){
	$("#transcription_6_1").toggleClass("active");
	if (!justclosed && $("#transcriptionbox_6_1").css('display') == 'none') $("#transcriptionbox_6_1").fadeIn(100);
	justclosed = false;
});

$("#btn_audio_6_1").on('touchstart touchend', function(){
	$("#btn_audio_6_1").toggleClass("active");
});
$("#btn_audio_6_1").on('touchend', function(){
	(audio_6_1a.paused) ? audio_6_1a.play() : audio_6_1a.pause();
	$("#btn_audio_6_1").toggleClass("on");
});

$("#audiobar_6_1").on('touchstart', function(){
	$("#audiobar_6_1").toggleClass("active");
	var aud = document.getElementById('audio_6_1b');
	(aud.paused) ? aud.play() : aud.pause();
});

$("#audio_6_1b").on("pause", function(){
	console.log("pause");
	notseek = setTimeout(function(){
		audio_6_1b.onpause = $("#audiobar_6_1").show();
		audio_6_1b.onpause = $("#audio_6_1b").hide();
	}, 30);
});
$("#audio_6_1b").on("seeking", function(){
	console.log("seeking");
	clearTimeout(notseek);
});



//**************** hoja 13 **************************

$("#transcription_13_1").on('touchstart', function(){
	$("#transcription_13_1").toggleClass("active");
	if (! ($("#transcriptionbox_13_1").css('display') == 'none')){
		$("#transcriptionbox_13_1").hide();
		justclosed = true;
	}
});
$("#transcription_13_1").on('touchend', function(){
	$("#transcription_13_1").toggleClass("active");
	if (!justclosed && $("#transcriptionbox_13_1").css('display') == 'none') $("#transcriptionbox_13_1").fadeIn(100);
	justclosed = false;
});

$("#btn_audio_13_1").on('touchstart touchend', function(){
	$("#btn_audio_13_1").toggleClass("active");
});
$("#btn_audio_13_1").on('touchend', function(){
	(audio_13_1a.paused) ? audio_13_1a.play() : audio_13_1a.pause();
	$("#btn_audio_13_1").toggleClass("on");
});

$("#audiobar_13_1").on('touchstart', function(){
	$("#audiobar_13_1").toggleClass("active");
	var aud = document.getElementById('audio_13_1b');
	(aud.paused) ? aud.play() : aud.pause();
});
$("#audio_13_1b").on("pause", function(){
	notseek = setTimeout(function(){
		audio_13_1b.onpause = $("#audiobar_13_1").show();
		audio_13_1b.onpause = $("#audio_13_1b").hide();
	}, 30);
});
$("#audio_13_1b").on("seeking", function(){
	console.log("seeking");
	clearTimeout(notseek);
});

$("#btn_audio_13_2").on('touchstart touchend', function(){
	$("#btn_audio_13_2").toggleClass("active");
});
$("#btn_audio_13_2").on('touchend', function(){
	(audio_13_2a.paused) ? audio_13_2a.play() : audio_13_2a.pause();
	$("#btn_audio_13_2").toggleClass("on");
});

$("#btn_audio_13_3").on('touchstart touchend', function(){
	$("#btn_audio_13_3").toggleClass("active");
});
$("#btn_audio_13_3").on('touchend', function(){
	(audio_13_3a.paused) ? audio_13_3a.play() : audio_13_3a.pause();
	$("#btn_audio_13_3").toggleClass("on");
});

$("#audiobar_13_3").on('touchstart', function(){
	$("#audiobar_13_3").toggleClass("active");
	var aud = document.getElementById('audio_13_3b');
	(aud.paused) ? aud.play() : aud.pause();
});
$("#audio_13_3b").on("pause", function(){
	console.log("pause");
	notseek = setTimeout(function(){
		audio_13_3b.onpause = $("#audiobar_13_3").show();
		audio_13_3b.onpause = $("#audio_13_3b").hide();
	}, 30);
});
$("#audio_13_3b").on("seeking", function(){
	console.log("seeking");
	clearTimeout(notseek);
});

$("#btn_audio_13_4").on('touchstart touchend', function(){
	$("#btn_audio_13_4").toggleClass("active");
});
$("#btn_audio_13_4").on('touchend', function(){
	(audio_13_4a.paused) ? audio_13_4a.play() : audio_13_4a.pause();
	$("#btn_audio_13_4").toggleClass("on");
});

//seeking
$("#audiobar_13_4").on('touchstart', function(){
	$("#audiobar_13_4").toggleClass("active");
	var aud = document.getElementById('audio_13_4b');
	if (aud.paused){
		aud.play();
	} else {
		notseek = setTimeout(function(){aud.pause();}, 30);
	}
});
$("#audio_13_4b").on("seeking", function(){
	clearTimeout(notseek);
});

$("#animacion_13_1").hide();

$("#btn_video_13_1").on("click", function(){
	$("#video_13_1_container").show();
	$("#video_13_1").show();
	document.getElementById("video_13_1").play(0);
});
$("#video_13_1").on("pause", function(){
	notseek = setTimeout(function(){
		document.getElementById('video_13_1').currentTime = 0;
		$("#video_13_1_container").hide();
		$("#video_13_1").hide();
	}, 30);
});
$("#video_13_1").on("seeking", function(){
	clearTimeout(notseek);
});
$("#video_13_1").on("waiting", function(){
	clearTimeout(notseek);
});
$("#close_13_video").on("touchstart", function(){
	document.getElementById("video_13_1").pause();
	document.getElementById('video_13_1').currentTime = 0;
	$("#video_13_1_container").hide();
	$("#video_13_1").hide();
});

