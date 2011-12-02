from pydispatch import dispatcher
import time

signal = "1"
def slot(param, param2):
	time2 = time.time()
	print time2-time1
	print param2
dispatcher.connect(slot, signal=signal)
time1 = time.time()
dispatcher.send(signal, param="param", param2="oiwje")
