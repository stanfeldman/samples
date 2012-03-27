import mechanize
br = mechanize.Browser()
br.open("https://www.google.ru/")
br.select_form(name="gbqf")
br["q"] = "node.js"
res = br.submit()
print res.read()
