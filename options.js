$('document').ready(function(){
	// Catching click event
	$('#submit').click(function(){
		ck = $('.checkbox');
		// console.log(ck)
		$('.checkbox input').each(function(){
			var self = $(this);
			if(self.is(':checked')){
				console.log(self.attr('name') + ' is checked');
			}
		})
	})
})