$('document').ready(function(){
	var options = {};
	getUserPreferences(options);
	$('#submit').click(function(){
		
		$('.checkbox input').each(function(){
			var self = $(this);
			var name = self.attr('name');
			if(self.is(':checked')){ //If options checked
				options[name] = true;
			}
			else{
				options[name] = false;
			}
			setUserPreferences(options);
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