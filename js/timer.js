// JavaScript Document

var countDownCount;
var timeOutCounter;

function timerStart()
	{
		countDownToTimeoutStop();
		timeOutCounter=setTimeout(timerEnd, 120000);
	}

function timerStop()
	{
		clearTimeout(timeOutCounter);
		countDownToTimeoutStop();
	}
	
function timerReset()
	{
		countDownToTimeoutStop();
		clearTimeout(timeOutCounter);
		timeOutCounter=setTimeout(timerEnd, 120000);
	}
	
function timerEnd()	
	{
		$('.output').append('<strong>Count Down has Ended</strong><br>');		
		
		window.countDownCount=20;
		$('.countDownTimer').html(window.countDownCount);
		countDownToTimeoutStop();
		window.countDownTimer=setInterval(function(){countDownToTimeout()},1000);
		$('#timeoutBox').fadeIn();		
	}

function countDownToTimeoutStop() 
	{	
		window.clearInterval(window.countDownTimer);
		$('#timeoutBox').fadeOut();	
	}
	
function countDownToTimeout()
	{
		window.countDownCount = window.countDownCount-1;
		$('.countDownTimer').html(window.countDownCount);
		
		if (window.countDownCount<1) {
			appTimeOut();
			document.getElementById('contentContainer').src = "language_select.html";			
		}
	}