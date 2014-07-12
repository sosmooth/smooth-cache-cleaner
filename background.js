function cleanCache(tab){
	$('document').ready(function(tab){
	var tab_url = tab.url ;
	/*
		Check if current tab  url is among specified url
		...
	*/ 
	alert('hello joe');
	var millisecondPerWeek = 1000 * 60 * 60 * 24 * 7 ;
	var oneWeekAgo = (new Date()).getTime() - millisecondPerWeek;

	$('#submit').click(function(){
		console.log('con japhet');
		alert('con');
	});

	var val = $('#since').val();
	console.log('con japhet');
	alert('con');
	// chrome.browsingData.removeCache({}, callback);
	})
}

chrome.browserAction.onClicked.addListener(function(tab){
	alert('josh');
	// $('#since').change(function(){
	// 	var val = $('#since').val();
	// 	alert(val);
	// })
});

