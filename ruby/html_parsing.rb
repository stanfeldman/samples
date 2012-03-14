require 'rubygems'
require "nokogiri"
require "open-uri"

def show_results(results)
	results.each do |item|
		puts item.content
	end
end
start_time = Time.now
doc = Nokogiri::HTML(open("http://habrahabr.ru/"))
puts "html loading: #{(Time.now - start_time)*1000} milliseconds"
start_time = Time.now
results_from_css = doc.search("a.post_title")
puts "search via css celectors: #{(Time.now - start_time)*1000} milliseconds"
#show_results(results_from_css)
start_time = Time.now
results_from_xpath = doc.search("//a[@class='post_title']")
puts "search via xpath: #{(Time.now - start_time)*1000} milliseconds"
#show_results(results_from_xpath)
