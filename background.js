chrome.browserAction.onClicked.addListener(function(tab){
	var tab_url = tab.url ;
	/*
		Check if current tab  url is among specified url
		...
	*/ 

	var millisecondPerWeek = 1000 * 60 * 60 * 24 * 7 ;
	var oneWeekAgo = (new Date()).getTime() - millisecondPerWeek;

	// chrome.browsingData.removeCache({}, callback);
})

