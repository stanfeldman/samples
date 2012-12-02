package ru.limehat.samples.android.phonegap_plugin;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

public class Plugin1 extends Plugin {
	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		try{
			if(action.equals("first"))
				return this.first(args);
			else
				return new PluginResult(PluginResult.Status.INVALID_ACTION);
		}
		catch(JSONException e){
			return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
		}
	}
	private PluginResult first(JSONArray args) throws JSONException{
		String arg1 = args.getString(0);
		if(arg1 != null && arg1.length() > 0)
			return new PluginResult(PluginResult.Status.OK, "hello from plugin1: " + arg1);
		else
			return new PluginResult(PluginResult.Status.ERROR);
	}
}
