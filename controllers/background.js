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
	return period !== 0 ? (new Date()).getTime() - period : 0 ; 
}

/*
	Clear the cache according to the specified period
*/ 
function clearCache(period, options){
    console.log(period);
    elapsed_time = parseInt(get_elapsed_time(period));
    console.log(elapsed_time);
    // Cleaning the cache
    chrome.browsingData.remove(
        {"since": elapsed_time}, 
        options,
        callback
 	);

 	/*Message sender*/
 	// send clearCache> return value to popup.js
 	chrome.extension.sendMessage(
 		{response: {'cache_clean': true}},
 		function(response){	
 			console.log(response);
 	}) 
}