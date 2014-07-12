/*
	Cleaning notification
*/ 
function notify(){
	alert("Cache successfully cleared");
}

/*
	Array of period in millisecond
*/ 
var millisecondPer = {
	'hour': 1000 * 60 * 60, 
	'day': 1000 * 60 * 60 * 24,
	'week': 1000 * 60 * 60 * 24 * 7
}

/*
	Array of period
*/ 
var period = {
	'hour': getPeriod(millisecondPer['hour']),
	'day': getPeriod(millisecondPer['day']),
	'week': getPeriod(millisecondPer['week']),
	'ever': 0,
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
	 // chrome.browsingData.removeCache(elapsed_time, notify);
	 alert("Cache successfully cleared");
}