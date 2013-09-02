from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.keys import Keys
import time
import unicodecsv


def save_data(browser, page, filename):
	page_number = str(page)
	print "processing page: " + page_number
	searchText = browser.find_element_by_name("TextBox1")
	searchText.clear()
	searchText.send_keys(page_number)
	browser.find_element_by_name("Button1").click()
	time.sleep(7)
	trs = browser.find_elements_by_css_selector("#GridView1 > tbody > tr")[1:-1]
	for tr in trs:
		tds = tr.find_elements_by_tag_name("td")[1:]
		file_writer.writerow([td.text for td in tds])


browser = webdriver.Firefox()
browser.get("http://md2.dpru.ru/moslicenseReestr/")
with open("data.csv", 'wb') as data_file:
	file_writer = unicodecsv.writer(data_file, encoding='utf-8')
	for n in xrange(115, 1049):
		save_data(browser, n, file_writer)
browser.close()