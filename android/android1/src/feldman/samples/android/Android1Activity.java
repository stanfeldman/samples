package feldman.samples.android;

import java.util.Random;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;

public class Android1Activity extends Activity 
{
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) 
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        final EditText text1 = (EditText)findViewById(R.id.text1);
        final EditText text2 = (EditText)findViewById(R.id.text2);
        final Button red = (Button)findViewById(R.id.red_btn);
        final Button green = (Button)findViewById(R.id.green_btn);
        final Random r = new Random();
        OnClickListener listener = new OnClickListener() 
        {
			public void onClick(View v) 
			{
				text1.setText(String.valueOf(r.nextInt(100)));
				text2.setText(String.valueOf(r.nextInt(200)));
			}
		};
		red.setOnClickListener(listener);
		green.setOnClickListener(listener);
    }
}