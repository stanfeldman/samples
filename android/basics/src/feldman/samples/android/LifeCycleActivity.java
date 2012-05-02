package feldman.samples.android;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

public class LifeCycleActivity extends Activity 
{
	
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		txt = new TextView(this);
		setContentView(txt);
		log("created");
	}

	
	protected void onPause() 
	{
		super.onPause();
		log("paused");
		if(isFinishing())
			log("finished");
	}

	
	protected void onResume() 
	{
		super.onResume();
		log("resumed");
	}
	
	private void log(String text)
	{
		txt.setText(txt.getText() + text + "\n");
	}
	
	private TextView txt;
}
