/*
	Cleaning notification
*/ 
var callback = function notify(){
	alert("Cache successfully cleared");
}

/*
	Get lapse time from now() according to the time passed
*/ 
function get_elapsed_time(period){
	return (new Date()).getTime() - period ; 
}

/*
	Clear the cache according to the specified period
*/ 
function clearCache(period, options){

	elapsed_time = get_elapsed_time(period);
 	// Cleaning the cache
 	chrome.browsingData.removeCache(
 		{"since": elapsed_time}, 
 		options,
 		callback
 	);

 	/*Message sender*/
 	// send <removeCache> return value to popup.js
 	chrome.extension.sendMessage(
 		{response: {'cache_clean': true}},
 		function(response){	
 			console.log(response);
 	}) 
}