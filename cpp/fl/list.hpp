#ifndef LIST_HPP
#define LIST_HPP
#include <stdexcept>
#include <iostream>
using namespace std;

template<typename T>
struct Node { T item; Node* prev; Node* next; };

template<typename T>
class ListIterator;

template<typename T>
class List
{
	public:
		List();
		virtual ~List();
		void append(T item);
		//void insert(int i, T item);
		T pop();
		T get(); //последний элемент
		T get(int i);
		void print();
		ListIterator<T>* iterator();
	public:
		int get_length() { return length; }
		bool is_empty() { return length == 0; }
	public:
		friend class ListIterator<T>;
	protected:
		void insert_after(T item, Node<T>* left);
		void insert_before(T item, Node<T>* rigth);
		void remove(Node<T>* node);
	protected:
		Node<T>* first;
		Node<T>* last;
		int length;
};

template<typename T>
class ListIterator
{
	public:
		ListIterator(List<T>* list);
		bool has_next();
		bool has_prev();
		T next();
		T prev();
		Node<T>* next_node();
		Node<T>* prev_node();
		Node<T>* get_next_node();
		Node<T>* get_prev_node();
	private:
		List<T>* list;
		Node<T>* current_node;
};

//-----public
template<typename T>
List<T>::List(): first(0), last(0), length(0)
{
}

template<typename T>
List<T>::~List()
{
	ListIterator<T>* it = iterator();
	while(it->has_next())
	{
		Node<T>* for_del = it->get_next_node();
		it->next_node();
		delete for_del;
	}
}

template<typename T>
void List<T>::append(T item)
{
	insert_after(item, last);
}

/*template<typename T>
void List<T>::insert(int i, T item)
{
	if(i > length)
		throw out_of_range("List size is smaller than i!");
	ListIterator<T>* it = iterator();
	int ind = 0;
	Node<T>* left = 0;
	while(it->has_next() and ind++ < i)
		left = it->next_node();
	if(left != 0)
	{
		Node<T>* right = 0;
		if(left->next != 0)
			right = left->next;
		insert(item, left, right);
	}
	delete it;
	++length;
}*/

template<typename T>
T List<T>::pop()
{
	Node<T>* res = last;
	T result = res->item;
	if(last == 0)
		throw out_of_range("List is empty!");
	remove(res);
	--length;
	return result;
}

template<typename T>
T List<T>::get()
{
	return get(length-1);
}

template<typename T>
T List<T>::get(int i)
{
	if(i >= length)
		throw out_of_range("List size is smaller than i!");
	ListIterator<T>* it = iterator();
	int ind = 0;
	Node<T>* found = 0;
	while(it->has_next() and ind++ <= i)
		found = it->next_node();
	delete it;
	if(found != 0)
		return found->item;
}

template<typename T>
ListIterator<T>* List<T>::iterator()
{
	return new ListIterator<T>(this);
}

template<typename T>
void List<T>::print()
{
	ListIterator<T>* it = iterator();
	while(it->has_next())
		cout << it->next() << " ";
	cout << endl;
	delete it;
}

//-----private
template<typename T>
void List<T>::insert_after(T item, Node<T>* left)
{
	Node<T>* node = new Node<T>();
	node->item = item;
	if(left != 0)
	{
		left->next = node;
		node->prev = left;
		if(left == last)
			last = node;
	}
	else
	{
		first = node;
		last = node;
	}
	++length;
}

template<typename T>
void List<T>::insert_before(T item, Node<T>* right)
{
	Node<T>* node = new Node<T>();
	node->item = item;
	if(right != 0)
	{
		right->prev = node;
		node->next = right;
		if(right == first)
			first = node;
	}
	else
	{
		first = node;
		last = node;
	}
	++length;
}

template<typename T>
void List<T>::remove(Node<T>* node)
{
	Node<T>* left = node->prev;
	Node<T>* right = node->next;
	if(left != 0)
		left->next = right;
	if(right != 0)
		right->prev = left;
	delete node;
}

//------ListIterator
template<typename T>
ListIterator<T>::ListIterator(List<T>* list0): list(list0), current_node(0){}

template<typename T>
bool ListIterator<T>::has_next()
{
	return get_next_node() != 0;
}

template<typename T>
bool ListIterator<T>::has_prev()
{
	return get_prev_node() != 0;
}

template<typename T>
T ListIterator<T>::next()
{
	return next_node()->item;
}

template<typename T>
T ListIterator<T>::prev()
{
	return prev_node()->item;
}

template<typename T>
Node<T>* ListIterator<T>::next_node()
{
	current_node = get_next_node();
	return current_node;
}

template<typename T>
Node<T>* ListIterator<T>::prev_node()
{
	current_node = get_prev_node();
	return current_node;
}

template<typename T>
Node<T>* ListIterator<T>::get_next_node()
{
	if(current_node != 0)
		return current_node->next;
	else
		return list->first;
}

template<typename T>
Node<T>* ListIterator<T>::get_prev_node()
{
	if(current_node != 0)
		return current_node->prev;
	else
		return list->last;
}
#endif
