
var iconSelect="none";var deviceTheft_clicked="false";var cyberCrime_clicked="false";var ppUse_clicked="false";var unsecureData_clicked="false";var beAware_clicked="false";var trustConnection_clicked="false";var cycled="false";var scrollPos="left";var bestPractPos="none";(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2168,function(sym,e){if(iconSelect=="scene5"){sym.play("scene1_welcomeHome");sym.$("scene1_text2").html("Avez-vous constaté des anomalies suspectes liées aux TI? En cas de doute, communiquez avec la direction des TI de votre ministère ou organisme. Ne connectez aucun dispositif étranger au réseau de votre ministère ou organisme.");}else if(iconSelect=="scene2"){sym.play("scene2_foreignInterest");sym.$("scene1_text1").html("Soyez vigilant lorsque vous voyagez à l’étranger pour affaires, car les autorités du pays concerné peuvent s’intéresser à vous en raison de votre citoyenneté. En prévision de votre voyage, communiquez avec la direction des TI ou l’équipe chargée de la sécurité interne de votre ministère ou organisme.</br></br>Lorsque vous entrez dans un pays étranger, <span style='font-family: GothamMedium;'>votre passeport est lu par un lecteur, avisant ainsi les autorités de votre présence.</span> Sollicitez l’aide de l’ambassade du Canada en cas de problèmes de sécurité se produisant pendant un voyage à l’étranger (www.voyage.gc.ca).");}else if(iconSelect=="scene1"){sym.play("scene3_freeGadgets");sym.$("scene1_text1").html("Les clés USB peuvent contenir des programmes malveillants. Méfiez-vous des gadgets technologiques gratuits.");sym.$("scene1_text2").html("...contiennent des programmes malveillants, des maliciels et des logiciels espions. N’utilisez pas ces dispositifs de stockage. <span style='font-family: GothamMedium;'>Évitez d’utiliser votre propre clé USB dans un ordinateur d’un autre pays.</span>");}else if(iconSelect=="scene4"){sym.play("scene4_protectDevice");sym.$("scene1_text1").html("Les dispositifs mobiles représentent des cibles de choix pour les voleurs. Gardez‑les toujours sur vous et minimisez la quantité d’information qu’ils contiennent. Protégez toujours vos dispositifs par un mot de passe. S’ils sont volés, l’information qu’ils contiennent pourrait être accessible et utilisée à des fins malveillantes. Des acteurs malveillants pourraient...");sym.$("scene1_text2").html("Dans une zone à risque élevé, n’utilisez pas le dispositif professionnel dont <span style='font-family: GothamMedium;'>vous vous servez habituellement ni vos dispositifs personnels.</span> Communiquez avec la direction des TI de votre ministère ou organisme pour demander un dispositif autorisé pour les voyages.");}else if(iconSelect=="scene3"){sym.play("scene5_target");sym.$("scene1_text2").html("Les personnes occupant des postes de cadres supérieurs ou celles détenant des droits d’accès uniques risquent plus d’être ciblées que les autres employés. Ne remettez vos pièces d’identité que si le principe du besoin de connaître s’applique.");}else if(iconSelect=="scene6"){sym.play("scene6_internetAbroad");sym.$("scene1_text1").html("Soyez vigilant lorsque vous vous connectez à Internet dans un pays étranger, car la connexion peut présenter des vulnérabilités.</br></br>Évitez d’accomplir des tâches de nature sensible à l’étranger. Tenez pour acquis que toutes les connexions réseau font l’objet de surveillance. <span style='font-family: GothamMedium;'>N’utilisez pas de réseaux Wi-Fi publics.</span> Si vous devez absolument le faire, sélectionnez la configuration d’un réseau public au lieu d’un réseau personnel ou professionnel.");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4250,function(sym,e){sym.stop();unsecureData_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1112,function(sym,e){if(unsecureData_clicked=="true"){var eyeGlassSymb=sym.getSymbol("eyeGlass_icon_smb");eyeGlassSymb.play("clicked");}
if(deviceTheft_clicked=="true"){var compSymbol=sym.getSymbol("laptop_icon_smb");compSymbol.play("clicked");}
if(ppUse_clicked=="true"){var wifiSymbol=sym.getSymbol("wifi_icon_smb");wifiSymbol.play("clicked");}
if(beAware_clicked=="true"){var finderSymbol=sym.getSymbol("finder_icon_smb");finderSymbol.play("clicked");}
if(trustConnection_clicked=="true"){var lockSymbol=sym.getSymbol("unlock_icon_smb");lockSymbol.play("clicked");}
if(cyberCrime_clicked=="true"){var atomSymbol=sym.getSymbol("atom_icon_smb");atomSymbol.play("clicked");}
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
Symbol.bindElementAction(compId,symbolName,"${_ViewBestPractices_text}","click",function(sym,e){sym.play("BP_SkipCrossFade");top.frTravelBestPracticesClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_exit_icon_groupCopy5}","click",function(sym,e){window.open("../../../en_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_slider_smb_right}","click",function(sym,e){var scrolltextBox=sym.getSymbol("BestPractices_ScrollingText");var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");if(scrollPos=="left"){scrollText_smb_left.play("clicked");scrollText_smb_right.play("unclick");if(bestPractPos=="pract"){scrolltextBox.play("secondPos");}else if(bestPractPos=="mana"){scrolltextBox.play("secondPos_Mana");}else if(bestPractPos=="every"){scrolltextBox.play("secondPos_Every");}
scrollPos="right";}else{}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_slider_smb_left}","click",function(sym,e){var scrolltextBox=sym.getSymbol("BestPractices_ScrollingText");var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");if(scrollPos=="right"){scrollText_smb_left.play("unclick");scrollText_smb_right.play("clicked");if(bestPractPos=="pract"){scrolltextBox.play("startingPos");}else if(bestPractPos=="mana"){scrolltextBox.play("startingPos_Mana");}else if(bestPractPos=="every"){scrolltextBox.play("startingPos_Every");}
scrollPos="left";}else{}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17712,function(sym,e){var startTextBoxSymb=sym.getSymbol("BestPractices_ScrollingText");startTextBoxSymb.play("startingPos");bestPractPos="pract";var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");scrollText_smb_left.play("unclick");scrollText_smb_right.play("clicked");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",19400,function(sym,e){var startTextBoxSymb=sym.getSymbol("BestPractices_ScrollingText");startTextBoxSymb.play("startingPos_Mana");bestPractPos="mana";var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");scrollText_smb_left.play("unclick");scrollText_smb_right.play("clicked");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",21500,function(sym,e){var startTextBoxSymb=sym.getSymbol("BestPractices_ScrollingText");startTextBoxSymb.play("startingPos_Every");bestPractPos="every";var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");scrollText_smb_left.play("unclick");scrollText_smb_right.play("clicked");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb2}","click",function(sym,e){var touchPoint=sym.getSymbol("wifi_icon_smb");touchPoint.play(1);iconSelect="scene4";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb2Copy}","click",function(sym,e){var touchPoint=sym.getSymbol("unlock_icon_smb");touchPoint.play(1);iconSelect="scene6";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb2Copy2}","click",function(sym,e){var touchPoint=sym.getSymbol("atom_icon_smb");touchPoint.play(1);iconSelect="scene1";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb2Copy3}","click",function(sym,e){var touchPoint=sym.getSymbol("laptop_icon_smb");touchPoint.play(1);iconSelect="scene2";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb2Copy4}","click",function(sym,e){var touchPoint=sym.getSymbol("eyeGlass_icon_smb");touchPoint.play(1);iconSelect="scene5"
sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb2Copy5}","click",function(sym,e){var touchPoint=sym.getSymbol("finder_icon_smb");touchPoint.play(1);iconSelect="scene3";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb3}","click",function(sym,e){sym.play("bestPractices");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb3Copy}","click",function(sym,e){sym.play("BP_SkipCrossFade");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4}","click",function(sym,e){bestPractPos="pract";sym.play("BP_ITPract");top.frTravelBestPracticeITPractionersClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4Copy}","click",function(sym,e){bestPractPos="mana";sym.play("BP_Mana");top.frTravelPracticeManagersClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4Copy2}","click",function(sym,e){bestPractPos="every";sym.play("BP_Everyone");top.frTravelPracticeGeneralPublicClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4Copy3}","click",function(sym,e){iconSelect="none";sym.play("BtnScreen");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4Copy4}","click",function(sym,e){window.open("../../../fr_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb5}","click",function(sym,e){sym.play("BP_SkipCrossFade");var startTextBoxSymb=sym.getSymbol("BestPractices_ScrollingText");startTextBoxSymb.play("startingPos");startTextBoxSymb.play("startingPos_Mana");startTextBoxSymb.play("startingPos_Every");bestPractPos="none";var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");scrollText_smb_left.play("unclick");scrollText_smb_right.play("clicked");scrollPos="left";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb5Copy}","click",function(sym,e){window.open("../../../fr_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){top.timerReset();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb3Copy2}","click",function(sym,e){sym.play("BtnScreen");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){});
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

//Edge symbol: 'BestPractices_ScrollingText'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Installer un coupe-feu de même que les versions les plus récentes des logiciels antivirus, des anti-logiciels espions et des correctifs de sécurité du système d’exploitation, et prendre des mesures qui empêchent l’utilisateur de désactiver ces fonctions.</li></br><li>Configurer les dispositifs de manière à ce qu’ils lancent un logiciel antivirus au moment d’accéder à des dispositifs de stockage (p. ex. une clé USB), puis expliquer les procédures au voyageur.</li></br><li>Limiter les privilèges administratifs et veiller à ce que le voyageur mette à jour ses mots de passe avant et après le voyage.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",626,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>S’assurer que les paramètres de sécurité réseau qui conviennent sont mis en œuvre sur les dispositifs comme les ordinateurs portatifs.</li></br><li>S’assurer que les dispositifs mobiles, comme les ordinateurs portatifs, ne peuvent pas se connecter à Internet au moment où l’utilisateur accède au réseau interne de son ministère ou organisme.</li></br><li>S’assurer que les paramètres de sécurité adéquats sont mis en œuvre pour accéder à des réseaux privés virtuels.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1268,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Si un gestionnaire ou l’un de ses employés prévoit se rendre dans une zone à risque élevé, il doit communiquer avec la direction des TI de son ministère ou organisme pour obtenir des conseils avant le voyage et demander un dispositif autorisé pour les voyages.</li></br><li>Songer aux répercussions qu’engendrerait l’accès par un acteur de menace à de l’information contenue dans des dispositifs mobiles. Avant le voyage, s’assurer de sauvegarder ses données et de supprimer les fichiers inutiles.</li></br><li>Passer en revue les politiques et les procédures de son ministère ou organisme au cas où un incident de sécurité se produirait durant le voyage.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1925,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Communiquer avec l’équipe chargée de la sécurité des TI pour en savoir plus sur la manière dont le gestionnaire ou le ministère ou organisme concerné pourrait se préparer en cas de risques de sécurité pendant un voyage à l’étranger.</li></br><li>Solliciter l’aide de l’ambassade du Canada en cas de problèmes de sécurité se produisant pendant un voyage à l’étranger (www.voyage.gc.ca).</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2872,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Mettre à jour ses mots de passe avant et après le voyage.</li></br><li>Sauvegarder les données importantes avant son voyage et supprimer l’information inutile de ses dispositifs.</li></br><li>Désactiver les fonctions semblables à Bluetooth et les capacités de casque d’écoute sans fil pendant le voyage.</li></br><li>Toujours garder sur soi son dispositif durant le voyage. S’il faut le laisser sans surveillance, retirer la pile et, le cas échéant, la carte SIM, puis les garder sur soi.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3750,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Être conscient de son environnement immédiat lorsque l’on utilise des dispositifs en public. Protéger son écran ou son clavier contre les regards indiscrets lorsque l’on travaille avec de l’information sensible et mettre fin à la connexion lorsque l’on a terminé.</li></br><li>Signaler tout problème suspect dès que possible à la direction des TI de son ministère ou organisme.</li></ul>");});
//Edge binding end
})("BestPractices_ScrollingText");
//Edge symbol end:'BestPractices_ScrollingText'

//=========================================================

//=========================================================

//Edge symbol: 'arrow_slider_smb'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_Icon_cirlce}","click",function(sym,e){var scrollText=sym.getSymbol("scrollingTextBox_smb");scrollText.play("secondPos");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",154,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7089,function(sym,e){sym.stop();});
//Edge binding end
})("arrow_slider_smb");
//Edge symbol end:'arrow_slider_smb'

//=========================================================

//Edge symbol: 'touchpoints_smb'
(function(symbolName){})("touchpoints_smb");
//Edge symbol end:'touchpoints_smb'

//=========================================================

//Edge symbol: 'HotelBackground_SMB'
(function(symbolName){})("HotelBackground_SMB");
//Edge symbol end:'HotelBackground_SMB'
})(jQuery,AdobeEdge,"EDGE-21219353");