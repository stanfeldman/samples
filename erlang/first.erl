-module(first).
-compile(export_all).

out() ->
	Point = {4, 5},
	{X, _} = Point,
	io:write(X),
	[H|T] = [1, 2] ++ [3, 4],
	io:write(H),
	L = [2*N || N <- T],
	io:write(L),
	if 
		H < 0 -> io:write("neg");
		H > 0 -> io:write("pos");
		true -> io:write("null!")
	end,
	case H of
		2 -> io:write("two!");
		_ -> io:write("other..")
	end.
	
head([H|_]) -> H.

nth([H|_], 0) -> H;
nth([_|T], P) when P > 0 -> nth(T, P-1).
