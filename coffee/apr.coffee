Apricot = require('apricot').Apricot
ahtm = """
<script type="text/javascript" src="/js/js1.js"></script>
<p id='test'>A simple <b>test</b> string. <b>Nothing to worry about</b></p>
"""
#console.log ahtm
Apricot.parse ahtm, (err, doc) ->
	found = doc.find 'script'
	doc.each (el) ->
		console.log el.src
	doc.remove()
	#console.log doc.toHTML
