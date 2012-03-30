import wx

class MyFrame(wx.Frame):
	def __init__(self):
		wx.Frame.__init__(self, None, -1, "My Frame", size=(300, 300))
		panel = wx.Panel(self, -1)
		panel.Bind(wx.EVT_MOTION, self.on_move)
		wx.StaticText(panel, -1, "Pos: ", pos=(10, 12))
		self.posCtrl = wx.TextCtrl(panel, -1, "", pos=(40, 10))
		btn = wx.Button(panel, -1, "Push me", pos=(130, 15), size=(40,40))
		btn.Bind(wx.EVT_BUTTON, self.on_button_click)
		menu_bar = wx.MenuBar()
		menu = wx.Menu()
		menu_item = menu.Append(-1, "&Click me")
		self.Bind(wx.EVT_MENU, self.on_menu_item_click, menu_item)
		menu_bar.Append(menu, "&Options")
		self.SetMenuBar(menu_bar)
		self.Centre()
		
	def on_move(self, event):
		pos = event.GetPosition()
		self.posCtrl.SetValue("%s, %s" % (pos.x, pos.y))
		
	def on_button_click(self, event):
		self.posCtrl.SetValue("clicked on button")
		
	def on_menu_item_click(self, event):
		self.posCtrl.SetValue("clicked on button")
		
class MyApp(wx.App):
	def OnInit(self):
		frame = MyFrame()
		frame.Show()
		return True
		
if __name__ == "__main__":
	app = MyApp()
	app.MainLoop()
