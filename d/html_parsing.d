import std.stdio;
import std.net.curl;
import std.string;

void main()
{
	auto content = get("dlang.org");
	writeln(content);
}
