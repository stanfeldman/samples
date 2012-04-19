#include <iostream>
#include <sys/time.h>
#include <sstream>
#include <string>
#include <curl/curl.h>
#include <libxml/tree.h>
#include <libxml/parser.h>
#include <libxml/HTMLparser.h>
#include <libxml/xpath.h>
#include <libxml/xpathInternals.h>
using namespace std;

double GetCurrentTime()
{ 
	struct timezone tz; 
	struct timeval t; 
	gettimeofday(&t, &tz) ; 
	return double(t.tv_sec*1000) + double( t.tv_usec ) / 1000.0;
}

size_t write_data(char* ptr, size_t size, size_t nmemb, void* userdata)
{
	ostringstream* stream = (ostringstream*)userdata;
	size_t count = size * nmemb;
	stream->write(ptr, count);
	return count;
}

void printXPathNodes(xmlNodeSetPtr nodes)
{
	cout << "nodes count: " << nodes->nodeNr << endl;
}

void parseHtml(string html)
{
	xmlInitParser();
	xmlDocPtr doc = htmlReadMemory(html.c_str(), html.size(), "html", NULL,
		HTML_PARSE_RECOVER|HTML_PARSE_NOERROR|HTML_PARSE_NOWARNING);
	xmlNode* root = xmlDocGetRootElement(doc);
	cout << root->name << endl;
	cout << "analyzing html..." << endl;
	xmlXPathContextPtr xPathCtx = xmlXPathNewContext(doc);
	xmlXPathObjectPtr xPathObj = xmlXPathEvalExpression(BAD_CAST "a.question-hyperlink", xPathCtx);
	printXPathNodes(xPathObj->nodesetval);
	xmlXPathFreeObject(xPathObj);
	xmlXPathFreeContext(xPathCtx);
	xmlFreeDoc(doc);
	xmlCleanupParser();
}

int main()
{
	double start_time = GetCurrentTime();
	CURL* curl = curl_easy_init();
	if(!curl)
		return 1;
	char errorBuffer[CURL_ERROR_SIZE];
	curl_easy_setopt(curl, CURLOPT_ERRORBUFFER, errorBuffer);
	curl_easy_setopt(curl, CURLOPT_URL, "stackoverflow.com");
	//curl_easy_setopt(curl, CURLOPT_HEADER, 1);
	curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1);
	curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_data);
	ostringstream stream;
	curl_easy_setopt(curl, CURLOPT_WRITEDATA, &stream);
	CURLcode res = curl_easy_perform(curl);
	if(res != CURLE_OK)
	{
		cout << errorBuffer << endl;
		return 1;
	}
	string s = stream.str();
	//cout << s << endl;
	parseHtml(s);
	curl_easy_cleanup(curl);
	cout << "prog duration: " << GetCurrentTime() - start_time << " ms" << endl;
	return 0;
}
