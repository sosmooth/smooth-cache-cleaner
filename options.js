$('document').ready(function(){
	var options = {};
	// Catching click event
	$('#submit').click(function(){
		
		$('.checkbox input').each(function(){
			var self = $(this);
			if(self.is(':checked')){ //If options checked
				var name = self.attr('name');
				options[name] = true;
			}
		})
		console.log(options);
	})
})