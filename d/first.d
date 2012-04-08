#!/usr/bin/rdmd
import std.stdio;
import std.string;
import std.datetime;
import pack.second;

int incTwice(int a)
{
	int inc(int b)
	{
		return ++b;
	}
	return inc(inc(a));
}

T[] mapInc(T)(T[] arr)
{
	auto res = new T[arr.length];
	foreach(i, item; arr)
		res[i] = item+1;
	return res;
}

class A
{
	this(string s) { this.s = s; }
	abstract void print();
	string s;
}

class B : A
{
	this(string s) { super(s); }
	void print()
	{
		writeln(s);
	}
}

void main()
{
	auto start_time = Clock.currTime();
	int n = 0;
	foreach(int i; 0..10)
		n = i;
	string[] strings = ["first", "lala", "zz"];
	uint[string] dict;
	uint id = 0;
	foreach(word; strings)
		dict[word] = id++;
	writeln(dict, strings[0..2]);
	writeln(incTwice(3));
	auto dec = (int a){ return ++a; };
	writeln(dec(555));
	auto b = new B("hey, im a");
	b.print();
	writeln(mapInc([5,4,3,2,1]));
	f2(5);
	writeln("prog duration: ", Clock.currTime() - start_time);
}

