
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Title_BoxHoldCopy}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){top.timerReset();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();sym.getSymbol("login-screen-button").play("waiting");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_login-screen-button}","click",function(sym,e){sym.play("after-login-screen");sym.getSymbol("login-screen-button").stop("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){sym.stop();sym.getSymbol("social-media-hexagon").play("waiting");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_social-media-hexagon}","click",function(sym,e){sym.play("linkedin");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'BG-png-normal'
(function(symbolName){})("BG-png-normal");
//Edge symbol end:'BG-png-normal'

//=========================================================

//Edge symbol: 'login-screen_click-to-continue_button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.play("after-login-screen");});
//Edge binding end
})("login-screen_click-to-continue_button");
//Edge symbol end:'login-screen_click-to-continue_button'

//=========================================================

//Edge symbol: 'login-screen-button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("login-screen-button");
//Edge symbol end:'login-screen-button'

//=========================================================

//Edge symbol: 'social-media-hex'
(function(symbolName){})("social-media-hex");
//Edge symbol end:'social-media-hex'

//=========================================================

//Edge symbol: 'social-media-hexagon'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play("waiting");});
//Edge binding end
})("social-media-hexagon");
//Edge symbol end:'social-media-hexagon'
})(jQuery,AdobeEdge,"EDGE-8632800");