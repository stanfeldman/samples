package ru.limehat.samples.android.widget1;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

public class MyBroadcastReceiver extends BroadcastReceiver {
	@Override
	public void onReceive(Context context, Intent intent) {
		Log.i("widget1", "starting video");
//		Intent i = new Intent(context, MainActivity.class);
//        context.startActivity(i);
		Uri uri = Uri.parse("/sdcard/TVA_predmaster.mov");
        Intent i = new Intent(Intent.ACTION_VIEW, uri);
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        i.setDataAndType(uri, "video/*");
        context.startActivity(i);
	}

}
