package feldman.samples.android;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.os.Bundle;
import android.widget.TextView;

public class DbActivity extends Activity 
{
	
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		DbHelper dbHelper = new DbHelper(this, "basics");
		SQLiteDatabase db = dbHelper.getWritableDatabase();
		ContentValues values = new ContentValues();
		values.put("value", "hooray, lala!");
		values.put("value", "op bzz");
		db.insert("t1", null, values);
		Cursor cursor = null;
		String res = "";
		try
		{
			cursor = db.query("t1", new String[]{"value"}, null, null, null, null, null);
			cursor.moveToFirst();
			for(int i = 0; i < cursor.getCount(); ++i)
			{
				res += cursor.getString(0) + "\n";
				cursor.moveToNext();
			}
		}
		finally
		{
			if(cursor != null)
				cursor.close();
		}
		db.close();
		TextView txt = new TextView(this);
		txt.setText(res);
		setContentView(txt);
	}
	
	private static class DbHelper extends SQLiteOpenHelper
	{
		public DbHelper(Context context, String name) 
		{
			super(context, name, null, 3);
		}

		
		public void onCreate(SQLiteDatabase db) 
		{
			db.execSQL("create table t1(_id integer primary key, value text)");
		}

		
		public void onUpgrade(SQLiteDatabase db, int arg1, int arg2) 
		{
			db.execSQL("drop table if exists t1");
			onCreate(db);
		}
	}
}
