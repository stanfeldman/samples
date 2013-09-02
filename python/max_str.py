def find_max_substr(filepath):	
	substr = ""
	with open(filepath) as f:
		num = next(f).strip()
		first_line = next(f).strip()
		first_line_len = len(first_line)
		lines = [x.strip() for x in list(f)]
		for i in xrange(first_line_len):
			for j in xrange(first_line_len - i + 1):
				maybe_substr = first_line[i:i+j]
				for line in lines:
					if j > len(substr) and is_substr(maybe_substr, lines):
						substr = maybe_substr
	return substr

def is_substr(find, data):
    if len(data) < 1 and len(find) < 1:
        return False
    for i in range(len(data)):
        if find not in data[i]:
            return False
    return True


if __name__=="__main__":
	print find_max_substr("max_str_source.txt")