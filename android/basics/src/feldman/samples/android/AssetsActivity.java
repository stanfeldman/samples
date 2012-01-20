package feldman.samples.android;

import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;

import android.app.Activity;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.view.MotionEvent;
import android.widget.TextView;

public class AssetsActivity extends Activity 
{
	@Override
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		TextView txt = new TextView(this);
		setContentView(txt);
		
		AssetManager am = getAssets();
		InputStream is = null;
		try
		{
			is = am.open("texts/some_text.txt");
			txt.setText(IOUtils.toString(is));
		}
		catch(IOException ex) { txt.setText("Couldn't load file"); }
		finally
		{
			if(is != null)
				try
				{
					is.close();
				}
				catch(IOException ex) { txt.setText("Couldn't close file"); }
		}
	}
}
