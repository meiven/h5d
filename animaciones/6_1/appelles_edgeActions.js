
(function($,Edge61,compId){var Composition=Edge61.Composition,Symbol=Edge61.Symbol;
//Edge61 symbol: 'stage'

(function(symbolName){

	Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){
		var comp=Edge61.getComposition("KEYNOTE_PAG6");
		var stage=comp.getStage();
		$(stage.lookupSelector("stage")).append("<audio id='cancion1'><source src='animaciones/6_1/media/movie.1.mp3'><source src='animaciones/6_1/media/movie.1.m4a'></audio>");
		$(stage.lookupSelector("stage")).append("<audio id='cancion2'><source src='animaciones/6_1/media/movie.2.mp3'><source src='animaciones/6_1/media/movie.2.m4a'></audio>");
	});
	
//Edge61 binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){
	sym.stop();
	setTimeout(function(){
		document.getElementById("cancion1").play();
	}, 200);
	document.getElementById("cancion2").pause();
});
//Edge61 binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){
	sym.stop();
	setTimeout(function(){
		document.getElementById('cancion2').play();
	}, 200);
});
//Edge61 binding end
Symbol.bindElementAction(compId,symbolName,"${_DIBUJO_1}","click",function(sym,e){});
//Edge61 binding end
Symbol.bindElementAction(compId,symbolName,"${_s2131dynamic}","click",function(sym,e){
	document.getElementById("cancion1").pause();
	document.getElementById("cancion2").pause();
	document.getElementById("cancion1").currentTime = 0;
	document.getElementById("cancion2").currentTime = 0;
	sym.play(0);
});
//Edge61 binding end

Symbol.bindElementAction(compId,symbolName,"${_FLECHA}","click",function(sym,e){
	document.getElementById("cancion1").pause();
	sym.play();
	setTimeout(function(){
		document.getElementById('cancion2').play();
	}, 200);
});

//Edge61 binding end
})("stage");
//Edge61 symbol end:'stage'
})(jQuery,AdobeEdge61,"KEYNOTE_PAG6");
