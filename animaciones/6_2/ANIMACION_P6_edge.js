/**
 * Adobe Edge62: symbol definitions
 */
(function($, Edge62, compId){
//images folder
var im='animaciones/6_2/images_62/';

var fonts = {};


var resources = [
];
var symbols = {
"stage62": {
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
            rect:['62px','206px','169px','71px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"s1.1.1.1.dynamic.png",'0px','0px']
         },
         {
            id:'s1121dynamic',
            type:'image',
            rect:['278px','514px','422px','453px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"s1.1.2.1.dynamic.png",'0px','0px']
         },
         {
            id:'s1131dynamic',
            type:'image',
            rect:['269px','65px','447px','443px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"s1.1.3.1.dynamic.png",'0px','0px']
         },
         {
            id:'s1141dynamic',
            type:'image',
            rect:['36px','50px','222px','129px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"s1.1.4.1.dynamic.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_s1131dynamic}": [
            ["style", "height", '443px'],
            ["style", "top", '61px'],
            ["style", "left", '868px'],
            ["style", "width", '447px']
         ],
         "${_s1141dynamic}": [
            ["style", "top", '50px'],
            ["transform", "scaleY", '0'],
            ["style", "height", '129px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '36px'],
            ["style", "width", '222px']
         ],
         "${_s1121dynamic}": [
            ["style", "height", '453px'],
            ["style", "top", '510px'],
            ["style", "left", '877px'],
            ["style", "width", '422px']
         ],
         "${_Stage62}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '768px'],
            ["style", "height", '1024px'],
            ["style", "overflow", 'hidden']
         ],
         "${_s1111dynamic}": [
            ["style", "top", '206px'],
            ["style", "height", '71px'],
            ["style", "left", '62px'],
            ["style", "width", '169px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_s1131dynamic}", "top", '65px', { fromValue: '61px'}], position: 750, duration: 750 },
            { id: "eid17", tween: [ "style", "${_s1131dynamic}", "left", '269px', { fromValue: '868px'}], position: 750, duration: 750 },
            { id: "eid6", tween: [ "transform", "${_s1141dynamic}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 500 },
            { id: "eid20", tween: [ "style", "${_s1121dynamic}", "top", '514px', { fromValue: '510px'}], position: 1500, duration: 750 },
            { id: "eid19", tween: [ "style", "${_s1121dynamic}", "left", '278px', { fromValue: '877px'}], position: 1500, duration: 750 },
            { id: "eid5", tween: [ "transform", "${_s1141dynamic}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 500 }         ]
      }
   }
}
};


Edge62.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge62 DOM Ready Event Handler
 */
// $(window).ready(function() {
     // Edge62.launchComposition(compId);
// });
$("#btn_lupa_6_1").on("touchstart", function(){
	$("#animacion_6_2").show();
    Edge62.launchComposition(compId);	
	Edge62.getComposition("VITAMINE_01_01").getStage62().play(0);
	animshow = true;
});
$("#close_6_2").on("touchstart", function(){
	Edge62.getComposition("VITAMINE_01_01").getStage62().stop();
	$("#animacion_6_2").hide();
	animshow = false;
});
})(jQuery, AdobeEdge62, "VITAMINE_01_01");
