window.Notifier = window.Notifier || {};
Notifier.show = function(id, title, text, callback, errback){
	if(!callback)
		callback = function(){};
	if(!errback)
		errback = function(){};
	cordova.exec(callback, errback, "Notifier", "show", [id, title, text]);
}
