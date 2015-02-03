$('document').ready(function(){
	
	var caches_list = {}
	$('.checkbox input').each(function(){
		var self = $(this);
		var name = self.attr('name');
		if( name !== 'all-cache'){
			caches_list[name] = false ;
		}
	});

	console.log(caches_list);



	/*
		Save Options
	*/ 
	function save_options(){
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
		});

		// Saving preferences 
		chrome.storage.sync.set(
			caches_list,
			function(){
				setTimeout(function(){
					alert('Preferences saved !');
				}, 500); // Wait 1/2 second
			}
		);
	}

	/*
		Restore options
	*/ 
	function restore_options(){
		chrome.storage.sync.get(
			caches_list,
			function(items){
				cache_options = items ; // getting options
				console.log(cache_options);
			}
		);
	}

	/*
		On click => save options
	*/ 
	$('#save').click(save_options)
})