package ru.limehat.android.smser;

import android.os.Bundle;
import android.app.Activity;
import android.app.PendingIntent;
import android.content.Intent;
import android.telephony.SmsManager;
import android.telephony.SmsMessage;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button send_btn = (Button)findViewById(R.id.btnSendSMS);
        final EditText phone_edit = (EditText)findViewById(R.id.txtPhoneNo);
        final EditText msg_edit = (EditText)findViewById(R.id.txtMessage);
        send_btn.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				String phone = phone_edit.getText().toString();
				String msg = msg_edit.getText().toString();
				if(phone.length() > 0 && msg.length() > 0)
					sendSms(phone, msg);
				else
					Toast.makeText(getBaseContext(), "You need to fill all fields", Toast.LENGTH_SHORT).show();
			}
		});
        this.sendSms("5554", "hey from smser");
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }
    
    private void sendSms(String phone, String msg){ 
    	SmsManager sm = SmsManager.getDefault();
    	sm.sendTextMessage(phone, null, msg, null, null);
    }
}
