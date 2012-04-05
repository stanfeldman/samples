package feldman.samples.android;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.os.Bundle;
import android.preference.PreferenceActivity;
import android.widget.TextView;

public class PrefsActivity extends Activity 
{
	@Override
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		SharedPreferences writePrefs = getSharedPreferences("private_pref", Context.MODE_PRIVATE);
		Editor editor = writePrefs.edit();
		editor.putString("bar", "baz");
		editor.commit();
		SharedPreferences readPrefs = getSharedPreferences("private_pref", Context.MODE_PRIVATE);
		String prefValue = readPrefs.getString("bar", "nothing");
		TextView txt = new TextView(this);
		txt.setText("pref: " + prefValue);
		setContentView(txt);
	}
}
