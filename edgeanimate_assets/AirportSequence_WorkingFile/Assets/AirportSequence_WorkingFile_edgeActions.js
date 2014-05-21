
var iconSelect="none";var deviceTheft_clicked="false";var cyberCrime_clicked="false";var ppUse_clicked="false";var unsecureData_clicked="false";var beAware_clicked="false";var trustConnection_clicked="false";var cycled="false";(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2168,function(sym,e){if(iconSelect=="unsecureData"){sym.play("scene1_unsecureData");sym.$("scene1_text1").html("When possible, use a Virtual Private Network (VPN) increase the security of your connection.  Talk to your IT Department if you travel frequently.</br></br>Without encryption, others can <span style='font-family: GothamMedium;'>access your unsecured public network</span> and <span style='font-family: GothamMedium;'>access data traveling through it.</span> Use Virtual Private Networks (VPNs) to increase the security of your connection.");}else if(iconSelect=="deviceTheft"){sym.play("scene2_deviceTheft");sym.$("scene1_text1").html("Keep your device on you at all times to prevent theft and loss and to protect the confidentiality of information stored on the device.  Minimize the amount of information you store on the device and <span style='font-family: GothamMedium;'>always use passwords.</span></br></br><span style='font-family: GothamMedium;'>Avoid leaving devices in checked baggage.</span> If you must leave them unattended, remove power sources, hard drives, and SIM cards (when applicable) and keep them with you.");}else if(iconSelect=="cyberCrime"){sym.play("scene3_cyberCrime");sym.$("scene1_text1").html("Cyber Crime is on the rise and has shown double-digit growth year after year.</br></br>Every second, <span style='font-family: GothamMedium; font-size:30px;'>18</span> adults become victims of a cyber crime incident.</br></br>Protect your information and understand that important tasks, such as online banking, should not be conducted on unsecured and untrusted Wi-Fi connections.");}else if(iconSelect=="ppUse"){sym.play("scene4_ppUse");sym.$("scene1_text1").html("Always use caution when using unknown networks. </br></br>Paying for a network doesn’t mean it is safe. Many paid networks are <span style='font-family: GothamMedium;'>unencrypted</span> and are accessed by <span style='font-family: GothamMedium;'>multiple people.</span> Keep your device secure by <span style='font-family: GothamMedium;'>avoiding untrusted network connections.</span>");}else if(iconSelect=="beAware"){sym.play("scene5_beAware");sym.$("scene1_text1").html("Shoulder surfing is a term used to describe the activity of physical lurking with the intent of gathering information by watching your login screen and/or copying your keystrokes.</br></br>An intruder can simply...");sym.$("scene1_text2").html("...to obtain access to sensitive information (e.g. passwords). With cellphones and smartphones in use everywhere, <span style='font-family: GothamMedium;'>thieves can snap pictures of credit cards</span> or <span style='font-family: GothamMedium;'>record entire conversations.</span>");}else if(iconSelect=="trustConnection"){sym.play("scene6_trustConnection");sym.$("scene1_text1").html("Encryption protects the  confidentiality of data.  If you are using an unencrypted connection, your information is open for all to see. </br></br>Encryption transforms...");sym.$("scene1_text2").html("Without encryption, your online activities are <span style='font-family: GothamMedium;'>open for all to see.</span> Whenever possible, ensure you use a trusted and encrypted connection to secure your internet access.");}});
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
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17712,function(sym,e){sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Ensure that operating systems and applications are patched and updated for end users.</li><br><li>Raise awareness of common computing risks, including the risks associated with Hot Spots.</li><br><li>Educate travelers to choose a Wi-Fi Hot Spot that uses some form of encryption.</li><br><li>Contact your IT Security team for additional guidance before travelling.</li><br><li>Implement a Virtual Private Network (VPN) on laptop computers to secure travelers’ browsing sessions.</li><br><li>Know and understand your departmental policy and procedures and identify the appropriate steps you should follow should a cyber security incident occur while you are traveling. </li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",19397,function(sym,e){sym.$("BP_IT_TEXTBLOCKCopy2").html("<ul><li>Prior to travel, minimize the amount of data on your devices.</li><br><li>Use passwords and always be aware of your surroundings.</li><br><li>Contact your IT Security team for additional guidance prior to traveling.</li><br><li>Know and understand your departmental policy and procedures and identify the appropriate steps you should follow should a cyber security incident occur while you are traveling. </li><br><li>Encourage training and awareness for your employees.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",21500,function(sym,e){sym.$("BP_IT_TEXTBLOCKCopy3").html("<ul><li>Save important tasks, like online banking, for secure networks.</li><br><li>Use passwords and always be aware of your surroundings.</li><br><li>Contact your IT Security team for additional guidance before travelling.</li><br><li>Avoid using unknown networks, and if you must connect to a Hot Spot, set the network location to “public”.</li></br><li>Know and understand your departmental policy and procedures and identify the appropriate steps you should follow should a cyber security incident occur while you are traveling. </li></ul>");});
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
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4}","click",function(sym,e){sym.play("BP_ITPract");top.enWifiClickBestPracticeITPractionersClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4Copy}","click",function(sym,e){sym.play("BP_Mana");top.enWifiClickBestPracticeManagersClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4Copy2}","click",function(sym,e){sym.play("BP_Everyone");top.enWifiClickBestPracticeGeneralPublicClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4Copy3}","click",function(sym,e){iconSelect="none";sym.play("BtnScreen");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb4Copy4}","click",function(sym,e){window.open("../../../en_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb5}","click",function(sym,e){sym.play("BP_SkipCrossFade");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb5Copy}","click",function(sym,e){window.open("../../../en_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TouchPoint_smb2}","click",function(sym,e){sym.play("BP_SkipCrossFade");top.enMenuWifiClick();});
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

//Edge symbol: 'airportSceneBackground_normal'
(function(symbolName){})("airportSceneBackground_normal");
//Edge symbol end:'airportSceneBackground_normal'

//=========================================================

//Edge symbol: 'Airport_Background_SMB'
(function(symbolName){})("Airport_Background_SMB");
//Edge symbol end:'Airport_Background_SMB'
})(jQuery,AdobeEdge,"EDGE-21219353");