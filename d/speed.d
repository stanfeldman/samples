#!/usr/bin/rdmd
import std.stdio;
import std.string;
import std.datetime;

void main()
{
	auto start_time = Clock.currTime();
	int n = 0;
	foreach(int i; 0..1000000)
		n = i;
	writeln("prog duration: ", Clock.currTime() - start_time);
}

