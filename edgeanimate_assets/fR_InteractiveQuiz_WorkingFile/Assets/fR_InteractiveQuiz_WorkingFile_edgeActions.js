
var questionStatus=1;var answerStatus="false";var scoreCounter=0;var questionSelect="none";var qAnswered="false";var opt1Correct="false";var opt2Correct="false";var opt3Correct="false";var opt1Virus="false";var opt1Botnet="false";var opt1Spy="false";var optVirus="false";var optSpy="false";var optBotnet="false";var virusSubmit="false";var spySubmit="false";var botnetSubmit="false";var finalSelection="none";var scrollPos="left";var questionAns="false";(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("LandingH2").html("Répondez aux <span style='font-family: GothamMedium;'>10 questions</span> sur la cybersécurité pour tester vos connaissances.");sym.stop();parent.showClose();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",114864,function(sym,e){sym.stop();var vSelect=sym.getSymbol("virusSelector_smb2");var sSelect=sym.getSymbol("spySelector_smb2");var bSelect=sym.getSymbol("botSelector_smb3");vSelect.play("stationed");sSelect.play("stationed");bSelect.play("stationed");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",124000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",130043,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",127000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_icon}","click",function(sym,e){sym.play("level2Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a1-1}","click",function(sym,e){var qOne=sym.getSymbol("a1-1");var qTwo=sym.getSymbol("a1-2");var qThree=sym.getSymbol("a1-3");var qFour=sym.getSymbol("a1-4");if(questionSelect=="two"){qTwo.playReverse("clicked");}else if(questionSelect=="three"){qThree.playReverse("clicked");}else if(questionSelect=="four"){qFour.playReverse("clicked");}else if(questionSelect=="five"){qFive.playReverse("clicked");}
qOne.play("clicked");questionSelect="one";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a1-2}","click",function(sym,e){var qOne=sym.getSymbol("a1-1");var qTwo=sym.getSymbol("a1-2");var qThree=sym.getSymbol("a1-3");var qFour=sym.getSymbol("a1-4");if(questionSelect=="one"){qOne.playReverse("clicked");}else if(questionSelect=="three"){qThree.playReverse("clicked");}else if(questionSelect=="four"){qFour.playReverse("clicked");}else if(questionSelect=="five"){qFive.playReverse("clicked");}
qTwo.play("clicked");questionSelect="two";if(qAnswered=="false"){scoreCounter++;qAnswered="true";}
answerStatus="true";var nextButn=sym.getSymbol("next_btn_smb");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a1-3}","click",function(sym,e){var qOne=sym.getSymbol("a1-1");var qTwo=sym.getSymbol("a1-2");var qThree=sym.getSymbol("a1-3");var qFour=sym.getSymbol("a1-4");var nextButn=sym.getSymbol("next_btn_smb");if(questionSelect=="one"){qOne.playReverse("clicked");}else if(questionSelect=="two"){qTwo.playReverse("clicked");}else if(questionSelect=="four"){qFour.playReverse("clicked");}else if(questionSelect=="five"){qFive.playReverse("clicked");}
qThree.play("clicked");questionSelect="three";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a1-4}","click",function(sym,e){var qOne=sym.getSymbol("a1-1");var qTwo=sym.getSymbol("a1-2");var qThree=sym.getSymbol("a1-3");var qFour=sym.getSymbol("a1-4");if(questionSelect=="one"){qOne.playReverse("clicked");}else if(questionSelect=="two"){qTwo.playReverse("clicked");}else if(questionSelect=="three"){qThree.playReverse("clicked");}else if(questionSelect=="five"){qFive.playReverse("clicked");}
qFour.play("clicked");questionSelect="four";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy2}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8500,function(sym,e){sym.stop();sym.$("correctText1").html("Les conseils de sécurité suivants vous permettront d’utiliser les médias sociaux en toute sécurité :<ul><li>Lorsque vous utilisez les comptes de médias sociaux ministériels, assurez-vous d’avoir lu et compris les politiques en matière de médias sociaux de votre organisme.</li><li>Veillez à ce que les renseignements administratifs affichés aient été approuvés aux fins de diffusion.</li><li>Dans la mesure du possible, ne publiez pas votre adresse électronique professionnelle dans les documents ou sur Internet.</li><li>Assurez-vous que les options de sécurité et de protection offertes ont bien été configurées.</li><li>Signalez les événements suspects à la direction de la sécurité des TI de votre ministère.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10500,function(sym,e){sym.stop();var ScrollBoxPlayer=sym.getSymbol("ScrollingTextBox");ScrollBoxPlayer.play("a1-IncorStart");var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");scrollText_smb_left.play("unclick");scrollText_smb_right.play("clicked");qAnswered="false";questionSelect="reset";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy3}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14842,function(sym,e){sym.stop();answerStatus="false";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17364,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",19364,function(sym,e){sym.stop();sym.$("Text6").html("La bonne réponse est <span style='font-family: GothamMedium; color: #262262;'>69 programmes malveillants par minute.</span></br></br>Les programmes malveillants peuvent fonctionner de façon insidieuse. Il est alors difficile de savoir si un ordinateur a été infecté. En raison de l’évolution constante des programmes malveillants, il est très important d’adopter les quatre mesures d’atténuation les plus efficaces et de mettre à jour continuellement votre logiciel antivirus et vos coupe-feu, ce qui aide à empêcher les intrusions.");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestion}","click",function(sym,e){qAnswered="false";questionStatus++;sym.play("level2Q2");var nextButn=sym.getSymbol("next_btn_smb");nextButn.play("faded");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy7}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",25842,function(sym,e){sym.stop();answerStatus="false";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",28364,function(sym,e){sym.stop();sym.$("correctText1Copy3").html("Avant d’ouvrir la pièce jointe d’un courriel :<ul><li>Assurez-vous de bien connaître l’expéditeur du courriel et que le ton général du message correspond au style habituel de l’expéditeur.</li><li>Vérifiez si le contenu du message est bien lié à votre travail.</li><li>Vérifiez si l’adresse Web ou la pièce jointe correspond au contenu du courriel.</li><li>Faites preuve d’une extrême prudence si le courriel ne provient pas d’un compte gc.ca ou semble provenir d’un domaine suspect.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30364,function(sym,e){sym.stop();sym.$("correctText1Copy3").html("La bonne réponse était de <span style='font-family: GothamMedium; color: #262262;'>communiquer avec le bureau des services TI de votre ministère et de lui demander quelles sont les mesures à prendre.</span><br><br>Évitez de transmettre des courriels suspects à d’autres comptes; vous risquez d’infecter d’autres ordinateurs.<br><br>Avant d’ouvrir la pièce jointe d’un courriel :<ul><li>Assurez-vous de bien connaître l’expéditeur du courriel et que le ton général du message correspond au style habituel de l’expéditeur.</li><li>Vérifiez si le contenu du message est bien lié à votre travail.</li><li>Vérifiez si l’adresse Web ou la pièce jointe correspond au contenu du courriel.</li><li>Faites preuve d’une extrême prudence si le courriel ne provient pas d’un compte gc.ca ou semble provenir d’un domaine suspect.</li></ul>");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy9}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",38106,function(sym,e){sym.stop();answerStatus="false";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",40606,function(sym,e){sym.stop();sym.$("correctText1").html("Follow these security tips to ensure that you are using social media safely:<ul><li>When using departmental social media accounts, ensure that you have read and understood your organization’s social media policies.</li><li>Ensure that any business information posted has been approved for release.</li><li>If possible, do not publish your official business e-mail address in documents or on the Internet.</li><li>Ensure any available security and privacy options have been applied.</li><li>Report suspicious events to your IT department.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",42606,function(sym,e){sym.stop();sym.$("Text").html("La bonne réponse est <span style='font-family: GothamMedium; color: #262262;'>« Toutes ces réponses ».</span><br><br>De nombreux programmes informatiques font l’objet de vulnérabilités et d’attaques du jour zéro.<br><br>Comme les fournisseurs peuvent publier des bulletins sur la sécurité lorsqu’une attaque devient connue, il est important de suivre leurs conseils en matière de sécurité afin de mieux protéger vos réseaux. Quand les mesures d’atténuation comme des correctifs deviennent disponibles, les ministères doivent s’efforcer de les mettre en œuvre dans les plus brefs délais.");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy11}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",49342,function(sym,e){sym.stop();answerStatus="false";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",51864,function(sym,e){sym.stop();sym.$("correctText1").html("Follow these security tips to ensure that you are using social media safely:<ul><li>When using departmental social media accounts, ensure that you have read and understood your organization’s social media policies.</li><li>Ensure that any business information posted has been approved for release.</li><li>If possible, do not publish your official business e-mail address in documents or on the Internet.</li><li>Ensure any available security and privacy options have been applied.</li><li>Report suspicious events to your IT department.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",54000,function(sym,e){sym.stop();sym.$("Text7").html("La bonne réponse est <span style='font-family: GothamMedium; color: #262262;'>114 milliards de dollars.</span><br><br>Les consommateurs ont non seulement payé l’équivalent de 114 milliards de dollars, mais ils ont aussi évalué la valeur du temps perdu en raison des infractions à 274 milliards de dollars. Le coût total du cybercrime s’élève donc à la somme exorbitante de 388 milliards de dollars. En investissant de façon constante dans vos mécanismes de sécurité, vous pouvez réduire les coûts de récupération liés aux cyberintrusions. ");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy13}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",57092,function(sym,e){sym.stop();answerStatus="false";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",59614,function(sym,e){sym.stop();sym.$("correctText1Copy6").html("Pour accroître la sécurité des dispositifs mobiles de votre ministère :<ul><li>adoptez les technologies appuyées par le gouvernement du Canada;</li><li>mettez en œuvre une solution de gestion des dispositifs mobiles afin de contrôler et de protéger les données;</li><li>gardez vos systèmes d’exploitation à jour afin de vous assurer que les correctifs les plus récents sont appliqués;</li><li>soyez à l’affût des risques liés aux voyages à l’étranger;</li><li>assurez-vous d’être au fait des menaces potentielles et prenez les mesures nécessaires pour vous protéger.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",61614,function(sym,e){sym.stop();sym.$("correctText1Copy6").html("La bonne réponse est <span style='font-family: GothamMedium; color: #262262;'>70 000 000.</span><br><br>Songez aux renseignements que vous avez stockés sur vos dispositifs, ainsi qu’aux conséquences qu’entraînerait un vol, une perte ou une compromission.<br><br>Pour accroître la sécurité des dispositifs mobiles de votre ministère :<ul><li>adoptez les technologies appuyées par le gouvernement du Canada;</li><li>mettez en œuvre une solution de gestion des dispositifs mobiles afin de contrôler et de protéger les données;</li><li>gardez vos systèmes d’exploitation à jour afin de vous assurer que les correctifs les plus récents sont appliqués;</li><li>soyez à l’affût des risques liés aux voyages à l’étranger;</li><li>assurez-vous d’être au fait des menaces potentielles et prenez les mesures nécessaires pour vous protéger.</li></ul>");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy15}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",65842,function(sym,e){sym.stop();sym.$("questionText1Copy7").html("<span style='font-family: GothamMedium';>Les quatre mesures d’atténuation les plus efficaces du CST sont les suivantes :</span><ol><li><span style='font-family: GothamMedium';>Liste blanche des applications</span></li><li><span style='font-family: GothamMedium';>Application de correctifs aux applications</span></li><li><span style='font-family: GothamMedium';>Application de correctifs aux systèmes d’exploitation</span></li><li><span style='font-family: GothamMedium';>Restriction des privilèges d’administrateur</span></li></ol>Les ministères et les organismes peuvent tirer avantage de l’adoption des mesures d’atténuation. Laquelle des mesures d’atténuation suivantes est la plus efficace?");answerStatus="false";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",68364,function(sym,e){sym.stop();sym.$("correctText1Copy7").html("Le CST recommande fortement d’adopter ces quatre mesures. Comme elles ciblent les étapes précises d’une intrusion typique, elles se complètent, augmentant ainsi leur efficacité.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",70364,function(sym,e){sym.stop();sym.$("Text8").html("La bonne réponse est<span style='font-family: GothamMedium; color: #262262;'> « Toutes ces réponses »</span></br></br>Le CST recommande fortement d’adopter ces quatre mesures. Comme elles ciblent les étapes précises d’une intrusion typique, elles se complètent, augmentant ainsi leur efficacité.");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy17}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",76842,function(sym,e){sym.stop();answerStatus="false";sym.$("Text11").html("Le voyage à l’étranger peut vous exposer, votre organisme et vous, à une variété accrue de cybermenaces. Il est important d’utiliser vos dispositifs mobiles de manière sûre lorsque vous voyagez afin d’assurer votre protection et celle de votre ministère.<br><br>Vous êtes à l’aéroport en train d’utiliser un dispositif du gouvernement du Canada et n’arrivez pas à vous connecter à votre réseau sécurisé. Vous remarquez un réseau Wi-Fi ouvert appelé &laquo; Wi-Fi public gratuit &raquo;.<br><br>Il ne nécessite ni chiffrement ni mot de passe. Que faites-vous?");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",79364,function(sym,e){sym.stop();sym.$("correctText1Copy8").html("Lorsque vous voyagez dans des zones à risque élevé, il est important de prendre les précautions suivantes pour assurer la sécurité de vos dispositifs mobiles :<ul><li>gardez toujours votre dispositif sur vous;</li><li>supprimez les données inutiles qui se trouvent sur votre dispositif;</li><li>changez vos mots de passe à intervalles réguliers;</li><li>soyez attentif à ce qui vous entoure et aux personnes qui pourraient voir votre écran ou votre clavier, particulièrement dans les aires publiques.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",81364,function(sym,e){sym.stop();sym.$("correctText1Copy8").html("La bonne réponse est <span style='font-family: GothamMedium; color: #262262;'>&laquo; Vous évitez de vous connecter à un réseau inconnu &raquo;.</span><br><br>Vous devriez éviter d’utiliser tout réseau qui ne vous est pas familier. Le fait qu’il s’agisse d’un réseau payant et doté du chiffrement ne signifie pas qu’il est sécurisé.<br><br>Lorsque vous voyagez dans des zones à risque élevé, il est important de prendre les précautions suivantes pour assurer la sécurité de vos dispositifs mobiles :<ul><li>gardez toujours votre dispositif sur vous;</li><li>supprimez les données inutiles qui se trouvent sur votre dispositif;</li><li>changez vos mots de passe à intervalles réguliers;</li><li>soyez attentif à ce qui vous entoure et aux personnes qui pourraient voir votre écran ou votre clavier, particulièrement dans les aires publiques.</li></ul>");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy19}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",89342,function(sym,e){sym.stop();answerStatus="false";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",91864,function(sym,e){sym.stop();sym.$("Text3").html("En public, assurez-vous de protéger les renseignements classifiés en discutant peu de ces derniers, en limitant vos commentaires à « oui » ou à « non » et en couvrant votre bouche lorsque vous parlez.<ul><li>Faites preuve de circonspection lorsque vous communiquez avec votre patron. Donnez-lui les détails à votre retour au bureau.</li><li>Ne prêtez votre téléphone sécurisé à personne.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",93864,function(sym,e){sym.stop();sym.$("Text3").html("La bonne réponse est <span style='font-family: GothamMedium; color: #262262;'>« N’importe où, à condition que vous soyez attentif à ce qui vous entoure ».</span></br></br>En public, assurez-vous de protéger les renseignements classifiés en discutant peu de ces derniers, en limitant vos commentaires à « oui » ou à « non » et en couvrant votre bouche lorsque vous parlez.<ul><li>Faites preuve de circonspection lorsque vous communiquez avec votre patron. Donnez-lui les détails à votre retour au bureau.</li><li>Ne prêtez votre téléphone sécurisé à personne.</li></ul>");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a2-1}","click",function(sym,e){var qOne=sym.getSymbol("a2-1");var qTwo=sym.getSymbol("a2-2");var qThree=sym.getSymbol("a2-3");var qFour=sym.getSymbol("a2-4");if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qOne.play("clicked");questionSelect="one";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb2");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a2-2}","click",function(sym,e){var qOne=sym.getSymbol("a2-1");var qTwo=sym.getSymbol("a2-2");var qThree=sym.getSymbol("a2-3");var qFour=sym.getSymbol("a2-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qTwo.play("clicked");questionSelect="two";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb2");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a2-3}","click",function(sym,e){var qOne=sym.getSymbol("a2-1");var qTwo=sym.getSymbol("a2-2");var qThree=sym.getSymbol("a2-3");var qFour=sym.getSymbol("a2-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qThree.play("clicked");questionSelect="three";if(qAnswered=="false"){scoreCounter++;qAnswered="true";}
answerStatus="true";var nextButn=sym.getSymbol("next_btn_smb2");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a2-4}","click",function(sym,e){var qOne=sym.getSymbol("a2-1");var qTwo=sym.getSymbol("a2-2");var qThree=sym.getSymbol("a2-3");var qFour=sym.getSymbol("a2-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qFour.play("clicked");questionSelect="four";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb2");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestionCopy}","click",function(sym,e){sym.play("level2Q3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a3-1}","click",function(sym,e){var qOne=sym.getSymbol("a3-1");var qTwo=sym.getSymbol("a3-2");var qThree=sym.getSymbol("a3-3");var qFour=sym.getSymbol("a3-4");if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qOne.play("clicked");questionSelect="one";if(qAnswered=="false"){scoreCounter++;qAnswered="true";}
answerStatus="true";var nextButn=sym.getSymbol("next_btn_smb3");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a3-2}","click",function(sym,e){var qOne=sym.getSymbol("a3-1");var qTwo=sym.getSymbol("a3-2");var qThree=sym.getSymbol("a3-3");var qFour=sym.getSymbol("a3-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qTwo.play("clicked");questionSelect="two";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb3");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a3-3}","click",function(sym,e){var qOne=sym.getSymbol("a3-1");var qTwo=sym.getSymbol("a3-2");var qThree=sym.getSymbol("a3-3");var qFour=sym.getSymbol("a3-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qThree.play("clicked");questionSelect="three";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb3");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a3-4}","click",function(sym,e){var qOne=sym.getSymbol("a3-1");var qTwo=sym.getSymbol("a3-2");var qThree=sym.getSymbol("a3-3");var qFour=sym.getSymbol("a3-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qFour.play("clicked");questionSelect="four";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb3");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a4-1}","click",function(sym,e){var qOne=sym.getSymbol("a4-1");var qTwo=sym.getSymbol("a4-2");var qThree=sym.getSymbol("a4-3");var qFour=sym.getSymbol("a4-4");if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qOne.play("clicked");questionSelect="one";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb4");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a4-2}","click",function(sym,e){var qOne=sym.getSymbol("a4-1");var qTwo=sym.getSymbol("a4-2");var qThree=sym.getSymbol("a4-3");var qFour=sym.getSymbol("a4-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qTwo.play("clicked");questionSelect="two";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb4");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a4-3}","click",function(sym,e){var qOne=sym.getSymbol("a4-1");var qTwo=sym.getSymbol("a4-2");var qThree=sym.getSymbol("a4-3");var qFour=sym.getSymbol("a4-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qThree.play("clicked");questionSelect="three";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb4");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a4-4}","click",function(sym,e){var qOne=sym.getSymbol("a4-1");var qTwo=sym.getSymbol("a4-2");var qThree=sym.getSymbol("a4-3");var qFour=sym.getSymbol("a4-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qFour.play("clicked");questionSelect="four";if(qAnswered=="false"){scoreCounter++;qAnswered="true";}
answerStatus="true";var nextButn=sym.getSymbol("next_btn_smb4");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestionCopy3}","click",function(sym,e){sym.play("level2Q4");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestionCopy4}","click",function(sym,e){sym.play("level2Q5");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a5-1}","click",function(sym,e){var qOne=sym.getSymbol("a5-1");var qTwo=sym.getSymbol("a5-2");var qThree=sym.getSymbol("a5-3");var qFour=sym.getSymbol("a5-4");if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qOne.play("clicked");questionSelect="one";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb5");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a5-2}","click",function(sym,e){var qOne=sym.getSymbol("a5-1");var qTwo=sym.getSymbol("a5-2");var qThree=sym.getSymbol("a5-3");var qFour=sym.getSymbol("a5-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qTwo.play("clicked");questionSelect="two";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb5");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a5-3}","click",function(sym,e){var qOne=sym.getSymbol("a5-1");var qTwo=sym.getSymbol("a5-2");var qThree=sym.getSymbol("a5-3");var qFour=sym.getSymbol("a5-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qThree.play("clicked");questionSelect="three";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb5");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a5-4}","click",function(sym,e){var qOne=sym.getSymbol("a5-1");var qTwo=sym.getSymbol("a5-2");var qThree=sym.getSymbol("a5-3");var qFour=sym.getSymbol("a5-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qFour.play("clicked");questionSelect="four";if(qAnswered=="false"){scoreCounter++;qAnswered="true";}
answerStatus="true";var nextButn=sym.getSymbol("next_btn_smb5");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestionCopy5}","click",function(sym,e){sym.play("level2Q6");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a6-1}","click",function(sym,e){var qOne=sym.getSymbol("a6-1");var qTwo=sym.getSymbol("a6-2");var qThree=sym.getSymbol("a6-3");var qFour=sym.getSymbol("a6-4");if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qOne.play("clicked");questionSelect="one";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb6");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a6-2}","click",function(sym,e){var qOne=sym.getSymbol("a6-1");var qTwo=sym.getSymbol("a6-2");var qThree=sym.getSymbol("a6-3");var qFour=sym.getSymbol("a6-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qTwo.play("clicked");questionSelect="two";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb6");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a6-3}","click",function(sym,e){var qOne=sym.getSymbol("a6-1");var qTwo=sym.getSymbol("a6-2");var qThree=sym.getSymbol("a6-3");var qFour=sym.getSymbol("a6-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qThree.play("clicked");questionSelect="three";if(qAnswered=="false"){scoreCounter++;qAnswered="true";}
answerStatus="true";var nextButn=sym.getSymbol("next_btn_smb6");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a6-4}","click",function(sym,e){var qOne=sym.getSymbol("a6-1");var qTwo=sym.getSymbol("a6-2");var qThree=sym.getSymbol("a6-3");var qFour=sym.getSymbol("a6-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qFour.play("clicked");questionSelect="four";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb6");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestionCopy6}","click",function(sym,e){sym.play("level2Q7");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a7-1}","click",function(sym,e){var qOne=sym.getSymbol("a7-1");var qTwo=sym.getSymbol("a7-2");var qThree=sym.getSymbol("a7-3");var qFour=sym.getSymbol("a7-4");var qFive=sym.getSymbol("a7-5");if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qOne.play("clicked");questionSelect="one";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb7");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a7-2}","click",function(sym,e){var qOne=sym.getSymbol("a7-1");var qTwo=sym.getSymbol("a7-2");var qThree=sym.getSymbol("a7-3");var qFour=sym.getSymbol("a7-4");var qFive=sym.getSymbol("a7-5");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qTwo.play("clicked");questionSelect="two";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb7");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a7-3}","click",function(sym,e){var qOne=sym.getSymbol("a7-1");var qTwo=sym.getSymbol("a7-2");var qThree=sym.getSymbol("a7-3");var qFour=sym.getSymbol("a7-4");var qFive=sym.getSymbol("a7-5");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qThree.play("clicked");questionSelect="three";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb7");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a7-4}","click",function(sym,e){var qOne=sym.getSymbol("a7-1");var qTwo=sym.getSymbol("a7-2");var qThree=sym.getSymbol("a7-3");var qFour=sym.getSymbol("a7-4");var qFive=sym.getSymbol("a7-5");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qFour.play("clicked");questionSelect="four";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb7");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestionCopy7}","click",function(sym,e){sym.play("level2Q8");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a8-1}","click",function(sym,e){var qOne=sym.getSymbol("a8-1");var qTwo=sym.getSymbol("a8-2");var qThree=sym.getSymbol("a8-3");var qFour=sym.getSymbol("a8-4");if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qOne.play("clicked");questionSelect="one";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb8");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a8-2}","click",function(sym,e){var qOne=sym.getSymbol("a8-1");var qTwo=sym.getSymbol("a8-2");var qThree=sym.getSymbol("a8-3");var qFour=sym.getSymbol("a8-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qTwo.play("clicked");questionSelect="two";if(qAnswered=="false"){scoreCounter++;qAnswered="true";}
answerStatus="true";var nextButn=sym.getSymbol("next_btn_smb8");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a8-3}","click",function(sym,e){var qOne=sym.getSymbol("a8-1");var qTwo=sym.getSymbol("a8-2");var qThree=sym.getSymbol("a8-3");var qFour=sym.getSymbol("a8-4");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qThree.play("clicked");questionSelect="three";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb8");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestionCopy8}","click",function(sym,e){sym.play("level2Q9");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a9-1}","click",function(sym,e){var qOne=sym.getSymbol("a9-1");var qTwo=sym.getSymbol("a9-2");var qThree=sym.getSymbol("a9-3");var qFour=sym.getSymbol("a9-4");var qFive=sym.getSymbol("a9-5");if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qOne.play("clicked");questionSelect="one";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb9");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a9-2}","click",function(sym,e){var qOne=sym.getSymbol("a9-1");var qTwo=sym.getSymbol("a9-2");var qThree=sym.getSymbol("a9-3");var qFour=sym.getSymbol("a9-4");var qFive=sym.getSymbol("a9-5");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qTwo.play("clicked");questionSelect="two";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb9");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a9-3}","click",function(sym,e){var qOne=sym.getSymbol("a9-1");var qTwo=sym.getSymbol("a9-2");var qThree=sym.getSymbol("a9-3");var qFour=sym.getSymbol("a9-4");var qFive=sym.getSymbol("a9-5");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qThree.play("clicked");questionSelect="three";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb9");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a9-4}","click",function(sym,e){var qOne=sym.getSymbol("a9-1");var qTwo=sym.getSymbol("a9-2");var qThree=sym.getSymbol("a9-3");var qFour=sym.getSymbol("a9-4");var qFive=sym.getSymbol("a9-5");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="five"){qFive.play("unclick");}
qFour.play("clicked");questionSelect="four";if(qAnswered=="false"){qAnswered="true";}
answerStatus="false";var nextButn=sym.getSymbol("next_btn_smb9");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a9-5}","click",function(sym,e){var qOne=sym.getSymbol("a9-1");var qTwo=sym.getSymbol("a9-2");var qThree=sym.getSymbol("a9-3");var qFour=sym.getSymbol("a9-4");var qFive=sym.getSymbol("a9-5");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}
qFive.play("clicked");questionSelect="five";if(qAnswered=="false"){scoreCounter++;qAnswered="true";}
answerStatus="true";var nextButn=sym.getSymbol("next_btn_smb9");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestionCopy2}","click",function(sym,e){if(scoreCounter<=4){sym.play("noviceLvl");}else if(scoreCounter==5||scoreCounter==6||scoreCounter==6){sym.play("smartLvl");}else if(scoreCounter>=7){sym.play("geniusLvl");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_iconCopy5}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",116864,function(sym,e){sym.stop();sym.$("correctText1Copy").html("<span style='font-family: GothamMedium; color: #262262;'>Some of your matches were incorrect.</span></br></br><span style='font-family: GothamMedium'>Virus:</span> Malicious code sent to a computer to self-replicate, damaging data or crashing the system.</br></br><span style='font-family: GothamMedium'>Spyware:</span> Little snippets of code embedded in files, that actively tracks all browsing and reports back to a marketing server.</br></br><span style='font-family: GothamMedium'>Botnet:</span> A large network of computers infected with malware that are used to carry out a variety of malicious tasks. ");var vSelect=sym.getSymbol("virusSelector_smb2");var sSelect=sym.getSymbol("spySelector_smb2");var bSelect=sym.getSymbol("botSelector_smb3");vSelect.play("stationed");sSelect.play("stationed");bSelect.play("stationed");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextQuestionCopy9}","click",function(sym,e){sym.play("level2Q10");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_option1_text_smb}","click",function(sym,e){var selector1=sym.getSymbol("option1_text_smb");if(optVirus=="true"){selector1.play("virusSelect");opt1Correct="false";virusSubmit="true";opt1Virus="true";}else if(optSpy=="true"){selector1.play("spySelect");opt1Correct="false";spySubmit="true";opt1Virus="true";}else if(optBotnet=="true"){selector1.play("botnetSelect");opt1Correct="true";botnetSubmit="true";opt1Virus="true";}
var nextButn=sym.getSymbol("next_btn_smb10");if(opt1Virus=="true"&&opt1Botnet=="true"&&opt1Spy=="true"){nextButn.play("ready");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_option2_text_smb}","click",function(sym,e){var selector2=sym.getSymbol("option2_text_smb");if(optVirus=="true"){selector2.play("virusSelect");opt2Correct="false";virusSubmit="true";opt2Used="virus";opt1Spy="true";}else if(optSpy=="true"){selector2.play("spySelect");opt2Correct="true";spySubmit="true";opt2Used="spy";opt1Spy="true";}else if(optBotnet=="true"){selector2.play("botnetSelect");opt2Correct="false";botnetSubmit="true";opt2Used="botnet";opt1Spy="true";}
var nextButn=sym.getSymbol("next_btn_smb10");if(opt1Virus=="true"&&opt1Botnet=="true"&&opt1Spy=="true"){nextButn.play("ready");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_option3_text_smb}","click",function(sym,e){var selector3=sym.getSymbol("option3_text_smb");if(optVirus=="true"){selector3.play("virusSelect");opt3Correct="true";virusSubmit="true";opt3Used="virus";opt1Botnet="true";}else if(optSpy=="true"){selector3.play("spySelect");opt3Correct="false";spySubmit="true";opt3Used="spy";opt1Botnet="true";}else if(optBotnet=="true"){selector3.play("botnetSelect");opt3Correct="false";botnetSubmit="true";opt3Used="botnet";opt1Botnet="true";}
var nextButn=sym.getSymbol("next_btn_smb10");if(opt1Virus=="true"&&opt1Botnet=="true"&&opt1Spy=="true"){nextButn.play("ready");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",112755,function(sym,e){sym.stop();sym.$("questionText1Copy11").html("<span style='font-family: GothamMedium; color: #262262;'>Choisissez</span> un type d'intrusion, puis <span style='font-family: GothamMedium; color: #262262;'>l'effet</span> qui lui est associé.");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_moreInfo_smb}","click",function(sym,e){var getMoInfoBtn=sym.getSymbol("moreInfo_smb");var goBackBtn=sym.getSymbol("mainMenu_smb");if(questionSelect=="goBack"){goBackBtn.play("unclick");}
getMoInfoBtn.play("clicked");questionSelect="moInfo";finalSelection="moInfo";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_mainMenu_smb}","click",function(sym,e){var getMoInfoBtn=sym.getSymbol("moreInfo_smb");var goBackBtn=sym.getSymbol("mainMenu_smb");if(questionSelect=="moInfo"){getMoInfoBtn.play("unclick");}
goBackBtn.play("clicked");questionSelect="goBack";finalSelection="menu";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_virusSelector_smb}","click",function(sym,e){var vSelect=sym.getSymbol("virusSelector_smb");var sSelect=sym.getSymbol("spySelector_smb");var bSelect=sym.getSymbol("botSelector_smb");if(optVirus=="false"){optVirus="true";vSelect.play("clicked");optSpy="false";sSelect.play("unclick");optBotnet="false";bSelect.play("unclick");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spySelector_smb}","click",function(sym,e){var vSelect=sym.getSymbol("virusSelector_smb");var sSelect=sym.getSymbol("spySelector_smb");var bSelect=sym.getSymbol("botSelector_smb");if(optSpy=="false"){optSpy="true";vSelect.play("unclick");optVirus="false";sSelect.play("clicked");optBotnet="false";bSelect.play("unclick");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_botSelector_smb}","click",function(sym,e){var vSelect=sym.getSymbol("virusSelector_smb");var sSelect=sym.getSymbol("spySelector_smb");var bSelect=sym.getSymbol("botSelector_smb");if(optBotnet=="false"){optBotnet="true";vSelect.play("unclick");optVirus="false";sSelect.play("unclick");optSpy="false";bSelect.play("clicked");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){if(finalSelection=="menu"){sym.play("finalScreen");}else if(finalSelection=="moInfo"){window.open("../../../fr_quizform.html","contentContainer");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_a7-5}","click",function(sym,e){var qOne=sym.getSymbol("a7-1");var qTwo=sym.getSymbol("a7-2");var qThree=sym.getSymbol("a7-3");var qFour=sym.getSymbol("a7-4");var qFive=sym.getSymbol("a7-5");if(questionSelect=="one"){qOne.play("unclick");}else if(questionSelect=="two"){qTwo.play("unclick");}else if(questionSelect=="three"){qThree.play("unclick");}else if(questionSelect=="four"){qFour.play("unclick");}
qFive.play("clicked");questionSelect="five";if(qAnswered=="false"){scoreCounter++;qAnswered="true";}
answerStatus="true";var nextButn=sym.getSymbol("next_btn_smb7");nextButn.play("ready");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb}","click",function(sym,e){if(questionStatus==1&&answerStatus=="true"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 2");sym.play("level2Cor");}else if(questionStatus==1&&answerStatus=="false"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 2");sym.play("level2Incor");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb2}","click",function(sym,e){if(questionStatus==2&&answerStatus=="true"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 2");sym.stop("level2-2Cor");qAnswered="false";questionSelect="reset";questionStatus++;}else if(questionStatus==2&&answerStatus=="false"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 2");sym.stop("level2-2Incor");qAnswered="false";questionSelect="reset";questionStatus++;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb3}","click",function(sym,e){if(questionStatus==3&&answerStatus=="true"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 3");sym.stop("level2-3Cor");qAnswered="false";questionSelect="reset";questionStatus++;}else if(questionStatus==3&&answerStatus=="false"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 3");sym.stop("level2-3Incor");qAnswered="false";questionSelect="reset";questionStatus++;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb4}","click",function(sym,e){if(questionStatus==4&&answerStatus=="true"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 4");sym.play("level2-4Cor");qAnswered="false";questionSelect="reset";questionStatus++;}else if(questionStatus==4&&answerStatus=="false"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 4");sym.play("level2-4Incor");qAnswered="false";questionSelect="reset";questionStatus++;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb5}","click",function(sym,e){if(questionStatus==5&&answerStatus=="true"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 5");sym.play("level2-5Cor");qAnswered="false";questionSelect="reset";questionStatus++;}else if(questionStatus==5&&answerStatus=="false"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 5");sym.play("level2-5Incor");qAnswered="false";questionSelect="reset";questionStatus++;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb6}","click",function(sym,e){if(questionStatus==6&&answerStatus=="true"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 6");sym.play("level2-6Cor");qAnswered="false";questionSelect="reset";questionStatus++;}else if(questionStatus==6&&answerStatus=="false"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 6");sym.play("level2-6Incor");qAnswered="false";questionSelect="reset";questionStatus++;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb7}","click",function(sym,e){if(questionStatus==7&&answerStatus=="true"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 7");sym.play("level2-7Cor");qAnswered="false";questionSelect="reset";questionStatus++;}else if(questionStatus==7&&answerStatus=="false"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 7");sym.play("level2-7Incor");qAnswered="false";questionSelect="reset";questionStatus++;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb8}","click",function(sym,e){if(questionStatus==8&&answerStatus=="true"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 8");sym.play("level2-8Cor");qAnswered="false";questionSelect="reset";questionStatus++;}else if(questionStatus==8&&answerStatus=="false"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 8");sym.play("level2-8Incor");qAnswered="false";questionSelect="reset";questionStatus++;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb9}","click",function(sym,e){if(questionStatus==9&&answerStatus=="true"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 9");sym.play("level2-9Cor");qAnswered="false";questionSelect="reset";questionStatus++;}else if(questionStatus==9&&answerStatus=="false"&&qAnswered=="true"){sym.$("qStatus").html("QUESTION 9");sym.play("level2-9Incor");qAnswered="false";questionSelect="reset";questionStatus++;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_btn_smb10}","click",function(sym,e){if(opt3Correct=="true"&&opt2Correct=="true"&&opt1Correct=="true"){sym.$("qStatus").html("QUESTION 10");scoreCounter++;qAnswered="false";sym.play("level2-10Cor");}else if(opt1Virus=="true"&&opt1Botnet=="true"&&opt1Spy=="true"){sym.$("qStatus").html("QUESTION 10");sym.play("level2-10Incor");qAnswered="false";}
questionSelect="reset";if(qAnswered=="false"){qAnswered="true";questionStatus++;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",134131,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle3}","click",function(sym,e){window.open("../../../fr_main-menu.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){top.timerReset();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text10}","click",function(sym,e){sym.play("level2Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_slider_smb_right}","click",function(sym,e){var scrolltextBox=sym.getSymbol("ScrollingTextBox");var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");if(scrollPos=="left"){scrollText_smb_left.play("clicked");scrollText_smb_right.play("unclick");if(questionStatus==1){scrolltextBox.play("a1-IncorSecond");}else if(bestPractPos=="mana"){scrolltextBox.play("secondPos_Mana");}else if(bestPractPos=="every"){scrolltextBox.play("secondPos_Every");}
scrollPos="right";}else{}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_slider_smb_left}","click",function(sym,e){var scrolltextBox=sym.getSymbol("ScrollingTextBox");var scrollText_smb_left=sym.getSymbol("arrow_slider_smb_left");var scrollText_smb_right=sym.getSymbol("arrow_slider_smb_right");if(scrollPos=="right"){scrollText_smb_left.play("unclick");scrollText_smb_right.play("clicked");if(questionStatus==1){scrolltextBox.play("a1-IncorStart");}else if(bestPractPos=="mana"){scrolltextBox.play("startingPos_Mana");}else if(bestPractPos=="every"){scrolltextBox.play("startingPos_Every");}
scrollPos="left";}else{}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'startButton'
(function(symbolName){})("startButton");
//Edge symbol end:'startButton'

//=========================================================

//Edge symbol: 'continue'
(function(symbolName){})("continue");
//Edge symbol end:'continue'

//=========================================================

//Edge symbol: 'VirusText'
(function(symbolName){})("VirusText");
//Edge symbol end:'VirusText'

//=========================================================

//Edge symbol: 'spywareText'
(function(symbolName){})("spywareText");
//Edge symbol end:'spywareText'

//=========================================================

//Edge symbol: 'botnetText'
(function(symbolName){})("botnetText");
//Edge symbol end:'botnetText'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'a1-1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_a1}","click",function(sym,e){answerStatus="false";sym.play("level3");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",127,function(sym,e){sym.stop();});
//Edge binding end
})("a1-1");
//Edge symbol end:'a1-1'

//=========================================================

//Edge symbol: 'a1-2'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_a2}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",92,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Ellipse3Copy5}","click",function(sym,e){});
//Edge binding end
})("a1-2");
//Edge symbol end:'a1-2'

//=========================================================

//Edge symbol: 'a1-3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",103,function(sym,e){sym.stop();});
//Edge binding end
})("a1-3");
//Edge symbol end:'a1-3'

//=========================================================

//Edge symbol: 'a1-4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",95,function(sym,e){sym.stop();});
//Edge binding end
})("a1-4");
//Edge symbol end:'a1-4'

//=========================================================

//Edge symbol: 'continueFeed'
(function(symbolName){})("continueFeed");
//Edge symbol end:'continueFeed'

//=========================================================

//Edge symbol: 'nextQuestion'
(function(symbolName){})("nextQuestion");
//Edge symbol end:'nextQuestion'

//=========================================================

//Edge symbol: 'a2-1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
})("a2-1");
//Edge symbol end:'a2-1'

//=========================================================

//Edge symbol: 'a2-2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("a2-2");
//Edge symbol end:'a2-2'

//=========================================================

//Edge symbol: 'a2-3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("a2-3");
//Edge symbol end:'a2-3'

//=========================================================

//Edge symbol: 'a2-4'
(function(symbolName){})("a2-4");
//Edge symbol end:'a2-4'

//=========================================================

//Edge symbol: 'a3-1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12753,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("a3-1");
//Edge symbol end:'a3-1'

//=========================================================

//Edge symbol: 'a3-2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5842,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("a3-2");
//Edge symbol end:'a3-2'

//=========================================================

//Edge symbol: 'a3-3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("a3-3");
//Edge symbol end:'a3-3'

//=========================================================

//Edge symbol: 'a3-4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8310,function(sym,e){sym.stop();});
//Edge binding end
})("a3-4");
//Edge symbol end:'a3-4'

//=========================================================

//Edge symbol: 'a4-1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("a4-1");
//Edge symbol end:'a4-1'

//=========================================================

//Edge symbol: 'a4-2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.stop();});
//Edge binding end
})("a4-2");
//Edge symbol end:'a4-2'

//=========================================================

//Edge symbol: 'a4-3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5292,function(sym,e){sym.stop();});
//Edge binding end
})("a4-3");
//Edge symbol end:'a4-3'

//=========================================================

//Edge symbol: 'a4-4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8297,function(sym,e){sym.stop();});
//Edge binding end
})("a4-4");
//Edge symbol end:'a4-4'

//=========================================================

//Edge symbol: 'a5-1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",675,function(sym,e){sym.stop();});
//Edge binding end
})("a5-1");
//Edge symbol end:'a5-1'

//=========================================================

//Edge symbol: 'a5-2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",616,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("a5-2");
//Edge symbol end:'a5-2'

//=========================================================

//Edge symbol: 'a5-3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",606,function(sym,e){sym.stop();});
//Edge binding end
})("a5-3");
//Edge symbol end:'a5-3'

//=========================================================

//Edge symbol: 'a5-4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",530,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("a5-4");
//Edge symbol end:'a5-4'

//=========================================================

//Edge symbol: 'a6-1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5065,function(sym,e){sym.stop();});
//Edge binding end
})("a6-1");
//Edge symbol end:'a6-1'

//=========================================================

//Edge symbol: 'a6-2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3905,function(sym,e){sym.stop();});
//Edge binding end
})("a6-2");
//Edge symbol end:'a6-2'

//=========================================================

//Edge symbol: 'a6-3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5178,function(sym,e){sym.stop();});
//Edge binding end
})("a6-3");
//Edge symbol end:'a6-3'

//=========================================================

//Edge symbol: 'a6-4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3703,function(sym,e){sym.stop();});
//Edge binding end
})("a6-4");
//Edge symbol end:'a6-4'

//=========================================================

//Edge symbol: 'a7-1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a7-1");
//Edge symbol end:'a7-1'

//=========================================================

//Edge symbol: 'a7-2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a7-2");
//Edge symbol end:'a7-2'

//=========================================================

//Edge symbol: 'a7-3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a7-3");
//Edge symbol end:'a7-3'

//=========================================================

//Edge symbol: 'a7-4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a7-4");
//Edge symbol end:'a7-4'

//=========================================================

//Edge symbol: 'a8-1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a8-1");
//Edge symbol end:'a8-1'

//=========================================================

//Edge symbol: 'a8-2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a8-2");
//Edge symbol end:'a8-2'

//=========================================================

//Edge symbol: 'a8-3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a8-3");
//Edge symbol end:'a8-3'

//=========================================================

//Edge symbol: 'a9-1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a9-1");
//Edge symbol end:'a9-1'

//=========================================================

//Edge symbol: 'a9-2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a9-2");
//Edge symbol end:'a9-2'

//=========================================================

//Edge symbol: 'a9-3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a9-3");
//Edge symbol end:'a9-3'

//=========================================================

//Edge symbol: 'a9-4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a9-4");
//Edge symbol end:'a9-4'

//=========================================================

//Edge symbol: 'a9-5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a9-5");
//Edge symbol end:'a9-5'

//=========================================================

//Edge symbol: 'virus_select_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1043,function(sym,e){sym.stop();});
//Edge binding end
})("virus_select_smb");
//Edge symbol end:'virus_select_smb'

//=========================================================

//Edge symbol: 'spyware_select_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1009,function(sym,e){sym.stop();});
//Edge binding end
})("spyware_select_smb");
//Edge symbol end:'spyware_select_smb'

//=========================================================

//Edge symbol: 'botnet_select_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1009,function(sym,e){sym.stop();});
//Edge binding end
})("botnet_select_smb");
//Edge symbol end:'botnet_select_smb'

//=========================================================

//Edge symbol: 'option1_text_smb'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_option1_text}","click",function(sym,e){if(optVirus=="true"){sym.$("option1_text").style.color="purple";}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2203,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4326,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6696,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("option1_text_smb");
//Edge symbol end:'option1_text_smb'

//=========================================================

//Edge symbol: 'option2_text_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4143,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6199,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8589,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("option2_text_smb");
//Edge symbol end:'option2_text_smb'

//=========================================================

//Edge symbol: 'option3_text_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6089,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("option3_text_smb");
//Edge symbol end:'option3_text_smb'

//=========================================================

//Edge symbol: 'moreInfo_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2576,function(sym,e){sym.stop();});
//Edge binding end
})("moreInfo_smb");
//Edge symbol end:'moreInfo_smb'

//=========================================================

//Edge symbol: 'mainMenu_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9467,function(sym,e){sym.stop();});
//Edge binding end
})("mainMenu_smb");
//Edge symbol end:'mainMenu_smb'

//=========================================================

//Edge symbol: 'scrollTextArea'
(function(symbolName){})("scrollTextArea");
//Edge symbol end:'scrollTextArea'

//=========================================================

//Edge symbol: 'scrollingTextBox_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();sym.$("correctText1Copy8").html("The correct answer <span style='font-family: GothamMedium; color: #262262;'>is anywhere, as long as you are aware of your surroundings.</span> While in public, make every attempt to protect classified information by minimizing the amount of classified information discussed, restricting comments to yes/no answers and covering your mouth when speaking.</br><span style='font-family:GothamMedium'>Operational Security Tips! What should you consider when making your call?</span><ul><li>Be aware of your surroundings and always consider an adversary’s ability to:</li><ul><li>covertly filter and amplify voice;</li><li>observe from a distance or use technical tools such as video to facilitate lip reading and the entering or displaying of information on the secure phone; and</li><li>employ traditional espionage tradecraft such as bugging hotel rooms, airplanes, automobiles, or meeting rooms.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1370,function(sym,e){sym.stop();sym.$("correctText1CopyaMili").html("<ul><li>Pay attention to the correct method of communication – ensure your device is in secure mode prior to communicating sensitive information.</li><li>Don’t discuss with conference attendees that you have to phone your manager for important business.</li><li>Be circumspect when communicating with your boss. Save the details for when you get back in the office.</li><li>Don’t lend your secure phone to anybody.</li></ul>");});
//Edge binding end
})("scrollingTextBox_smb");
//Edge symbol end:'scrollingTextBox_smb'

//=========================================================

//Edge symbol: 'virusSelector_smb'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_virusBtn}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7155,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10135,function(sym,e){sym.stop();});
//Edge binding end
})("virusSelector_smb");
//Edge symbol end:'virusSelector_smb'

//=========================================================

//Edge symbol: 'spySelector_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6857,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9065,function(sym,e){sym.stop();});
//Edge binding end
})("spySelector_smb");
//Edge symbol end:'spySelector_smb'

//=========================================================

//Edge symbol: 'botSelector_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6857,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9940,function(sym,e){sym.stop();});
//Edge binding end
})("botSelector_smb");
//Edge symbol end:'botSelector_smb'

//=========================================================

//Edge symbol: 'scrollingTextbBox2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();sym.$("Text3").html("<span style='font-family:GothamMedium'>Operational Security Tips! What should you consider when making your call?</span><ul><li>Be aware of your surroundings and always consider an adversary’s ability to:</li><li>covertly filter and amplify voice;</li><li>observe from a distance or use technical tools such as video to facilitate lip reading and the entering or displaying of information on the secure phone; and</li><li>employ traditional espionage tradecraft such as bugging hotel rooms, airplanes, automobiles, or meeting rooms.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1370,function(sym,e){sym.stop();sym.$("Text3Copy").html("<ul><li>Pay attention to the correct method of communication – ensure your device is in secure mode prior to communicating sensitive information.</li><li>Don’t discuss with conference attendees that you have to phone your manager for important business.</li><li>Be circumspect when communicating with your boss. Save the details for when you get back in the office.</li><li>Don’t lend your secure phone to anybody.</li></ul>");});
//Edge binding end
})("scrollingTextbBox2");
//Edge symbol end:'scrollingTextbBox2'

//=========================================================

//Edge symbol: 'a7-5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2456,function(sym,e){sym.stop();});
//Edge binding end
})("a7-5");
//Edge symbol end:'a7-5'

//=========================================================

//Edge symbol: 'next_btn_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",981,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6250,function(sym,e){sym.stop();});
//Edge binding end
})("next_btn_smb");
//Edge symbol end:'next_btn_smb'

//=========================================================

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

//Edge symbol: 'ScrollingTextBox'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",305,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Text11").html("La bonne réponse était de <span style='font-family: GothamMedium; color: #262262;'>demander à votre gestionnaire s’il est l’auteur du message.</span><br><br>Une activité suspecte pourrait indiquer qu’un pirate informatique a réussi à s’infiltrer dans le réseau.<br><br>Les conseils de sécurité suivants vous permettront d’utiliser les médias sociaux en toute sécurité :<ul><li>Lorsque vous utilisez les comptes de médias sociaux ministériels, assurez-vous d’avoir lu et compris les politiques en matière de médias sociaux de votre organisme.</li><li>Veillez à ce que les renseignements administratifs affichés aient été approuvés aux fins de diffusion.</li></ul>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.$("Text11Copy").html("<ul><li>Dans la mesure du possible, ne publiez pas votre adresse électronique professionnelle dans les documents ou sur Internet.</li><li>Assurez-vous que les options de sécurité et de protection offertes ont bien été configurées.</li><li>Signalez les événements suspects à la direction de la sécurité des TI de votre ministère.</li></ul>");});
//Edge binding end
})("ScrollingTextBox");
//Edge symbol end:'ScrollingTextBox'
})(jQuery,AdobeEdge,"EDGE-26513215");