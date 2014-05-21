
var toggleMainMenu="false";(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1480,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","touchend",function(sym,e){top.timerReset();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_surveyIcon_smb}","click",function(sym,e){window.open("../../../fr_survey.html","contentContainer");top.frMenuSurveyClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_quizIcon_smb}","click",function(sym,e){window.open("../../../fr_interactiveQuiz.html","contentContainer");top.frMenuQuizClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_scenarioIcon2}","click",function(sym,e){if(toggleMainMenu=="false"){toggleMainMenu="true";sym.play();}else if(toggleMainMenu=="true"){toggleMainMenu="false";sym.playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_subIcon2_label_smb}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotel-button}","click",function(sym,e){window.open("../../../fr_hotel_sequence.html","contentContainer");top.frMenuTravelClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_social-media-button}","click",function(sym,e){window.open("../../../fr_social-media_sequence.html","contentContainer");top.frMenuSocialMediaClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_airport-button}","click",function(sym,e){window.open("../../../fr_airport_sequence.html","contentContainer");top.frMenuWifiClick();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'scenarioIcon'
(function(symbolName){})("scenarioIcon_smb");
//Edge symbol end:'scenarioIcon_smb'

//=========================================================

//Edge symbol: 'servicesIcon_smb'
(function(symbolName){})("servicesIcon_smb");
//Edge symbol end:'servicesIcon_smb'

//=========================================================

//Edge symbol: 'quizIcon_smb'
(function(symbolName){})("quizIcon_smb");
//Edge symbol end:'quizIcon_smb'

//=========================================================

//Edge symbol: 'surveyIcon_smb'
(function(symbolName){})("surveyIcon_smb");
//Edge symbol end:'surveyIcon_smb'

//=========================================================

//Edge symbol: 'subIcon3_label'
(function(symbolName){})("subIcon3_label_smb");
//Edge symbol end:'subIcon3_label_smb'

//=========================================================

//Edge symbol: 'subIcon2_label_smb'
(function(symbolName){})("subIcon2_label_smb");
//Edge symbol end:'subIcon2_label_smb'

//=========================================================

//Edge symbol: 'subIcon1_label_smb'
(function(symbolName){})("subIcon1_label_smb");
//Edge symbol end:'subIcon1_label_smb'

//=========================================================

//Edge symbol: 'scene-title'
(function(symbolName){})("scene-title");
//Edge symbol end:'scene-title'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-2548275");