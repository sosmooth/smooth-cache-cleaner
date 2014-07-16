$('document').ready(function(){
	var options = {};
	
	$('#submit').click(function(){
		
		$('.checkbox input').each(function(){
			var self = $(this);
			if(self.is(':checked')){ //If options checked
				var name = self.attr('name');
				options[name] = true;
				setUserPreferences(options);
				getUserPreferences(options);
			}
		})
	})

	/*
		Load user preferences when on option page
	*/ 
	function loadUserPreferences(){
		options = getUserPreferences();
	}

	/*
		Save user preferences
	*/ 
	function setUserPreferences(options){
		chrome.storage.sync.set(options, function(){ 
			// Maybe send a signal or something
			console.log('saved');
			message('Setting saved');
		});
	}

	/*
		Get user preferences
	*/ 
	function getUserPreferences(){
		chrome.storage.sync.get(function(items){
			// Do something with those items i.e items.cache
			console.log(items);
			return items;
		});
	}
})