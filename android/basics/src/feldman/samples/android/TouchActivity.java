package feldman.samples.android;

import android.app.Activity;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.Window;
import android.view.WindowManager;
import android.widget.TextView;

public class TouchActivity extends Activity 
{
	@Override
	protected void onCreate(Bundle savedInstanceState) 
	{
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
		super.onCreate(savedInstanceState);
		txt = new TextView(this);
		setContentView(txt);
	}

	@Override
	public boolean onTouchEvent(MotionEvent event) 
	{
		String out = "";
		switch(event.getAction())
		{
			case MotionEvent.ACTION_DOWN: out = "down: "; break;
			case MotionEvent.ACTION_MOVE: out = "move: "; break;
			case MotionEvent.ACTION_CANCEL: out = "cancel: "; break;
			case MotionEvent.ACTION_UP: out = "up: "; break;
		}
		out += String.format("x: %s, y: %s, pressure: %s, size: %s", event.getX(), event.getY(), event.getPressure(), event.getSize());
		log(out);
		return true;
	}

	private void log(String text)
	{
		txt.setText(text);
	}
	
	private TextView txt;
}
