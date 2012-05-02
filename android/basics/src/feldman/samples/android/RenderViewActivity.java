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

public class RenderViewActivity extends Activity 
{
	private class RenderView extends View
	{
		public RenderView(Context context)
		{
			super(context);
		}
		
		
		protected void onDraw(Canvas canvas) 
		{
			//canvas.drawRGB(random.nextInt(256), random.nextInt(256), random.nextInt(256));
			Paint paint = new Paint();
			paint.setColor(Color.BLUE);
			paint.setStrokeWidth(2);
			canvas.drawText(String.valueOf(canvas.getWidth()), 50, 50, paint);
			canvas.drawText(String.valueOf(canvas.getHeight()), 100, 50, paint);
			//invalidate();
		}
		
		private Random random = new Random();
	}
	
	
	protected void onCreate(Bundle savedInstanceState) 
	{
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
		super.onCreate(savedInstanceState);
		RenderView view = new RenderView(this);
		setContentView(view);
	}
}
