riak = require "riak-js"
fs = require "fs"

console.time "riak connect"
db = riak.getClient({host: "127.0.0.1", port: "8098"})
console.timeEnd "riak connect"
console.time "riak exists"
#save json
db.exists "test", "doc", (exists_err, exists_res) ->
	if exists_err
		throw exists_err
	console.timeEnd "riak exists"
	if exists_res
		console.time "riak get"
		db.get "test", "doc", (get_err, get_res) ->
			if get_err
				throw get_err
			console.timeEnd "riak get"
			console.log get_res
			console.time "riak remove"
			db.remove "test", "doc", (remove_err) ->
				if remove_err
					throw remove_err
				console.timeEnd "riak remove"
	else
		console.time "riak save"
		db.save "test", "doc", {title: "super text", body: "lalalawoer"}, (save_err) ->
			if save_err
				throw save_err
			console.timeEnd "riak save"
# save binary
db.exists "test", "img", (exists_image_err, exists_image_res) ->
	if exists_image_err
		throw exists_image_err
	if exists_image_res
		console.time "riak image get"
		db.get "test", "img", (get_image_err, get_image_res) ->
			if get_image_err
				throw get_image_err
			console.timeEnd "riak image get"
			fs.writeFile "/home/stanislavfeldman/images/riak2.png", get_image_res, (image_err) ->
				if image_err
					throw image_err	
			console.time "riak image remove"
			db.remove "test", "img", (remove_err) ->
				if remove_err
					throw remove_err
				console.timeEnd "riak image remove"
	else
		console.time "riak image save"
		fs.readFile "/home/stanislavfeldman/images/riak.png", "binary", (image_err, image) ->
			if image_err
				throw image_err
			db.save "test", "img", image, {contentType: "image/png", immediateAction: 'fire'}, (save_err) ->
				if save_err
					throw save_err
				console.timeEnd "riak image save"
