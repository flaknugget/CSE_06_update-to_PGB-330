// JavaScript Document

	var gaPlugin;      
			
			

			
		
		
		
			
// Functions to track specific button clicks	
/* window.top.enMenuTravelClick(); */

/* Button Clicks to be Tracked followed by their unique function name.

English - Main Menu - Hotel Lobby (travel)								enMenuTravelClick
English - Hotel Lobby (travel) - Best Practices							enTravelBestPracticesClick			
English - Hotel Lobby (travel) - Best Practices - IT Practicioners		enTravelBestPracticeITPractionersClick
English - Hotel Lobby (travel) - Best Practices - Managers				enTravelPracticeManagersClick
English - Hotel Lobby (travel) - Best Practices - General Public		enTravelPracticeGeneralPublicClick

English - Main Menu - Airport (Wi-Fi)									enMenuWifiClick
English - Airport (Wi-Fi) - Best Practices								enWifiClickBestPracticeClick
English - Airport (Wi-Fi) - Best Practices - IT Practicioners			enWifiClickBestPracticeITPractionersClick
English - Airport (Wi-Fi) - Best Practices - Managers					enWifiClickBestPracticeManagersClick
English - Airport (Wi-Fi) - Best Practices - General Public				enWifiClickBestPracticeGeneralPublicClick

English - Main Menu - Café (Social Media)								enMenuSocialMediaClick
English - Café (Social Media) - Best Practices							enSocialMediaBestPracticeClick
English - Café (Social Media) - Best Practices - IT Practicioners		enSocialMediaBestPracticeITPractionersClick
English - Café (Social Media) - Best Practices - Managers				enSocialMediaBestPracticeManagersClick
English - Café (Social Media) - Best Practices - General Public			enSocialMediaBestPracticeGeneralPublicClick

English - Main Menu - Survey								enMenuSurveyClick
English - Survey - Submit Button Click						enSurveySubmitClick

English - Main Menu - Quiz									enMenuQuizClick
English - Quiz - Quiz Finished								enQuizFinishedClick


French - Main Menu - Hotel Lobby (travel)								frMenuTravelClick
French - Hotel Lobby (travel) - Best Practices							frTravelBestPracticesClick			
French - Hotel Lobby (travel) - Best Practices - IT Practicioners		frTravelBestPracticeITPractionersClick
French - Hotel Lobby (travel) - Best Practices - Managers				frTravelPracticeManagersClick
French - Hotel Lobby (travel) - Best Practices - General Public			frTravelPracticeGeneralPublicClick

French - Main Menu - Airport (Wi-Fi)									frMenuWifiClick
French - Airport (Wi-Fi) - Best Practices								frWifiClickBestPracticeClick
French - Airport (Wi-Fi) - Best Practices - IT Practicioners			frWifiClickBestPracticeITPractionersClick
French - Airport (Wi-Fi) - Best Practices - Managers					frWifiClickBestPracticeManagersClick
French - Airport (Wi-Fi) - Best Practices - General Public				frWifiClickBestPracticeGeneralPublicClick

French - Main Menu - Café (Social Media)								frMenuSocialMediaClick
French - Café (Social Media) - Best Practices							frSocialMediaBestPracticeClick
French - Café (Social Media) - Best Practices - IT Practicioners		frSocialMediaBestPracticeITPractionersClick
French - Café (Social Media) - Best Practices - Managers				frSocialMediaBestPracticeManagersClick
French - Café (Social Media) - Best Practices - General Public			frSocialMediaBestPracticeGeneralPublicClick

French - Main Menu - Survey									frMenuSurveyClick
French - Survey - Submit Button Click						frSurveySubmitClick

French - Main Menu - Quiz									frMenuQuizClick
French - Quiz - Quiz Finished								frQuizFinishedClick

*/


			


			// Specific English Event Tracking Functions
			
			function appTimeOut() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Application Timeout - Return to Language Select", "Click", "Click Event", 1);
			}
			
			
			function enMenu() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu", "Click", "Click Event", 1);
			}
			function enMenuTravelClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Hotel Lobby (travel)", "Click", "Click Event", 1);
			}
			function enTravelBestPracticesClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Hotel Lobby (travel) - Best Practices", "Click", "Click Event", 1);
			}
			function enTravelBestPracticeITPractionersClick() {		
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Hotel Lobby (travel) - Best Practices - IT Practicioners", "Click", "Click Event", 1);
			}
			function enTravelPracticeManagersClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Hotel Lobby (travel) - Best Practices - Managers", "Click", "Click Event", 1);
			}
			function enTravelPracticeGeneralPublicClick() {	
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Hotel Lobby (travel) - Best Practices - General Public", "Click", "Click Event", 1);
			}
			
			
			function enMenuWifiClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Airport (Wi-Fi)", "Click", "Click Event", 1);
			}
			function enWifiClickBestPracticeClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Airport (Wi-Fi) - Best Practices", "Click", "Click Event", 1);
			}
			function enWifiClickBestPracticeITPractionersClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Airport (Wi-Fi) - Best Practices - IT Practicioners", "Click", "Click Event", 1);
			}
			function enWifiClickBestPracticeManagersClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Airport (Wi-Fi) - Best Practices - Managers", "Click", "Click Event", 1);
			}
			function enWifiClickBestPracticeGeneralPublicClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Airport (Wi-Fi) - Best Practices - General Public", "Click", "Click Event", 1);
			}
			
			
			function enMenuSocialMediaClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Café (Social Media)", "Click", "Click Event", 1);
				
			}
			function enSocialMediaBestPracticeClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Café (Social Media) - Best Practices", "Click", "Click Event", 1);
			}
			function enSocialMediaBestPracticeITPractionersClick() {
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Café (Social Media) - Best Practices - IT Practicioners", "Click", "Click Event", 1);
			}
			function enSocialMediaBestPracticeManagersClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Café (Social Media) - Best Practices - Managers", "Click", "Click Event", 1);
			}
			function enSocialMediaBestPracticeGeneralPublicClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Café (Social Media) - Best Practices - General Public", "Click", "Click Event", 1);
			}
			
			
			function enMenuSurveyClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Survey", "Click", "Click Event", 1);
			}
			function enSurveySubmitClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Survey - Submit Button Click", "Click", "Click Event", 1);
			}
			function enMenuQuizClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Quiz", "Click", "Click Event", 1);
			}
			function enQuizFinishedClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "English - Quiz - Quiz Finished", "Click", "Click Event", 1);
			}
			
			
			// Specific French Event Tracking Functions
			function frMenu() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu", "Click", "Click Event", 1);
			}
			function frMenuTravelClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Hotel Lobby (travel)", "Click", "Click Event", 1);
			}
			function frTravelBestPracticesClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Hotel Lobby (travel) - Best Practices", "Click", "Click Event", 1);
			}
			function frTravelBestPracticeITPractionersClick() {		
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Hotel Lobby (travel) - Best Practices - IT Practicioners", "Click", "Click Event", 1);
			}
			function frTravelPracticeManagersClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Hotel Lobby (travel) - Best Practices - Managers", "Click", "Click Event", 1);
			}
			function frTravelPracticeGeneralPublicClick() {	
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Hotel Lobby (travel) - Best Practices - General Public", "Click", "Click Event", 1);
			}
			
			
			function frMenuWifiClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Airport (Wi-Fi)", "Click", "Click Event", 1);
			}
			function frWifiClickBestPracticeClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Airport (Wi-Fi) - Best Practices", "Click", "Click Event", 1);
			}
			function frWifiClickBestPracticeITPractionersClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Airport (Wi-Fi) - Best Practices - IT Practicioners", "Click", "Click Event", 1);
			}
			function frWifiClickBestPracticeManagersClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Airport (Wi-Fi) - Best Practices - Managers", "Click", "Click Event", 1);
			}
			function frWifiClickBestPracticeGeneralPublicClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Airport (Wi-Fi) - Best Practices - General Public", "Click", "Click Event", 1);
			}
			
			
			function frMenuSocialMediaClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Café (Social Media)", "Click", "Click Event", 1);
			}
			function frSocialMediaBestPracticeClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Café (Social Media) - Best Practices", "Click", "Click Event", 1);
			}
			function frSocialMediaBestPracticeITPractionersClick() {
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Café (Social Media) - Best Practices - IT Practicioners", "Click", "Click Event", 1);
			}
			function frSocialMediaBestPracticeManagersClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Café (Social Media) - Best Practices - Managers", "Click", "Click Event", 1);
			}
			function frSocialMediaBestPracticeGeneralPublicClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Café (Social Media) - Best Practices - General Public", "Click", "Click Event", 1);
			}
			
			
			function frMenuSurveyClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Survey", "Click", "Click Event", 1);
			}
			function frSurveySubmitClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Survey - Submit Button Click", "Click", "Click Event", 1);
			}
			function frMenuQuizClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Quiz", "Click", "Click Event", 1);
			}
			function frQuizFinishedClick() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "French - Quiz - Quiz Finished", "Click", "Click Event", 1);
			}
			
			
// Page tracking functions
/*
Page - Language Select							LanguageSelectPage
English - Page - Main Menu						enMainMenuPage
English - Page - Hotel Lobby (travel)					enClickableTravelPage
English - Page - Airport (Wi-Fi)					enClickableWifiPage
English - Page - Café (Social Media)					enClickableSocialMediaPage
English - Page - Survey							enSurveyPage
English - Page - Survey	- Submit Thank You				enSurveyPageSubmitThankyou
English - Page - Quiz							enQuizPage
English - Page - Quiz - Submit Thank You				enQuizPageSubmitThankyou
English - Page - Services						enServicesPage


French - Page - Main Menu						frMainMenuPage
French - Page - Hotel Lobby (travel)					frClickableTravelPage
French - Page - Airport (Wi-Fi)						frClickableWifiPage
French - Page - Café (Social Media)					frClickableSocialMediaPage
French - Page - Survey							frSurveyPage
French - Page - Survey	- Submit Thank You				frSurveyPageSubmitThankyou
French - Page - Quiz							frQuizPage
French - Page - Quiz - Submit Thank You					frQuizPageSubmitThankyou
French - Page - Services						frServicesPage
*/
			
			
			function openAppPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "App Loaded");
			}

			function LanguageSelectPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "Page - Language Select");
			}
			
			//English Pages
			function enMainMenuPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Main Menu");
			}
			function enClickableTravelPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Hotel Lobby (travel)");
			}
			function enClickableWifiPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Airport (Wi-Fi)");
			}
			function enClickableSocialMediaPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Café (Social Media)");
			}
			function enSurveyPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Survey");
			}
			function enSurveyPageSubmitThankyou() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Survey	- Submit Thank You");
			}
			function enQuizPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Quiz");
			}
			function enQuizPageSubmitThankyou() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Quiz - Submit Thank You");
			}
			function enServicesPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Services");
			}
			
			//French Pages
			function frMainMenuPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Page - Main Menu");
			}
			function frClickableTravelPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Page - Hotel Lobby (travel)");
			}
			function frClickableWifiPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Page - Airport (Wi-Fi)");
			}
			function frClickableSocialMediaPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Page - Café (Social Media)");
			}
			function frSurveyPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Page - Survey");
			}
			function frSurveyPageSubmitThankyou() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Page - Survey	- Submit Thank You");
			}
			function frQuizPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Page - Quiz");
			}
			function frQuizPageSubmitThankyou() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Page - Quiz - Submit Thank You");
			}
			function frServicesPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Page - Services");
			}
			
			
			function nativePluginInitHandler() {   }
			
			function nativePluginResultHandler() {  }
			
			function nativePluginErrorHandler() { alert("analytics error"); }
