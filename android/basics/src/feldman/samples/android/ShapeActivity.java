package feldman.samples.android;

import java.util.Random;

import android.app.Activity;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.TextView;

public class ShapeActivity extends Activity 
{
	private class Shape extends View
	{
		public Shape(Context context)
		{
			super(context);
		}
		
		
		protected void onDraw(Canvas canvas) 
		{
			Paint paint = new Paint();
			paint.setColor(Color.BLUE);
			paint.setStrokeWidth(2);
			canvas.drawText(String.valueOf(canvas.getWidth()), 50, 50, paint);
			canvas.drawText(String.valueOf(canvas.getHeight()), 100, 50, paint);
			canvas.drawLine(0, 0, canvas.getWidth()-1, canvas.getHeight()-1, paint);
			canvas.drawCircle(canvas.getWidth()/2, canvas.getHeight()/2, 50, paint);
		}
	}
	
	
	protected void onCreate(Bundle savedInstanceState) 
	{
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
		super.onCreate(savedInstanceState);
		setContentView(new Shape(this));
	}
}
