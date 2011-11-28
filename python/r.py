import re

url = "/users/11/docs/"
re_url = "/users/(?P<user>\w+)/docs"
regex = re.compile(re_url)
print regex.match(url).groupdict()
