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

	/*************************************** A finir ****************************************************************/

	// Cache la div dès que le DOM est prêt
	$('#container_options').hide();

	// Affiche la div au clique sur l'engrenage (home)											
	$('#gearing-options').click(function() {
		$('#container').hide();
		$('#container_options').show();
		return false;
	});

	$('#gearing-home').click(function() {
		$('#container_options').hide();
		$('#container').show();
		return false;
	});

	// Effet de déplacement de la div
	$('#gearing-options').click(function() {
		$('#container_options').toggle(400);
		return false;
	});
	$('#gearing-home').click(function() {
		$('#container').toggle(400);
		return false;
	});

	/****************************************************************************************************************/

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