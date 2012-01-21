package feldman.samples.android;

import java.io.IOException;
import java.io.InputStream;

import android.app.Activity;
import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.os.Bundle;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.Window;
import android.view.WindowManager;

public class SurfaceViewActivity extends Activity 
{
	private class FastView extends SurfaceView implements Runnable
	{
		public FastView(Context context)
		{
			super(context);
			this.holder = getHolder();
			this.asset_manager = context.getAssets();
			
		}
		
		public void run()
		{
			while(this.running)
			{
				if(!this.holder.getSurface().isValid())
					continue;
				Canvas canvas = this.holder.lockCanvas();
				//canvas.drawRGB(255, 0, 0);
				Bitmap bitmap = null;
				InputStream is = null;
				try
				{
					is = this.asset_manager.open("images/image.png");
					bitmap = BitmapFactory.decodeStream(is);
				}
				catch(IOException ex) {}
				finally
				{
					if(is != null)
						try
						{
							is.close();
						}
						catch(IOException ex){}
				}
				if(bitmap != null)
					canvas.drawBitmap(bitmap, 0, 100, null);
				this.holder.unlockCanvasAndPost(canvas);
			}
		}
		
		public void resume()
		{
			this.running = true;
			this.thread = new Thread(this);
			this.thread.start();
		}
		
		public void pause()
		{
			running = false;
			while(true)
			{
				try
				{
					this.thread.join();
					break;
				}
				catch(Exception ex){}
			}
		}
		
		private Thread thread;
		
		private SurfaceHolder holder;
		
		private volatile boolean running = false;
		
		private AssetManager asset_manager;
	}
	
	@Override
	protected void onCreate(Bundle savedInstanceState) 
	{
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
		super.onCreate(savedInstanceState);
		this.view = new FastView(this);
		setContentView(this.view);
	}
	
	@Override
	protected void onPause() 
	{
		super.onPause();
		this.view.pause();
	}

	@Override
	protected void onResume() 
	{
		super.onResume();
		this.view.resume();
	}

	private FastView view;
}
