
var iconSelect="none";var deviceTheft_clicked="false";var cyberCrime_clicked="false";var ppUse_clicked="false";var unsecureData_clicked="false";var beAware_clicked="false";var trustConnection_clicked="false";var cycled="false";(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2168,function(sym,e){if(iconSelect=="unsecureData"){sym.play("scene1_unsecureData");sym.$("scene1_text1").html("Dans la mesure du possible, utilisez un réseau privé virtuel (RPV) pour accroître la sécurité de votre connexion. Communiquez avec la direction des TI de votre ministère ou organisme si vous voyagez souvent. </br></br>Sans chiffrement, tout le monde peut <span style='font-family: GothamMedium;'>accéder aux réseaux publics non sécurisés</span> et <span style='font-family: GothamMedium;'>obtenir les données qu’ils contiennent.</span> Utilisez les RPV pour sécuriser vos sessions de navigation.");}else if(iconSelect=="deviceTheft"){sym.play("scene2_deviceTheft");sym.$("scene1_text1").html("En gardant toujours votre dispositif sur vous, vous prévenez non seulement les vols et les pertes, mais veillez aussi à la confidentialité des renseignements qu’il contient. Minimisez la quantité d’information que vous conservez sur votre dispositif et <span style='font-family: GothamMedium;'>utilisez toujours des mots de passe.</span></br></br><span style='font-family: GothamMedium;'>Évitez de laisser vos dispositifs dans les bagages enregistrés.</span> Si vous devez laisser vos dispositifs sans surveillance, retirez les sources d’alimentation, les disques durs et, le cas échéant, les cartes SIM, puis gardez-les sur vous.");}else if(iconSelect=="cyberCrime"){sym.play("scene3_cyberCrime");sym.$("scene1_text1").html("Le cybercrime est à la hausse. Il affiche une croissance à deux chiffres année après année. </br></br>Protégez votre information et notez qu’il ne faut pas effectuer des transactions bancaires ou toute autre tâche importante en ligne sur un réseau Wi-Fi non sécurisé et non fiable. </br></br>Chaque seconde, <span style='font-family: GothamMedium; font-size:24px;'>18</span> adultes sont victimes d’une cyberintrusion. ");}else if(iconSelect=="ppUse"){sym.play("scene4_ppUse");sym.$("scene1_text1").html("Soyez toujours vigilant lorsque vous utilisez des réseaux inconnus.</br></br>Les réseaux pour lesquels il faut payer ne sont pas synonymes de sécurité. De nombreux réseaux payants ne sont <span style='font-family: GothamMedium;'>pas chiffrés</span> et <span style='font-family: GothamMedium;'>plusieurs personnes</span> peuvent y accéder. Gardez votre dispositif en sécurité en <span style='font-family: GothamMedium;'>évitant les connexions aux réseaux inconnus.</span>");}else if(iconSelect=="beAware"){sym.play("scene5_beAware");sym.$("scene1_text1").html("On entend par piquage d’information la méthode qui vise à recueillir de l’information et qui consiste à épier l’écran d’ouverture de session ou à copier les frappes.<br><br>Un intrus peut...");sym.$("scene1_text2").html("...pour voir de l’information sensible (mots de passe). Les téléphones cellulaires et les téléphones intelligents sont utilisés partout, <span style='font-family: GothamMedium;'>ce qui permet aux voleurs de prendre des photos de cartes de crédit ou d’enregistrer des conversations entières. </span>");}else if(iconSelect=="trustConnection"){sym.play("scene6_trustConnection");sym.$("scene1_text1").html("Les fonctions de chiffrement protègent la confidentialité des données. Si vous utilisez une connexion non chiffrée, tout le monde peut accéder à votre information.");sym.$("scene1_text2").html("Sans chiffrement, <span style='font-family: GothamMedium;'>tout le monde peut accéder à vos activités en ligne.</span> Utilisez une connexion fiable et chiffrée lorsque c’est possible. ");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4250,function(sym,e){sym.stop();unsecureData_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1112,function(sym,e){if(unsecureData_clicked=="true"){var atomSymbol=sym.getSymbol("atom_icon_smb");atomSymbol.play("clicked");}
if(deviceTheft_clicked=="true"){var compSymbol=sym.getSymbol("laptop_icon_smb");compSymbol.play("clicked");}
if(ppUse_clicked=="true"){var wifiSymbol=sym.getSymbol("wifi_icon_smb");wifiSymbol.play("clicked");}
if(beAware_clicked=="true"){var eyeGlassSymb=sym.getSymbol("eyeGlass_icon_smb");eyeGlassSymb.play("clicked");}
if(trustConnection_clicked=="true"){var lockSymbol=sym.getSymbol("unlock_icon_smb");lockSymbol.play("clicked");}
if(cyberCrime_clicked=="true"){var finderSymbol=sym.getSymbol("finder_icon_smb");finderSymbol.play("clicked");}
if(cyberCrime_clicked=="true"&&trustConnection_clicked=="true"&&beAware_clicked=="true"&&ppUse_clicked=="true"&&deviceTheft_clicked=="true"&&unsecureData_clicked=="true"&&cycled=="false"){sym.play("bestPractices");}else if(cyberCrime_clicked=="true"&&trustConnection_clicked=="true"&&beAware_clicked=="true"&&ppUse_clicked=="true"&&deviceTheft_clicked=="true"&&unsecureData_clicked=="true"&&cycled=="true"){sym.stop(1500);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6250,function(sym,e){sym.stop();deviceTheft_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8177,function(sym,e){sym.stop();ppUse_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10217,function(sym,e){sym.stop();cyberCrime_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12427,function(sym,e){sym.stop();beAware_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14733,function(sym,e){sym.stop();trustConnection_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17222,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18684,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20372,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",22500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BTS_icon_groupCopy3}","click",function(sym,e){iconSelect="none";sym.play("BtnScreen");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16000,function(sym,e){cycled="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",26250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17712,function(sym,e){sym.$("BP_IT_TEXTBLOCK").html("<ul><li>S’assurer d’apporter les correctifs et les mises à jour nécessaires aux systèmes d’exploitation et aux applications pour les utilisateurs.</li></br><li>Former les voyageurs afin qu’ils optent pour des points d’accès sans fil qui utilisent des méthodes de chiffrement.</li></br><li>Mettre en œuvre un réseau privé virtuel sur les ordinateurs portatifs pour sécuriser les sessions de navigation des voyageurs.</li></br><li>Communiquer avec l'équipe chargée de la sécurité des TI de son ministère ou organisme pour obtenir d'autres directives avant un voyage.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",19397,function(sym,e){sym.$("BP_IT_TEXTBLOCKCopy2").html("<ul><li>Avant un voyage, minimiser la quantité de renseignements confidentiels contenus dans ses dispositifs.</li></br><li>Utiliser des mots de passe et être toujours conscient de l’environnement immédiat.</li></br><li>Connaître et comprendre les politiques et les procédures de son ministère ou organisme pour savoir comment réagir si un incident de cybersécurité se produit durant un voyage. </li></br><li>Encourager la formation et la sensibilisation de ses employés.</li></br><li>Communiquer avec l'équipe chargée de la sécurité des TI de son ministère ou organisme pour obtenir d'autres directives avant un voyage.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",21500,function(sym,e){sym.$("BP_IT_TEXTBLOCKCopy3").html("<ul><li>Réserver les tâches importantes, comme les transactions bancaires en ligne, pour les réseaux sécurisés.</li></br><li>Utiliser des mots de passe et toujours être conscient de son environnement immédiat.</li></br><li>Toujours utiliser un coupe-feu.</li></br><li>Éviter d’utiliser des réseaux inconnus. Si la connexion à un point d’accès est vraiment nécessaire, sélectionner la configuration d’un réseau public. </li></br><li>Communiquer avec l'équipe chargée de la sécurité des TI de son ministère ou organisme pour obtenir d'autres directives avant un voyage.</li></ul>");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb3}","click",function(sym,e){var touchPoint=sym.getSymbol("laptop_icon_smb");touchPoint.play(1);iconSelect="deviceTheft";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb3Copy}","click",function(sym,e){var touchPoint=sym.getSymbol("wifi_icon_smb");touchPoint.play(1);iconSelect="ppUse";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb3Copy2}","click",function(sym,e){var touchPoint=sym.getSymbol("eyeGlass_icon_smb");touchPoint.play(1);iconSelect="beAware"
sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb3Copy3}","click",function(sym,e){var touchPoint=sym.getSymbol("unlock_icon_smb");touchPoint.play(1);iconSelect="trustConnection";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb3Copy4}","click",function(sym,e){var touchPoint=sym.getSymbol("finder_icon_smb");touchPoint.play(1);iconSelect="cyberCrime";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb3Copy5}","click",function(sym,e){var touchPoint=sym.getSymbol("atom_icon_smb");touchPoint.play(1);iconSelect="unsecureData";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4}","click",function(sym,e){sym.play("BP_ITPract");top.frWifiClickBestPracticeITPractionersClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4Copy}","click",function(sym,e){sym.play("BP_Mana");top.frWifiClickBestPracticeManagersClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4Copy2}","click",function(sym,e){sym.play("BP_Everyone");top.frWifiClickBestPracticeGeneralPublicClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4Copy3}","click",function(sym,e){iconSelect="none";sym.play("BtnScreen");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4Copy4}","click",function(sym,e){window.open("../../../fr_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb5}","click",function(sym,e){sym.play("BP_SkipCrossFade");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb5Copy}","click",function(sym,e){window.open("../../../fr_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb2}","click",function(sym,e){sym.play("BP_SkipCrossFade");top.frWifiClickBestPracticeClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb6}","click",function(sym,e){sym.play("bestPractices");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb6Copy}","click",function(sym,e){iconSelect="none";sym.play("BtnScreen");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){top.timerReset();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){parent.showClose();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'eyeGlass_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
})("eyeGlass_icon_smb");
//Edge symbol end:'eyeGlass_icon_smb'

//=========================================================

//Edge symbol: 'unlock_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("unlock_icon_smb");
//Edge symbol end:'unlock_icon_smb'

//=========================================================

//Edge symbol: 'atom_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("atom_icon_smb");
//Edge symbol end:'atom_icon_smb'

//=========================================================

//Edge symbol: 'wifi_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
})("wifi_icon_smb");
//Edge symbol end:'wifi_icon_smb'

//=========================================================

//Edge symbol: 'laptop_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
})("laptop_icon_smb");
//Edge symbol end:'laptop_icon_smb'

//=========================================================

//Edge symbol: 'finder_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("finder_icon_smb");
//Edge symbol end:'finder_icon_smb'

//=========================================================

//Edge symbol: 'sceneExit_btn_smb'
(function(symbolName){})("sceneExit_btn_smb");
//Edge symbol end:'sceneExit_btn_smb'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'TouchPoint_smb'
(function(symbolName){})("TouchPoint_smb");
//Edge symbol end:'TouchPoint_smb'

//=========================================================

//Edge symbol: 'Bright_Background_smb'
(function(symbolName){})("Bright_Background_smb");
//Edge symbol end:'Bright_Background_smb'
})(jQuery,AdobeEdge,"EDGE-21219353");