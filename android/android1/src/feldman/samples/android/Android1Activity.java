package feldman.samples.android;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.widget.LinearLayout;

public class Android1Activity extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //LinearLayout root = new LinearLayout(this);
        //root.setOrientation(LinearLayout.VERTICAL);
        //root.setBackgroundColor(Color.GRAY);        
        //setContentView(root);
        setContentView(R.layout.main);
    }
}