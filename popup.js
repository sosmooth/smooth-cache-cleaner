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

	// Cache la div dès que le DOM est prêt
	$('#container_options').hide();

	// Effet de déplacement de la div
	$('#gearing-options').click(function() {
		$('#container_options').toggle(400);
		$('#container').toggle(400);
		return false;
	});

	$('#gearing-home').click(function() {
		$('#container').toggle(400);
		$('#container_options').toggle(400);;
		return false;
	});

	/*
		Prevent user to insert string characters in the inputs
	*/
	$('#days, #hours, #min, #sec').keyup(function(){
		var self = $(this);		// var val = parseInt(self.val());
		var val = self.val();
		var name = self.prop('name');
		var max = self.attr('max');
		var min = self.attr('min');

		// if ( isNaN(val)){
		// 	if (name == 'days')
		// 		self.val('000');
		// 	else
		// 		self.val('00')
		// }
		// else if (name == 'days' && val > 365 ){
		// 	self.val('000');
		// }
		// else if (name == 'hours' && val > 24 ){
		// 	self.val('00');
		// }
		// else if (name == 'min' && val > 60 ){
		// 	self.val('00');
		// }
		// else if (name == 'sec' && val > 60 ){
		// 	self.val('00');
		// }

		if ( isNaN(val)){
			self.val(min);
		}
		else if( val > max ) {
			self.val(max)
		}

		// self.val(val.replace(/\D/, ''));
	})

	/*
		Fill input when user select another input
	*/ 
	$('#days, #hours, #min, #sec').change(function(){
		var self = $(this);
		var val = self.val();
		var name = self.prop('name');

		if ( val === '' &&  name === 'days'){
			self.val('000');
		}

		if ( val === '' &&  name !== 'days'){
			self.val('00');
		}
	})

	/*
		Handle behaviour when no time limit checked
	*/ 
	$('#all-time').change(function(){
		if ($(this).is(":checked")){
			$('#days').val('###');
			$('#hours, #min, #sec').val('##');
		}
		else{
			$('#days').val('000');
			$('#hours, #min, #sec').val('00');
		}
	})

	/*
		Handle in/decrementation with key arrows
	*/ 
	$("#days, #hours, #min, #sec").keydown(function(event) {
		var self = $(this);
		var val = parseInt(self.val());
		var max = self.attr('max');

		if (event.keyCode == 38 && (val < max)) {
			self.val(val + 1);			
		}
		else if (event.keyCode == 40  && (val > 0)) {
			self.val(val - 1);
		}
		else {	}
	});

	/*
		Handle in/decrementation with key mouse
	*/ 
	$("#days, #hours, #min, #sec").bind("mousewheel", function(event, delta) {
		var delta = event.originalEvent.wheelDelta ;
		var self = $(this);
		var val = parseInt(self.val());
		var max = self.attr('max');

        if (delta > 0 && ( val < max )) {
            self.val( val + 1);
        } else {
            if (val > 0) {
                self.val( val - 1);;
            }
        }
        return false;
     });

	/* 
		Handle the fact that if a checkbox is unchecked
		the "ALL" checkbox get unchecked too
	*/ 
	$('input[type=checkbox]').change(function(){
		if ($(this).prop('checked') !== true && $(this).attr('name') !== 'all-cache' ){
			$('#all-cache').prop('checked',false);
		}
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

	/*
		Translation hanlder
	*/ 
	$("#fr, #en, #chi, #por, #ger, #spa").click(function(){
		var self = $(this);
		var id = self.attr('id');
		var path = '_locales/'+id+'/translation.json'
		json_data = $.getJSON(path, function(data){
			console.log(data);
			$.each(data, function(key, val){
				$('#'+key).text(val);
			})
		});
	})

	$('#submit').click(function(){

		/*
			Converts every inputs in milliseconds
		*/
		var days = convert_to_milliseconds($('#days').val(), 'day');
		var hours = convert_to_milliseconds($('#hours').val(), 'hour');
		var mins = convert_to_milliseconds($('#min').val(), 'min');
		var sec = convert_to_milliseconds($('#sec').val(), 'sec');

		var total_time = days + hours + mins + sec ;
		
		console.log("clear since : "+total_time);

		var caches_list = {}

		/*
			Gets all caches checked and insert them into a array.
			That array represents all the caches to be cleaned
		*/
		$('.checkbox input').each(function(){
			var self = $(this);
			var name = self.attr('name');
			if( name !== 'all-cache'){
				if(self.is(':checked'))
					caches_list[name] = true ;
				else
					caches_list[name] = false ;
			}
		})

		console.log(caches_list);
		console.log(total_time);

		// The function below calls the function <clearCache>
		// from background.js
		
		chrome.extension.getBackgroundPage().clearCache(total_time, caches_list);

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