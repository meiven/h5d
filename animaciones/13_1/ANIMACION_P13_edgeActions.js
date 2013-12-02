/***********************
* Acciones de composición de Adobe Edge131 Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge131" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge131 Animate
*
***********************/
(function($, Edge131, compId){
var Composition = Edge131.Composition, Symbol = Edge131.Symbol; // los alias más comunes para las clases de Edge131

   //Edge131 symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var comp = Edge131.getComposition("VITAMINE_01_02");
         var stage = comp.getStage();
         $(stage.lookupSelector("stage")).append("<audio src='animaciones/13_1/media/audio.mp3' id='audio' />");
         

      });
      //Edge131 binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         document.getElementById('audio').play();

      });
      //Edge131 binding end

   })("stage");
   //Edge131 symbol end:'stage'

})(jQuery, AdobeEdge131, "VITAMINE_01_02");