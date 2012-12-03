window.Plugin1 = window.Plugin1 || {};
Plugin1.first = function(str, callback, errback){
	cordova.exec(callback, errback, "phonegap_plugin.Plugins.Plugin1", "first", [str]);
}