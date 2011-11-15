is_int = (num) ->
	num % 1 is 0
for a in [1..1000]
	for b in [1..1000]
		c = Math.sqrt a*a + b*b
		if is_int c
			if a + b + c is 1000 and a < b < c
				console.log a * b * c

