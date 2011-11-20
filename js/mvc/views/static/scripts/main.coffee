require [
	"/scripts/jquery.c.js", 
	"/scripts/counter_model.c.js", 
	"/scripts/counter_controller.c.js",
	"/scripts/counter_view.c.js"], ->
	$(document).ready ->
		model = new CounterModel()
		controller = new CounterController("model": model)
		view = new CounterView("controller": controller)
		$("#counter").append view.render(), view.render()
		console.log "main script loaded"
