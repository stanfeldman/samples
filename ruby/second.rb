class Pet
	def initialize name, age
		@name = name
		@age = age
	end
	attr_accessor :name, :age
	def say
		puts "..."
	end
end

class Dog < Pet
	def say
		puts "#{@name}: gaf"
	end
end
d = Dog.new "kuzya", 15
d.say
puts d.name

