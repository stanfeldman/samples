require [
	"/scripts/jquery.c.js",
	"/scripts/counter_model.c.js", 
	"/scripts/bony/controller.c.js",
	"/scripts/counter_view.c.js"], ->
	$(document).ready ->
		model = new CounterModel()
		controller = new bony.Controller("model": model)
		button_view = new CounterButtonView("controller": controller)
		$("#counter").append button_view.render(), button_view.render()
		console.log "main script loaded"
