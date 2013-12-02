
(function($,Edge61,compId){var _=null,y=true,n=false,t='transform',e17='${_TITULO_FONDOCopy}',c='color',x3='rgba(0,0,0,0)',zx='scaleX',e11='${_TITULO_FONDO}',b='block',cl='clip',e15='${_FLECHA}',e19='${_s2121dynamic3}',a='Base State',x14='hidden',dt='Default Timeline',x1='1.5.0',x2='1.5.0.217',i='none',x10='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',p='px',o='opacity',lf='left',e20='${_s2131dynamic}',s='style',x12='rgba(255,255,255,1)',bg='background-color',e16='${_TITULO_FONDOCopy2}',d='display',e18='${_DIBUJO_1}',g='image',w='width',tp='top',ql='linear',ov='overflow',e13='${_Stage}',h='height',x9='stage';var im='animaciones/6_1/images/';var g6='s2.1.3.1.dynamic.png',g7='s1.1.3.1.dynamic.png',g8='s2.1.2.1.dynamic.png',g4='s1.1.2.1.fixed.png',g5='s1.1.2.1.dynamic.png';var fonts={};var P=Edge61.P,T=Edge61.T,A=Edge61.A;var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'TITULO_FONDO',t:g,r:['13px','51px','535px','945px','auto','auto'],cl:['rect(0px 535px 922px 0px)'],f:[x3,im+g4,'0px','0px']},{id:'TITULO_FONDOCopy',v:i,t:g,r:['218px','50px','535px','945px','auto','auto'],cl:['rect(918px 535px 945px 0px)'],f:[x3,im+g4,'0px','0px'],tf:[[],[],[],['-1']]},{id:'TITULO_FONDOCopy2',t:g,r:['218px','50px','535px','945px','auto','auto'],cl:['rect(918px 535px 945px 0px)'],f:[x3,im+g4,'0px','0px'],tf:[[],[],[],['-1']]},{id:'FLECHA',t:g,r:['674px','100px','51px','51px','auto','auto'],f:[x3,im+g5,'0px','0px']},{id:'s2131dynamic',v:i,t:g,r:['669px','102px','52px','51px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'DIBUJO_1',v:i,t:g,r:['57px','286px','636px','561px','auto','auto'],o:1,f:[x3,im+g7,'0px','0px']},{id:'s2121dynamic3',v:i,t:g,r:['56px','272px','636px','596px','auto','auto'],f:[x3,im+g8,'0px','0px']}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2000,a:y,tt:[]}}}};var S1=symbols[x9];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e11).P(tp,51).P(cl,[0,535,922,0],_,x10).P(h,945).P(o,1,_,_,"").P(lf,13,_,_,p).P(w,535);A1.A(e13).P(bg,x12,c).P(w,768).P(h,1024).P(ov,x14);A1.A(e15).P(tp,100).P(h,51).P(lf,674).P(w,51).P(d,b).T(1.25,i).P(o,0,_,_,"").T(0.75,1,0.25,ql).T(1,0,0.25);A1.A(e16).P(tp,50).P(h,945).P(cl,[918,535,945,0],_,x10).P(w,535).P(zx,1,t,_,"").T(1,1).P(o,1).T(1,0,0.25,ql).P(lf,57,_,_,p).T(1,16).P(d,b).T(0,b).T(1.25,i);A1.A(e17).P(tp,50).P(cl,[918,535,945,0],_,x10).P(zx,-1,t,_,"").P(h,945,_,_,p).P(lf,218).P(w,535).P(d,i).T(1,b).P(o,0,_,_,"").T(1,1,0.25,ql);A1.A(e18).P(h,561).P(w,636).P(tp,286).T(0.25,286).T(0.5,286).P(o,1,_,_,"").T(1,0,0.25,ql).P(lf,804,_,_,p).T(0.25,57,0.5).P(d,i).T(0,i).T(0.25,b).T(1.25,i);A1.A(e19).P(tp,272).P(h,596).P(w,636).P(lf,803).T(1.25,56,0.5,ql).P(d,i).T(1.25,b);A1.A(e20).P(tp,102).P(h,51).P(lf,669).P(w,52).P(d,i).T(0,i).T(1.747,b).P(o,0,_,_,"").T(1.747,1,0.25,ql);Edge61.registerCompositionDefn(compId,symbols,fonts,resources);
//$(window).ready(function(){Edge61.launchComposition(compId);});

//$("#btn_accion_6_1").on("click", function(){
$("#btn_accion_6_1").on("touchstart", function(){
	$("#animacion_6_1").show();
	Edge61.launchComposition(compId);	
	Edge61.getComposition("KEYNOTE_PAG6").getStage().play(0);
		
	setTimeout(function(){
	
		//document.getElementById('cancion1').currentTime = 0;
		document.getElementById('cancion1').play();
		// document.getElementById('cancion2').play(0);
		// document.getElementById('cancion2').currentTime = 0;
		// document.getElementById('cancion2').pause();
	},200);
	//Edge61.getComposition("KEYNOTE_PAG6").getStage().load();
	//Edge61.getComposition("KEYNOTE_PAG6").getStage().play();
	// document.getElementById('cancion1').currentTime = 0;
	// document.getElementById('cancion2').currentTime = 0;
	// document.getElementById('cancion1').currentTime.load();
	// document.getElementById('cancion2').currentTime.load();
	animshow = true;
});
$("#close_6_1").on("touchstart", function(){
	Edge61.getComposition("KEYNOTE_PAG6").getStage().stop();
	
	document.getElementById('cancion1').currentTime = 0;
	document.getElementById('cancion2').currentTime = 0;
	document.getElementById('cancion1').pause();
	document.getElementById('cancion2').pause();
	
	$("#animacion_6_1").hide();
	animshow = false;
});
})(jQuery,AdobeEdge61,"KEYNOTE_PAG6");