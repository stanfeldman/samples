package feldman.samples.android;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.FileUtils;

//import org.apache.commons.io.IOUtils;

import android.app.Activity;
import android.content.Intent;
import android.content.res.AssetManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.view.MotionEvent;
import android.widget.TextView;

public class AssetsActivity extends Activity 
{
	
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		TextView txt = new TextView(this);
		txt.setText("lala");
		setContentView(txt);
		
		try
		{
			File ext_dir = Environment.getExternalStorageDirectory();
			String filepath = "basics" + File.separator + "image.png";
			File f = new File(ext_dir.getAbsolutePath() + File.separator + filepath);
			if(f.exists())
				f.delete();
			AssetManager am = getAssets();
			InputStream is = am.open("images/image.png");
			FileUtils.copyInputStreamToFile(is, f); 
			txt.setText("image was written");
			Intent intent = new Intent(Intent.ACTION_SEND);
			intent.setType("image/png");
			intent.putExtra(Intent.EXTRA_STREAM, Uri.parse("file:///sdcard/"+filepath));
			txt.setText("image path: "+"file:///sdcard/"+filepath);
			startActivity(Intent.createChooser(intent, "Share Image!"));
		}
		catch(IOException ex) { txt.setText(ex.toString()); }
		/*AssetManager am = getAssets();
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
		}*/
	}
}
