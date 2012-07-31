x = 555
puts "hi, num: #{x}"
def f(name)
	puts "hello, #{name}"
end
f("stas")
class Greeter
	def initialize(name="world")
		@name = name
	end
	def hi(name=nil)
		if name.nil?
			name = @name
		end
		puts "hi, #{name}"
	end
end
g = Greeter.new("sam")
class Greeter
	attr_accessor :name
end
g.hi("boris")
g.name = "sammm"
puts g.name
