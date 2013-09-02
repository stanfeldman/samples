package ru.limehat.samples.android.notifier;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;

import com.phonegap.plugins.statusBarNotification.StatusNotificationIntent;

public class Notifier extends Plugin {
	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		try{
			if(action.equals("show"))
				return this.show(args);
			else
				return new PluginResult(PluginResult.Status.INVALID_ACTION);
		}
		catch(JSONException e){
			return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
		}
	}
	private PluginResult show(JSONArray args) throws JSONException{
		String nid = args.getString(0);
		String title = args.getString(1);
		String text = args.getString(2);
		if(nid != null && nid.length() > 0 && title != null && title.length() > 0 && text != null && text.length() > 0){
			String ns = Context.NOTIFICATION_SERVICE;
	        context = cordova.getActivity().getApplicationContext();
	        mNotificationManager = (NotificationManager) context.getSystemService(ns);
	        Notification noti = this.buildNotification(nid, title, text);
	        mNotificationManager.notify(nid.hashCode(), noti);
			return new PluginResult(PluginResult.Status.OK);
		}
		else
			return new PluginResult(PluginResult.Status.ERROR);
	}
	private Notification buildNotification(CharSequence tag, CharSequence contentTitle, CharSequence contentText ) {
        int icon = context.getResources().getIdentifier("notification", "drawable", context.getPackageName()); // R.drawable.notification;
        long when = System.currentTimeMillis();
        Notification noti = new Notification(icon, contentTitle, when);
        noti.flags |= Notification.FLAG_NO_CLEAR;

        PackageManager pm = context.getPackageManager();
        Intent notificationIntent = pm.getLaunchIntentForPackage(context.getPackageName());
        notificationIntent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
        notificationIntent.putExtra("notificationTag", tag);

        PendingIntent contentIntent = PendingIntent.getActivity(context, 0, notificationIntent, 0);
        noti.setLatestEventInfo(context, contentTitle, contentText, contentIntent);
        return noti;
    }
	
	private NotificationManager mNotificationManager;
    private Context context;
}
