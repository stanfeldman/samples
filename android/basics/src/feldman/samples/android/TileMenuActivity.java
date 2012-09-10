package feldman.samples.android;

import android.app.Activity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.GridView;

public class TileMenuActivity  extends Activity
{
	@Override
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		setContentView(R.layout.tile);
		GridView buttons = (GridView)findViewById(R.id.buttons);
		String samples [] = {
				"lakjew", "LifeCycle", "Touch", "Assets", 
				"ExternalStorage", "RenderView", "Shape", 
				"Bitmap", "SurfaceView", "Prefs", "Db"
		};
		buttons.setAdapter(new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, samples));
	}
}
