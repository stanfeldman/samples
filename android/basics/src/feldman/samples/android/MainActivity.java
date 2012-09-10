package feldman.samples.android;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ArrayAdapter;
import android.widget.GridView;
import android.widget.ListView;

public class MainActivity extends Activity 
{
    
    public void onCreate(Bundle savedInstanceState) 
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        GridView main_menu = (GridView)findViewById(R.id.main_menu);
        main_menu.setAdapter(new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, this.samples));
        main_menu.setOnItemClickListener(new OnItemClickListener() {
			public void onItemClick(AdapterView<?> parent, View v, int position, long id) {
				Log.d("gridview item position", String.valueOf(position));
				String sample_name = samples[position];
				try 
				{
					Class cl = Class.forName("feldman.samples.android." + sample_name + "Activity");
					Intent intent = new Intent(v.getContext(), cl);
					startActivity(intent);
				}
				catch (ClassNotFoundException e) 
				{
					e.printStackTrace();
				}
			}
		});
    }

	private String samples [] = {
			"TileMenu", "LifeCycle", "Touch", "Assets", 
			"ExternalStorage", "RenderView", "Shape", 
			"Bitmap", "SurfaceView", "Prefs", "Db"
	};
}