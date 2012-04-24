#ifndef HASHTABLE_HPP
#define HASHTABLE_HPP
#include <string>
#include <cmath>
#include <utility>
#include <iostream>
#include "list.hpp"
using namespace std;

template<typename T>
class HashTable
{
	public:
		HashTable();
		~HashTable();
		void add(string key, T value);
		T get(string key);
		int hash(string input);
		typedef pair<string, T> Item;
		typedef List<Item>* ItemList;
	private:
		int max_size;
		ItemList* buffer;
};

template<typename T>
HashTable<T>::HashTable(): max_size(1000)
{
	buffer = new ItemList[max_size];
	for(int i = 0; i < max_size; ++i)
		buffer[i] = new List<Item>();
}

template<typename T>
HashTable<T>::~HashTable()
{
	for(int i = 0; i < max_size; ++i)
		delete buffer[i];
	delete[] buffer;
}

template<typename T>
void HashTable<T>::add(string key, T value)
{
	int ind = hash(key);
	ItemList existed = buffer[ind];
	Item inserted = make_pair(key, value);
	existed->append(inserted);
}

template<typename T>
T HashTable<T>::get(string key)
{
	int ind = hash(key);
	ItemList found = buffer[ind];
	if(!found->is_empty())
	{
		cout << "hey" << endl;
		ListIterator<Item>* it = found->iterator();
		while(it->has_next())
		{
			Item item = it->next();
			if(item.first == key)
				return item.second;
		}
		cout << endl;
		delete it;
	}
}

template<typename T>
int HashTable<T>::hash(string input)
{
	int res = 0;
	for(int i = 0; i < input.length(); ++i)
		res = (int)input[i] + (res << 5) + (res >> 2);
	return abs(res % max_size);
}
#endif
