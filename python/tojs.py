def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

for x in xrange(10):
    print 'fib(%d) = %d' % (x, fib(x))

print "lala"

class Class1(object):
    def __init__(self, num):
        self.num = num
    def add(self, n2):
        self.num += n2
        return self.num

class Class2(Class1):
    def __init__(self, num):
        super(Class2, self).__init__(num)
    def div(self, n2):
        self.num -= n2
        return self.num

obj = Class2(5)
print obj.add(6)
print obj.div(7)
