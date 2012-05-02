package feldman.samples.android;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class MainActivity extends ListActivity 
{
    @Override
    public void onCreate(Bundle savedInstanceState) 
    {
        super.onCreate(savedInstanceState);
        setListAdapter(new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, this.samples));
    }
    
    @Override
	protected void onListItemClick(ListView l, View v, int position, long id) 
    {
		super.onListItemClick(l, v, position, id);
		String sample_name = samples[position];
		//AlertDialog mbox = new AlertDialog.Builder(this).create();
		//mbox.setTitle("alarm");
		//mbox.setMessage(sample_name);
		//mbox.show();
		try 
		{
			Class cl = Class.forName("feldman.samples.android." + sample_name + "Activity");
			Intent intent = new Intent(this, cl);
			startActivity(intent);
		}
		catch (ClassNotFoundException e) 
		{
			e.printStackTrace();
		}
	}

	private String samples [] = {
			"LifeCycle", "Touch", "Assets", 
			"ExternalStorage", "RenderView", "Shape", 
			"Bitmap", "SurfaceView", "Prefs", "Db"
	};
}