#ifndef STACK_HPP
#define STACK_HPP
#include "list.hpp"

template<typename T>
class Stack : private List<T>
{
	public:
		Stack();
		void push(T item);
		T pop();
		void print();
};

//-----public
template<typename T>
Stack<T>::Stack(): List<T>()
{
}

template<typename T>
void Stack<T>::push(T item)
{
	List<T>::append(item);
}

template<typename T>
T Stack<T>::pop()
{
	return List<T>::pop();
}

template<typename T>
void Stack<T>::print()
{
	List<T>::print();
}

#endif
