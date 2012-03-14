-module(proc).
-compile(export_all).

conv() ->
	G1 = spawn(?MODULE, greeter, []),
	G1 ! {self(), hi},
	G1 ! lala,
	G1 ! {self(), bye}.

greeter() ->
	receive
		{From, hi} -> From ! "whats up?~n";
		{From, bye} -> From ! "bye~n";
		_ -> io:format("eee, unknown command~n")
	end.
	
go() ->
	Loop = spawn(?MODULE, loop, []),
	Loop ! {self(), hi},
	receive
		{_From, Msg} -> io:format("~w~n", [Msg])
	end,
	Loop ! stop.
	
loop() ->
	receive
		{From, Msg} -> 
			From ! {self(), Msg},
			loop();
		stop -> ok
	end.
