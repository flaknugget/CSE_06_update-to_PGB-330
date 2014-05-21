
var iconSelect="none";var deviceTheft_clicked="false";var cyberCrime_clicked="false";var ppUse_clicked="false";var unsecureData_clicked="false";var beAware_clicked="false";var trustConnection_clicked="false";var cycled="false";var scrollPos="left";var bestPractPos="none";(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2168,function(sym,e){if(iconSelect=="scene5"){sym.play("scene1_welcomeHome");sym.$("scene1_text1").html("Did you observe suspicious IT issues? Consult your IT Department when in doubt. Do not connect any foreign device to your departmental network.");sym.$("scene1_text2").html("Consult your IT Security group for advice if you suspect suspicious activity on your device. Do not connect it to the network. If you received removable storage devices while traveling, <span style='font-family: GothamMedium;'>avoid connecting these devices to computers on Government of Canada networks</span>.");}else if(iconSelect=="scene2"){sym.play("scene2_foreignInterest");sym.$("scene1_text1").html("Use caution when conducting business abroad as your citizenship may be of interest to local authorities. Prepare for your travel by consulting your IT directorate and/or your corporate security team.</br></br>When entering foreign countries, <span style='font-family: GothamMedium;'>your passport will be scanned alerting officials to your presence</span>. Seek the assistance of the Canadian Embassy should you encounter security issues while traveling abroad (www.voyage.gc.ca).");}else if(iconSelect=="scene1"){sym.play("scene3_freeGadgets");sym.$("scene1_text1").html("Do not trust tech gadget giveaways.");sym.$("scene1_text2").html("… can contain malicious code, malware or spyware.  Do not use these storage devices and <span style='font-family: GothamMedium;'>do not plug your own USB sticks into untrusted systems.</span>");}else if(iconSelect=="scene4"){sym.play("scene4_protectDevice");sym.$("scene1_text1").html("Mobile devices are a prime target for theft. Keep your device in your possession at all times, use password protection and minimize the amount of information you store on them. If stolen, the information contained within may be accessed and/or used for malicious purposes. Using your device, malicious actors can... ");sym.$("scene1_text2").html("If traveling to a high risk location, <span style='font-family: GothamMedium;'>do not use your regular business or personally owned devices</span>. Contact your IT Directorate to request a device configured for travel.");}else if(iconSelect=="scene3"){sym.play("scene5_target");sym.$("scene1_text1").html("Individuals holding senior positions or those with unique access privileges may be at higher risk of being targeted. Share your contact information on a need-to-know basis.");sym.$("scene1_text2").html("Individuals holding senior positions within government and/or those who work with valuable information may be at <span style='font-family: GothamMedium;'>higher risk of being targeted through their mobile devices</span>. Be wary of who you share your credentials with, and share your title and department name only with those who have a need-to-know.");}else if(iconSelect=="scene6"){sym.play("scene6_internetAbroad");sym.$("scene1_text1").html("Be cautious when connecting to the internet abroad, as it can be vulnerable and exposed.</br></br>When in foreign countries, try to avoid conducting sensitive work. Assume that all network connections are being monitored. <span style='font-family: GothamMedium;'>Do not use public Wi-Fi networks</span>.");}});
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
Symbol.bindElementAction(compId,symbolName,"${_ViewBestPractices_text}","click",function(sym,e){sym.play("BP_SkipCrossFade");top.enTravelBestPracticesClick();});
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
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4}","click",function(sym,e){bestPractPos="pract";sym.play("BP_ITPract");top.enTravelBestPracticeITPractionersClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4Copy}","click",function(sym,e){bestPractPos="mana";sym.play("BP_Mana");top.enTravelPracticeManagersClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4Copy2}","click",function(sym,e){bestPractPos="every";sym.play("BP_Everyone");top.enTravelPracticeGeneralPublicClick();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4Copy3}","click",function(sym,e){iconSelect="none";sym.play("BtnScreen");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb4Copy4}","click",function(sym,e){window.open("../../../en_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb5}","click",function(sym,e){sym.play("BP_SkipCrossFade");var startTextBoxSymb=sym.getSymbol("BestPractices_ScrollingText");startTextBoxSymb.play("startingPos");startTextBoxSymb.play("startingPos_Mana");startTextBoxSymb.play("startingPos_Every");bestPractPos="none";var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");scrollText_smb_left.play("unclick");scrollText_smb_right.play("clicked");scrollPos="left";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb5Copy}","click",function(sym,e){window.open("../../../en_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){top.timerReset();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touchpoints_smb3Copy2}","click",function(sym,e){sym.play("BtnScreen");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){parent.showClose();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var playBackground=sym.getSymbol("HotelBackground_SMB");playBackground.play();});
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
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",43,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Establish a pool of travel devices, carefully configured to help mitigate foreign travel risks and encourage travelers to leverage these devices when embarking on travel to higher risk locations.</li><br><li>Install up-to-date anti-virus protection, spyware protection, OS security patches, and a firewall and ensure that the user cannot disable these features.</li><br><li>Configure devices to run anti-virus software on storage devices (e.g., USB) upon installation and explain the procedures to the traveler.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",649,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Limit and restrict administrative privileges and have the traveler update passwords before and after travel.</li><br><li>Ensure that proper network security settings are implemented for devices such as laptops.</li><br><li>Verify that mobile devices such as laptops are not able to access the Internet at the same time the user is accessing the department’s internal network.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1292,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>If you or one of your employees is planning to visit a high risk location, contact your IT Directorate for pre-travel advice and request a device authorized for travel.</li></br><li>Consider the implications of a threat actor gaining access to the information on your mobile devices. Before traveling, be sure to back up data and remove unnecessary files. </li></br><li>Review departmental policies and procedures for steps on how to respond in the event of a security incident while traveling. </li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1952,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Encourage the establishment of cyber security awareness programs for your employees.</li><br><li>Seek the assistance of the Canadian Embassy should you encounter security issues while traveling abroad (www.voyage.gc.ca).</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2858,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Update passwords before and after travel.</li></br><li>Back-up important data before your trip, and remove unnecessary information from your devices.</li></br><li>Disable features such as Bluetooth and wireless headset capabilities for the duration of your trip.</li></br><li>When traveling, keep your device in your possession at all times.  If you must leave the device unattended, remove the battery and the SIM card (when applicable) and keep them with you.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3711,function(sym,e){sym.stop();sym.$("BP_IT_TEXTBLOCK").html("<ul><li>Be aware of your surroundings when using devices in public areas. Shield your screen and keyboard from view when working with sensitive information, and terminate connections when you are not using them.</li></br><li>Report suspected issues as soon as possible to your IT Directorate.</li></ul>");});
//Edge binding end
})("BestPractices_ScrollingText");
//Edge symbol end:'BestPractices_ScrollingText'

//=========================================================

//=========================================================

//Edge symbol: 'arrow_slider_smb'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_Icon_cirlce}","click",function(sym,e){var scrollText=sym.getSymbol("scrollingTextBox_smb");scrollText.play("secondPos");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6989,function(sym,e){sym.stop();});
//Edge binding end
})("arrow_slider_smb");
//Edge symbol end:'arrow_slider_smb'

//=========================================================

//Edge symbol: 'touchpoints_smb'
(function(symbolName){})("touchpoints_smb");
//Edge symbol end:'touchpoints_smb'

//=========================================================

//Edge symbol: 'HotelBackground_SMB'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6113,function(sym,e){sym.play(1);});
//Edge binding end
})("HotelBackground_SMB");
//Edge symbol end:'HotelBackground_SMB'
})(jQuery,AdobeEdge,"EDGE-21219353");