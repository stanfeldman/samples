$('#main_page').live('pagecreate',function(event)
{
	document.addEventListener("deviceready", device_info, true);
});

function device_info()
{
	$("#platform").html("Платформа: " + device.platform);
	$("#version").html("Версия: " + device.version);
	$("#uuid").html("Id: " + device.uuid);
	$("#name").html("Название: " + device.name);
	$("#width").html("Ширина: " + screen.width);
	$("#height").html("Высота: " + screen.height);
}

function on_error(error) {
	navigator.notification.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function beep()
{
	navigator.notification.beep(1);
}

function vibrate()
{
	navigator.notification.vibrate(0);
}

function locate()
{
	var on_success = function(position) {
		navigator.notification.alert
			('Latitude: '          + position.coords.latitude          + '\n' +
	         'Longitude: '         + position.coords.longitude         + '\n' +
	         'Altitude: '          + position.coords.altitude          + '\n' +
	         'Accuracy: '          + position.coords.accuracy          + '\n' +
	         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
	         'Heading: '           + position.coords.heading           + '\n' +
	         'Speed: '             + position.coords.speed             + '\n' +
	         'Timestamp: '         + new Date(position.timestamp)      + '\n');
	};
	navigator.geolocation.getCurrentPosition(on_success, on_error);
}