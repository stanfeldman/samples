public class Instrumentalist implements Performer
{
	public void perform()
	{
		System.out.println("Instrumentalist: playing " + this.song);
		this.instrument.play();
	}
	
	public void setSong(String song) { this.song = song; }
	
	public void setInstrument(Instrument instrument) { this.instrument = instrument; }
	
	private String song;
	
	private Instrument instrument;
}
