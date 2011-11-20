class MyController
	get: (req, res) ->
		res.template "views/templates/page.html"
		
	post: (req, res) ->
		res.text "hello from post"

exports.MyController = MyController
