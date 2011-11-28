from zipfile import *

with ZipFile("test.zip", "r") as myzip:
    for item in myzip.namelist():
    	print item
