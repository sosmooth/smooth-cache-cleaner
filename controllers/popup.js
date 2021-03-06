$('document').ready(function(){

	////////////////////////////////////////////////////////////////////////////////
	////						Non Event Functions
	///////////////////////////////////////////////////////////////////////////////
	/*
		Convert a value to millisecond according to the type passed
	*/
	function convert_to_milliseconds(value, type){
		// value = parseInt(value);
		if (type === 'days') {
			return !isNaN(parseInt(value)) ? 1000 * 60 * 60 * 24 * value : 0 ;
		}
		else if (type === 'hours'){
			return !isNaN(parseInt(value)) ? 1000 * 60 * 60 * value : 0 ;
		}
		else if (type === 'min'){
			return !isNaN(parseInt(value)) ? 1000 * 60 * value : 0;
		}
		else{
			return !isNaN(parseInt(value)) ? 1000 * value : 0 ;
		}
	}

	/*
		Translate page according to the selected language
	*/ 
	function translate(id){
		var path = '../_locales/'+id+'/translation.json'
		$.getJSON(path, function(data){
			if ( id == 'ara'){
				// Option page
				$('.checkbox label').each(function(){
					var self = $(this);
					var input = $(this).find('input');
					var p = $(this).find('p');
					var copy_p = p ;
					p.remove();
					
					input.before(copy_p);

				})

				$('.checkbox').css({"text-align":"right"});
				$('#checkbox_left').css({"margin-left": "0"});
				$('.checkbox_right').css({"margin-right":"12%"});

				$('#formdata').css({"position":"relative","right":"5px","margin-left":"8px"});
				$('#passwords').css({"position":"relative","right":"4px","margin-left":"8px"});

				// Main page
				$('#checkbox-cache-time label').each(function(){
					var self = $(this);
					var input = $(this).find('input');
					var span = $(this).find('span');
					var copy_span = span ;
					span.remove();

					input.before(copy_span);
				});
				
			}
			else {
				// Options page
				$('.checkbox label').each(function(){
					var self = $(this);
					var input = $(this).find('input');
					var p = $(this).find('p');
				
					if (  p.index() < input.index() ){
						var cp = p ;
						p.remove();
						input.after(cp);

						$('.checkbox').css({"text-align":""});
						$('#checkbox_left').css({"margin-left": "12%"});
						$('.checkbox_right').css({"margin-right":"0"});

						$('#txt_formdata').css({"position":"relative","right":"4px"});
						$('#txt_passwords').css({"position":"relative","right":"4px"});
					}

				})

				// Main page
				$('#checkbox-cache-time label').each(function(){
					var self = $(this);
					var input = $(this).find('input');
					var span = $(this).find('span');
					console.log(input);
					if ( span.index() < input.index()){
						var cspan = span ;
						span.remove() ;
						input.after(span) ;

					}
					
				})

			}
			$.each(data, function(key, val){
				$('#'+key).text(val);
			})
		});
	}

	// Function Everywhere
	window.translate = translate ;
	window.convert_to_milliseconds = convert_to_milliseconds ;
	///////////////////////////////////////////////////////////////////////////////

	// Cache la div dès que le DOM est prêt
	$('#container_options, #span_days, #span_hours, #span_min, #span_sec').hide();

	// Affiche les span d'informations on:hover sur input 
	$( '#days, #hours, #min, #sec' ).hover(
  		function() {
    		//$( this ).append( $( "<span> ***</span>" ) );
    		var self = $(this);
			var name = self.attr('name');

    		if (  name == 'days'){
			 	$('#span_days').show();
		 	}
			 else if ( name == 'hours'){
			 	$('#span_hours').show();
			 }
			 else if ( name == 'min'){
			 	$('#span_min').show();
			 }
			 else {
			 	$('#span_sec').show();
			 }
  		}, 
  		function() {
    		$('#span_days').hide();
    		var self = $(this);
			var name = self.attr('name');

    		if (  name == 'days'){
			 	$('#span_days').hide();
		 	}
			 else if ( name == 'hours'){
			 	$('#span_hours').hide();
			 }
			 else if ( name == 'min'){
			 	$('#span_min').hide();
			 }
			 else {
			 	$('#span_sec').hide();
			 }
  		}
	);

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
		var val = parseInt(self.val());
		var name = self.prop('name');
		var max = parseInt(self.attr('max'));
		var min = parseInt(self.attr('min'));

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
		if ( $(this).val() === '' )
			$(this).val($(this).attr('max'));
	})

	/*
		Handle behaviour when no time limit checked
	*/ 
	$('#all-time').change(function(){
		if ($(this).is(":checked")){
			$('#days').val('¤¤¤');
			$('#hours, #min, #sec').val('¤¤');
		}
		else{
			$('#days, #hours, #min, #sec').each(function(){
				$(this).val($(this).attr('max'));
			})
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
	$(".flags img").click(function(){
		var self = $(this);
		var id = self.attr('id');
		translate(id);
		caches_pref['lang'] = id ;
	})

	/*
		Cleaning action
	*/ 
	$('#submit').click(function(){

		/*
			Converts every inputs in milliseconds
		*/
		total_time = 0 ;

		$('.inputs_home input').each(function(){
			self = $(this);
			total_time = total_time + convert_to_milliseconds(self.val(), self.attr('name'));
		})
		
		console.log("clear since : "+total_time);

		/*
			Gets all caches checked and insert them into a array.
			That array represents all the caches to be cleaned
		*/
		var caches_list = {}

		// Fetch all caches and their status
		$('.checkbox input').each(function(){
			var self = $(this);
			var name = self.attr('name');
			if( name !== 'all-cache'){
				caches_list[name] = self.is(':checked') ? true : false ;
			}
		});
		

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