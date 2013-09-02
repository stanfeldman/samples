window.Notifier = window.Notifier || {};
Notifier.show = function(id, str, callback, errback){
	if(!callback)
		callback = function(){};
	if(!errback)
		errback = function(){};
	cordova.exec(callback, errback, "Notifier", "show", [id, str]);
}

Notifier.hide_all = function(callback, errback){
	if(!callback)
		callback = function(){};
	if(!errback)
		errback = function(){};
	cordova.exec(callback, errback, "Notifier", "hide_all", []);
}

Notifier.on_click = function(id, callback){
	cordova.exec(function(msg){
		callback(msg);
		Notifier.on_click(id, callback);
	}, null, "Notifier", "on_click", [id]);
}

Notifier.set_badge = function(num, callback, errback){
	if(!callback)
		callback = function(){};
	if(!errback)
		errback = function(){};
	cordova.exec(callback, errback, "Notifier", "set_badge", [num]);
}