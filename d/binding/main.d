#!/usr/bin/rdmd
import std.stdio;
import std.string;
import std.datetime;
import ext;

void main()
{
	auto start_time = Clock.currTime();
	writeln(f(1,2));
	writeln("prog duration: ", Clock.currTime() - start_time);
}

