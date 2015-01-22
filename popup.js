$('document').ready(function(){

	// Convertit les valeur recu en millisecondes
	function convert_to_milliseconds(value, type){
		if (type === 'day') {
			return 1000 * 60 * 60 * 24 * value ;
		}
		else if (type === 'hour'){
			return 1000 * 60 * 60 * value ;
		}
		else if (type === 'min'){
			return 1000 * 60 * value ;
		}
		else{
			return 1000 * value ;
		}
	}

	// $('.days').on('change', function(){
	$('.days').bind('change keyup input', function(){
		var self = $(this)
		var val = parseInt(self.val());

		if (val < 0 ){
			self.val('0');
		}
		else if (self > 365){
			self.val('365');
		}
		
	})

	$('#submit').click(function(){
		// var val = $('#since').val();

		var days = convert_to_milliseconds($('.days').val(), 'day');
		var hours = convert_to_milliseconds($('.hours').val(), 'hour');
		var mins = convert_to_milliseconds($('.min').val(), 'min');
		var sec = convert_to_milliseconds($('.sec').val(), 'sec');

		var total_time = days + hours + mins + sec ;
		
		console.log(" clear since : "+total_time);


		// The function below call the function <clearCache>
		// from background.js
		chrome.extension.getBackgroundPage().clearCache(total_time);

		/*Message listener*/
		// listen to messages coming from <background.js>
		chrome.extension.onMessage.addListener(
			function(request, sender, sendResponse){
				if (request.response){
					response = request.response;
					console.log(request, sender);
					//Sending a response back
					sendResponse({success: 200}); 
				}
		}) 
	});
});