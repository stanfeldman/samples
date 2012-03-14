-module(funs).
-compile(export_all).

-record(robot, {name, type=industrial, details=[]}).

one() -> 1.
two() -> 2.
add(X, Y) -> X() + Y().

incr(X) -> X+1.
decr(X) -> X-1.

map([], _) -> [];
map([H|T], F) -> [F(H)|map(T,F)].

filter(List, Fun) -> filter(List, Fun, []).
filter([], _, Acc) -> Acc;
filter([H|T], Fun, Acc) ->
	case Fun(H) of
		true -> filter(T, Fun, Acc ++ [H]);
		false -> filter(T, Fun, Acc)
	end.
	
rec() ->
	R1 = #robot{name="first robot"},
	R1#robot.name.
