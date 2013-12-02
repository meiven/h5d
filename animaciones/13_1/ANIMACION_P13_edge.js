/**
 * Adobe Edge131: symbol definitions
 */
(function($, Edge131, compId){
//images folder
var im='animaciones/13_1/images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'s1111dynamic',
            type:'image',
            rect:['342px','-169px','477px','807px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"s1.1.1.1.dynamic.png",'0px','0px'],
            transform:[[],[],[],['0.5','0.5']]
         },
         {
            id:'s1121dynamic',
            type:'image',
            rect:['-288px','208px','1291px','1019px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"s1.1.2.1.dynamic.png",'0px','0px'],
            transform:[[],[],[],['0.5','0.5']]
         },
         {
            id:'s1141dynamic',
            type:'image',
            rect:['-58px','24px','399px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"s1.1.4.1.dynamic.png",'0px','0px'],
            transform:[[],[],[],['0.5','0.5']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1024px'],
            ["style", "width", '768px']
         ],
         "${_s1111dynamic}": [
            ["style", "top", '-169px'],
            ["style", "left", '687px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5']
         ],
         "${_s1141dynamic}": [
            ["style", "top", '24px'],
            ["style", "left", '-58px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5']
         ],
         "${_s1121dynamic}": [
            ["style", "top", '208px'],
            ["style", "left", '-288px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: true,
         timeline: [
            { id: "eid1", tween: [ "style", "${_s1121dynamic}", "left", '-288px', { fromValue: '-288px'}], position: 250, duration: 0 },
            { id: "eid4", tween: [ "style", "${_s1121dynamic}", "top", '208px', { fromValue: '-780px'}], position: 250, duration: 750, easing: "easeOutBounce" },
            { id: "eid6", tween: [ "style", "${_s1111dynamic}", "left", '342px', { fromValue: '687px'}], position: 1000, duration: 1500 }         ]
      }
   }
}
};


Edge131.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge131 DOM Ready Event Handler
 */
// $(window).ready(function() {
     // Edge131.launchComposition(compId);
// });
$("#btn_lupa_13_1").on("touchstart", function(){
	$("#animacion_13_1").show();
    Edge131.launchComposition(compId);	
	Edge131.getComposition("VITAMINE_01_02").getStage().play(0);
	setTimeout(function(){
		document.getElementById('audio').play();
	},200);
});

$("#close_13_1").on("touchstart", function(){
	Edge131.getComposition("VITAMINE_01_02").getStage().stop();
	document.getElementById('audio').currentTime = 0;
	document.getElementById('audio').pause();
	$("#animacion_13_1").hide();
});

})(jQuery, AdobeEdge131, "VITAMINE_01_02");
