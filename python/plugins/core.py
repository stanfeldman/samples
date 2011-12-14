from abc import ABCMeta, abstractmethod


class Plugin(object):
	__metaclass__ = ABCMeta
	
	@abstractmethod
	def get_view():
		return "<h1>hello</h1>"
	
class PluginLoader(object):
	
	def get_plugins():
		return []
	
	def get_plugin_view():
		return None
