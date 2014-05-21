
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chooseEnglish_btn_smb}","click",function(sym,e){window.open("../../../en_main-menu.html","contentContainer");top.enMenu();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chooseFrench_btn_smb}","click",function(sym,e){window.open("../../../fr_main-menu.html","contentContainer");top.frMenu();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'English'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){window.top.enMenu();window.open("../../../en_main-menu.html","contentContainer");});
//Edge binding end
})("en-btn");
//Edge symbol end:'en-btn'

//=========================================================

//Edge symbol: 'fr-btn'
(function(symbolName){})("fr-btn");
//Edge symbol end:'fr-btn'

//=========================================================

//Edge symbol: 'chooseEnglish_btn_smb'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){window.top.enMenu();window.open("../../../en_main-menu.html","contentContainer");});
//Edge binding end
})("chooseEnglish_btn_smb");
//Edge symbol end:'chooseEnglish_btn_smb'

//=========================================================

//Edge symbol: 'chooseFrench_btn_smb'
(function(symbolName){})("chooseFrench_btn_smb");
//Edge symbol end:'chooseFrench_btn_smb'
})(jQuery,AdobeEdge,"EDGE-62071296");