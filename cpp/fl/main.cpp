#include <iostream>
#include "time.hpp"
#include "list.hpp"
#include "hashtable.hpp"
using namespace std;

int main()
{
	double start_time = Time::get_current_time();
	/*List<int> list = List<int>();
	list.append(1);
	list.append(2);
	list.append(3);
	list.insert(1, 555);
	cout << list.get(1) << endl;
	cout << list.get() << endl;
	list.print();
	cout << list.pop() << endl;
	list.print();*/
	HashTable<int> ht = HashTable<int>(5);
	ht.add("hey", 34);
	ht.add("hellooo", 567);
	ht.add("zzz", 67);
	cout << ht.get("hellooo") << endl;
	ht.print();
	cout << "prog duration: " << Time::get_current_time() - start_time << " ms" << endl;
	return 0;
}
