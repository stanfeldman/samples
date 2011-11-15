fac = (num) ->
	if num > 1
		num * fac num-1
	else 1
	
is_int = (num) ->
	num % 1 is 0
		
get_sum = (num) ->
	sum = 0
	ost = num
	while (Math.floor ost) > 0
		sum += ost % 10
		console.log ost + ", " + ost % 10
		ost = Math.floor ost/10
	return sum

console.log fac 100
console.log get_sum fac 100
