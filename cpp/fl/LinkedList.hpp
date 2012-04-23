#ifndef LINKEDLIST_HPP
#define LINKEDLIST_HPP
#include <stdexcept>
#include <iostream>
using namespace std;

template<typename T>
class LinkedList
{
	public:
		LinkedList();
		~LinkedList();
		void append(T item);
		void insert(int i, T item);
		T pop();
		T get(); //последний элемент
		T get(int i);
		void print();
	public:
		int get_length() { return length; }
	public:
		struct Node { T item; Node* prev; Node* next; };
	private:
		void insert(T item, Node* left, Node* right);
		void remove(Node* node);
	private:
		Node* first;
		Node* last;
		int length;
};

//-----public
template<typename T>
LinkedList<T>::LinkedList(): first(0), last(0), length(0)
{
}

template<typename T>
LinkedList<T>::~LinkedList()
{
	Node* curr = first;
	while(curr != 0)
	{
		Node* for_del = curr;
		curr = curr->next;
		delete for_del;
	}
}

template<typename T>
void LinkedList<T>::append(T item)
{
	insert(item, last, 0);
	++length;
}

template<typename T>
void LinkedList<T>::insert(int i, T item)
{
	if(i >= length)
		throw out_of_range("LinkedList size is smaller than i!");
	Node* curr = first;
	int curr_i = 0;
	while(curr != 0)
	{
		if(i == curr_i)
		curr = curr->next;
		++curr_i;
	}
}

template<typename T>
T LinkedList<T>::pop()
{
	Node* res = last;
	T result = res->item;
	if(last == 0)
		throw out_of_range("LinkedList is empty!");
	remove(res);
	--length;
	return result;
}

template<typename T>
T LinkedList<T>::get()
{
	return get(length-1);
}

template<typename T>
T LinkedList<T>::get(int i)
{
	if(i >= length)
		throw out_of_range("LinkedList size is smaller than i!");
	Node* curr = first;
	int curr_i = 0;
	bool ltr = true;
	if(i > (int)length/2)
	{
		curr = last;
		curr_i = length - 1;
		ltr = false;
	}
	while(curr != 0)
	{
		if(curr_i == i)
			return curr->item;
		else
		{
			if(ltr)
			{
				curr = curr->next;
				++curr_i;
			}
			else
			{
				curr = curr->prev;
				--curr_i;
			}
		}
	}
}

template<typename T>
void LinkedList<T>::print()
{
	Node* curr = first;
	while(curr != 0)
	{
		cout << curr->item << " ";
		curr = curr->next;
	}
	cout << endl;
}

//-----private
template<typename T>
void LinkedList<T>::insert(T item, Node* left, Node* right)
{
	Node* node = new Node();
	node->item = item;
	node->prev = left;
	node->next = right;
	if(left != 0)
		left->next = node;
	else
		first = node;
	if(right != 0)
		left->prev = node;
	else
		last = node;
}

template<typename T>
void LinkedList<T>::remove(Node* node)
{
	Node* left = node->prev;
	Node* right = node->next;
	if(left != 0)
		left->next = right;
	if(right != 0)
		right->prev = left;
	delete node;
}
#endif
