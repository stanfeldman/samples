#ifndef TIME_HPP
#define TIME_HPP
#include <sys/time.h>

class Time
{
	public:
		static double get_current_time()
		{ 
			struct timezone tz; 
			struct timeval t; 
			gettimeofday(&t, &tz) ; 
			return double(t.tv_sec*1000) + double( t.tv_usec ) / 1000.0;
		}
};
#endif
