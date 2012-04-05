package feldman.samples.android;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;

import android.app.Activity;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.view.MotionEvent;
import android.widget.TextView;

public class ExternalStorageActivity extends Activity 
{
	@Override
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		TextView txt = new TextView(this);
		setContentView(txt);
		try
		{
			File ext_dir = Environment.getExternalStorageDirectory();
			File f = new File(ext_dir.getAbsolutePath() + File.separator + "basics" + File.separator + "basics_app_file.txt");
			FileUtils.write(f, "from basics app");
			txt.setText("text was written");
			String writtenText = FileUtils.readFileToString(f);
			Log.i(getClass().getName(), writtenText);
			txt.setText("text: " + writtenText);
		}
		catch(IOException ex) { txt.setText(ex.toString()); }
	}
}
