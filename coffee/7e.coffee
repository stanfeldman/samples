is_simple = (num) ->
	for n in [2..num-1]
		if num % n is 0
			return false
	return true
	
get_simple = (pos) ->
	count = 1
	last = 2
	n = 3
	while true
		if is_simple n
			count++
			last = n
			if count == pos
				return last
		n++
	return last
	
console.log get_simple 10001
