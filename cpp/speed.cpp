#include <iostream>
#include <sys/time.h>
using namespace std;

int main()
{
	struct timeval start, end;
	gettimeofday(&start, 0);
	int n = 0;
	for(int i = 0; i < 1000000; ++i)
		n = i;
	gettimeofday(&end, 0);
	cout << "prog duration: " << (end.tv_usec - start.tv_usec)/1000 << " ms" << endl;
	return 0;
}
