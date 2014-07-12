$('documdnt').ready(function(){
	$('#submit').click(function(){
		var val = $('#since').val();
		// The function below call the function <clearCache>
		// from background.js
		chrome.extension.getBackgroundPage().clearCache(val);
	});
});