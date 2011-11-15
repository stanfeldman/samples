db = require('riak-js').getClient()

db.save('webinars', 'node.js', { presenter: "stas", title: "it's cool" })
