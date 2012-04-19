#include <iostream>
#include <vector>
#include <stdexcept>

template<typename T>
T const& max(T const& a, T const& b)
{
	return a < b ? b : a;
}

template<>
double const& max(double const& a, double const& b)
{
	std::cout << "double max" << std::endl;
	return a < b ? b : a;
}

template<typename T, typename Contaner=std::vector<T> >
class Stack
{
	public:
		void push(T item);
		T pop();
	private:
		Contaner items;
};
template<typename T, typename Contaner>
void Stack<T, Contaner>::push(T item)
{
	items.push_back(item);
}
template<typename T, typename Contaner>
T Stack<T, Contaner>::pop()
{
	if(items.empty())
		throw std::out_of_range("empty stack");
	T item = items.back();
	items.pop_back();
	return item;
}

int main()
{
	std::cout << max(4,5) << std::endl;
	std::cout << max(4.0,3.1) << std::endl;
	Stack<int> s = Stack<int>();
	s.push(1); s.push(2);
	std::cout << s.pop() << ";" << s.pop() << std::endl;
	return 0;
}
