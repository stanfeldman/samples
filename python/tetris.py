import wx
import random


class Tetrominoes(object):
	NoShape = 0
	ZShape = 1
	SShape = 2
	LineShape = 3
	TShape = 4
	SquareShape = 5
	LShape = 6
	MirroredLShape = 7
	
def enum(**enums):
    return type('Enum', (), enums)
    
    
class Point(object):
	def __init__(self, x, y):
		self.x = x
		self.y = y


class Shape(object):
	Direction = enum(LeftDirection=0, RightDirection=1, DownDirection=2)
	Width = 30
	
	def __init__(self):
		self.is_active = True
		self.points = [Point(10,0), Point(50,0)]
		
	def draw(self, dc):
		dc.SetBrush(wx.Brush("#803C3B"))
		for p in self.points:
			dc.DrawRectangle(p.x, p.y, Shape.Width, Shape.Width)
			
	def move(self, direction=Direction.DownDirection):
		for p in self.points:
			if Shape.Direction.DownDirection == direction:
				p.y = p.y + Shape.Width
			elif Shape.Direction.RightDirection == direction:
				p.x = p.x + Shape.Width
			elif Shape.Direction.LeftDirection == direction:
				p.x = p.x - Shape.Width
	

class TetrisBoard(wx.Panel):
	def __init__(self, parent):
		wx.Panel.__init__(self, parent)
		self.timer_id = random.randint(1, 10000)
		self.timer = wx.Timer(self, self.timer_id)
		self.speed = 500
		self.is_started = False
		self.width = 10*Shape.Width
		self.height = 20*Shape.Width
		self.shapes = []
		self.Bind(wx.EVT_TIMER, self.on_timer, id=self.timer_id)
		self.Bind(wx.EVT_PAINT, self.on_paint)
		self.Bind(wx.EVT_KEY_DOWN, self.on_keydown)
		
	def start(self):
		self.is_started = True
		self.active_shape = Shape()
		self.shapes.append(self.active_shape)
		self.timer.Start(self.speed)
		
	def on_timer(self, event):
		if event.GetId() == self.timer_id:
			#self.active_shape = Shape()
			self.active_shape.move()
			#self.shapes.append(self.active_shape)
			self.Refresh()
		else:
			event.Skip()
		
	def on_paint(self, event):
		dc = wx.PaintDC(self)
		for shape in self.shapes:
			shape.draw(dc)
		
	def on_keydown(self, event):
		print "on_keydown: %s" % event


class TetrisFrame(wx.Frame):
	def __init__(self, title):
		wx.Frame.__init__(self, None, -1, title, style= wx.SYSTEM_MENU | wx.CAPTION | wx.CLOSE_BOX)
		self.board = TetrisBoard(self)
		self.board.SetFocus()
		self.SetSize((self.board.width, self.board.height))
		self.statusbar = self.CreateStatusBar()
		self.statusbar.SetStatusText("0")
		self.Centre()
		
	def start(self):
		self.board.start()
		self.Show()

		
class Tetris(object):
	def __init__(self, title):
		self.app = wx.App()
		self.frame = TetrisFrame(title)
		
	def start(self):
		self.frame.start()
		self.app.MainLoop()

		
if __name__ == "__main__":
	tetris = Tetris("Tetris")
	tetris.start()
