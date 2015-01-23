$('document').ready(function(){

	/*
		Convert a value to millisecond according to the type passed
	*/
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

	/*
		Prevent user to insert string characters in the inputs
	*/
	$('.days, .hours, .min, .sec').keyup(function(){
		var self = $(this)
		var val = self.val();
		var name = self.prop('name')

		self.val(val.replace(/\D/, ''));
	})

	/*
		Handle Check/UnCheck of all caches
	*/
	$('#all-cache').change(function(){
		if ($(this).is(':checked')){
			$('input[type=checkbox]').each(function(){
				var self = $(this);
				if(self.val() != 'all-time')
					self.prop('checked',true);
			})	
		}	
		else{
			$('input[type=checkbox]').each(function(){
				var self = $(this);
				if(self.val() != 'all-time')
					self.prop('checked',false);
			})
		}
	})

	$('#submit').click(function(){
		// var val = $('#since').val();

		/*
			Converts every inputs in milliseconds
		*/
		var days = convert_to_milliseconds($('.days').val(), 'day');
		var hours = convert_to_milliseconds($('.hours').val(), 'hour');
		var mins = convert_to_milliseconds($('.min').val(), 'min');
		var sec = convert_to_milliseconds($('.sec').val(), 'sec');

		var total_time = days + hours + mins + sec ;
		
		console.log(" clear since : "+total_time);

		var caches_to_clean = {}

		/*
			Gets all caches checked and insert them into a array.
			That array represents all the caches to be cleaned
		*/
		$('.checkbox input').each(function(){
			var self = $(this);
			var name = self.attr('name');
			if( name !== 'all-cache'){
				if(self.is(':checked'))
					caches_to_clean[name] = true ;
				else
					caches_to_clean[name] = false ;
			}
		})

		console.log(caches_to_clean);

		// The function below calls the function <clearCache>
		// from background.js
		
		// chrome.extension.getBackgroundPage().clearCache();

		/*Message listener*/
		// listen to messages coming from <background.js>
		
		// chrome.extension.onMessage.addListener(
		// 	function(request, sender, sendResponse){
		// 		if (request.response){
		// 			response = request.response;
		// 			console.log(request, sender);
		// 			//Sending a response back
		// 			sendResponse({success: 200}); 
		// 		}
		// }) 
	});
});