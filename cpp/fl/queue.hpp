#ifndef QUEUE_HPP
#define QUEUE_HPP
#include "list.hpp"

template<typename T>
class Queue : public List<T>
{
	public:
		Queue();
		void put(T item);
		T get();
};

//-----public
template<typename T>
Queue<T>::Queue(): List<T>()
{
}

template<typename T>
void Queue<T>::put(T item)
{
	List<T>::append(item);
}

template<typename T>
T Queue<T>::get()
{
	return List<T>::get(0);
}


#endif
