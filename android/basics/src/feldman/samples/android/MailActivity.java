package feldman.samples.android;

import java.io.IOException;
import java.util.Properties;

import javax.mail.Flags;
import javax.mail.Folder;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.NoSuchProviderException;
import javax.mail.Session;
import javax.mail.Store;
import javax.mail.event.MessageCountEvent;
import javax.mail.event.MessageCountListener;
import javax.mail.search.FlagTerm;

import com.sun.mail.imap.IMAPFolder;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

public class MailActivity extends Activity {
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		Log.d("basics", Mail.class.toString());
		//this.send();
		this.receive();
	}
	private void receive(){
		Properties props = System.getProperties();
		props.setProperty("mail.store.protocol", "imaps");
		Session session = Session.getDefaultInstance(props, null);
		Store store;
		try {
			store = session.getStore("imaps");
			store.connect("imap.gmail.com", "stanislavfeldman@gmail.com", "!1Ebet3#");
			IMAPFolder folder = (IMAPFolder)store.getFolder("INBOX");
			folder.open(Folder.READ_WRITE);
			final MailActivity parent = this;
			folder.addMessageCountListener(new MessageCountListener() {	
				public void messagesRemoved(MessageCountEvent e) {
					// TODO Auto-generated method stub
					
				}		
				public void messagesAdded(MessageCountEvent e) {
					parent.show_messages(e.getMessages());
				}
			});
			folder.idle();
			Flags seen = new Flags(Flags.Flag.SEEN);
		    FlagTerm unseenFlagTerm = new FlagTerm(seen, false);
//			Message[] messages = folder.search(unseenFlagTerm);
//			this.show_messages(messages);
		} catch (NoSuchProviderException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	private void show_messages(Message[] messages){
		for(Message message:messages) 
        {
			try {
				Multipart mp = (Multipart)message.getContent();
				System.out.println(mp.getBodyPart(0).getContent().toString());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        }
	}
	private void send(){
		Mail m = new Mail("stanislavfeldman@gmail.com", "!1Ebet3#"); 
		String[] toArr = {"stanislavfeldman@gmail.com"}; 
		m.set_to(toArr); 
		m.set_from("wooo@wooo.com"); 
		m.set_subject("This is an email sent using my Mail JavaMail wrapper from an Android device."); 
		m.set_body("Email body."); 
		try {
			if(m.send()) { 
				Toast.makeText(this, "Email was sent successfully.", Toast.LENGTH_LONG).show(); 
			} else { 
				Toast.makeText(this, "Email was not sent.", Toast.LENGTH_LONG).show(); 
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
