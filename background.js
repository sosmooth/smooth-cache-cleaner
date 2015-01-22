/*test function*/
function hello(){
	return "hello ^_^" ;
} 

/*
	Cleaning notification
*/ 
var callback = function notify(){
	alert("Cache successfully cleared");
}

/*
	Array of period in millisecond
*/ 
var millisecondPer = {
	'ten_minutes': 1000 * 60 * 10,
	'half_hour': 1000 * 60 * 30,
	'hour': 1000 * 60 * 60, 
	'day': 1000 * 60 * 60 * 24,
	'week': 1000 * 60 * 60 * 24 * 7,
	'ever': 0
}

/*
	Array of period
*/ 
var period = {
	'ten_minutes': getPeriod(millisecondPer['ten_minutes']),
	'half_hour': getPeriod(millisecondPer['half_hour']),
	'hour': getPeriod(millisecondPer['hour']),
	'day': getPeriod(millisecondPer['day']),
	'week': getPeriod(millisecondPer['week']),
	'ever': getPeriod(millisecondPer['ever'])
}

/*
	Return lapse time from now according 
*/ 
function getPeriod(period){
	return (new Date()).getTime() - period; 
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