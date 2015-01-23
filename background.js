/*
	Cleaning notification
*/ 
var callback = function notify(){
	alert("Cache successfully cleared");
}

/*
	Clear the cache according to the specified period
*/ 
function clearCache(p){
	 
 	elapsed_time = period[p] ;

 	// Cleaning the cache
 	chrome.browsingData.removeCache(
 		{"since": elapsed_time}, 
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