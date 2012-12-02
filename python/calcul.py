def profit(cyprus_percent):
	cyprus = 100*cyprus_percent
	moscow = 100
	in_cyprus = 0.35*cyprus
	nalog = (0.15+0.5)*cyprus
	after_custom = moscow - nalog - cyprus
	nalog += 0.18*after_custom
	after_nds = after_custom - 0.18*after_custom
	nalog += 0.22*after_nds
	after_nalog = after_nds - 0.22*after_nds
	in_moscow = 0.35 * after_nalog
	return (in_cyprus, in_moscow, after_nalog, nalog)

my_max_profit = 0
my_cyprus_profit = 0
moscow_money = 0
my_moscow_profit = 0
percent_to_cyprus = 0
nalog_sum = 0

for percent in [x * 0.01 for x in range(1, 99, 1)]:
	current_profit = profit(percent)
	if(current_profit[0]+current_profit[1] > my_max_profit and current_profit[2] > 5 and percent > 0.3):
		my_max_profit = current_profit[0]+current_profit[1]
		percent_to_cyprus = percent
		my_cyprus_profit = current_profit[0]
		my_moscow_profit = current_profit[1]
		moscow_money = current_profit[2]
		nalog_sum = current_profit[3]

print "percent_to_cyprus: %f, my_max_profit: %f, my_cyprus_profit: %f, my_moscow_profit: %f, moscow_money: %f, nalog_sum: %f" % (100*percent_to_cyprus, my_max_profit, my_cyprus_profit, my_moscow_profit, moscow_money, nalog_sum)