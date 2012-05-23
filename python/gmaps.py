# -*- coding: utf-8 -*-
from geopy.geocoders import Google
from geopy.distance import distance

geocoder = Google()
address1_str = u"Юбилейная, 15, Люберцы".encode('utf8')
address1 = geocoder.geocode(address1_str, exactly_one=False)
print address1
address2_str = u"7 Jalan Bintang, Kuala Lumpur".encode('utf8')
address2 = geocoder.geocode(address2_str, exactly_one=False)
print address2
address3_str = u"Юбилейная, 2, Люберцы".encode('utf8')
address3 = geocoder.geocode(address3_str, exactly_one=False)
print address3
address4_str = u"Москва".encode('utf8')
address4 = geocoder.geocode(address4_str, exactly_one=False)
print address4
print distance(address1[0][1], address2[0][1])
print distance(address1[0][1], address3[0][1])
print distance(address1[0][1], address4[0][1])
