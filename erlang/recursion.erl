-module(recursion).
-compile(export_all).

fac(N) -> fac(N, 1).
fac(0, R) -> R;
fac(N, R) -> fac(N-1, N*R).

len(L) -> len(L, 0).
len([], Acc) -> Acc;
len([_|T], Acc) -> len(T, 1+Acc).

dupl(Term, N) -> dupl(Term, N, []).
dupl(_, 0, Acc) -> Acc;
dupl(Term, N, Acc) -> dupl(Term, N-1, [Term|Acc]).

rev(List) -> rev(List, []).
rev([], Acc) -> Acc;
rev([H|T], Acc) -> rev(T, [H|Acc]).

sublist(List, End) -> sublist(List, End, []).
sublist(_, 0, Acc) -> Acc;
sublist([H|T], End, Acc) -> sublist(T, End-1, Acc ++ [H]).

zip(List1, List2) -> zip(List1, List2, []).
zip([], [], Acc) -> Acc;
zip([H1|T1], [H2|T2], Acc) -> zip(T1, T2, Acc ++ [{H1,H2}]).
