package ru.limehat.samples.android.widget1;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.RemoteViews;

public class Widget1Provider extends AppWidgetProvider {
	@Override
	public void onUpdate(Context context, AppWidgetManager appWidgetManager,
			int[] appWidgetIds) {
		//super.onUpdate(context, appWidgetManager, appWidgetIds);
		Log.i("Widget1",  "Updating widgets " + Arrays.asList(appWidgetIds));
		for(int awi : appWidgetIds){
			//Intent intent = new Intent(context, MainActivity.class);
			Intent intent = new Intent(); 
			intent.setType("image/*");
			intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
			PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent, 0);
			RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget1);
			views.setOnClickPendingIntent(R.id.button, pendingIntent);
			views.setTextViewText(R.id.widget1label, df.format(new Date()));
			appWidgetManager.updateAppWidget(awi, views);
		}
	}
	DateFormat df = new SimpleDateFormat("hh:mm:ss");
}
