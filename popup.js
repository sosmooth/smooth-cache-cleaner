$('document').ready(function(){
	$('#submit').click(function(){
		var val = $('#since').val();
		// The function below call the function <clearCache>
		// from background.js
		chrome.extension.getBackgroundPage().clearCache(val);

		/*Message listener*/
		// listen to messages coming from <background.js>
		chrome.extension.onMessage.addListener(
			function(request, sender, sendResponse){
				if (request.response){
					response = request.response;
					console.log(response)
				}
		}) 
	});
});