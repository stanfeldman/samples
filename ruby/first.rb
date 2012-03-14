puts "hi, stas"
def hello(name)
	puts "hello, #{name}"
end
hello("world")

class Greeter
	def initialize(name="world")
		@name = name
	end
	def say_hi()
		puts "hi, #{@name}"
	end
end
g = Greeter.new "Boris"
g.say_hi

class Greeter
	attr_accessor :name
end
puts g.name

class MegaGreeter
	def initialize(names="World")
		@names = names
	end
	def say_hi()
		if @names.nil?
			puts "..."
		elsif @names.respond_to?("each")
			@names.each do |name|
				puts "Hello, #{name}"
			end
		else
			puts "Hello, #{@names}"
		end
	end
	attr_accessor :names
end

if __FILE__ == $0
	mg = MegaGreeter.new
	mg.say_hi
	mg.names = ["Boris", "Ivan"]
	mg.say_hi
end
