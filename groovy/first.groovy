class Greet
{
	Greet(who) { name = who }
	
	def hello()
	{
		println "Hello, $name"
	}
	
	def name
}

g = new Greet("Stas")
g.hello()
