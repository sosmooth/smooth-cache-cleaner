function hello(){
	alert('hello josh');
}

chrome.browserAction.onClicked.addListener(function(tab){
	hello();
})

