import java.util.Collection;

public class OneManBand implements Performer
{
	public void perform()
	{
		System.out.println("OneManBand: ");
		for(Instrument instrument : this.instruments)
			instrument.play();
	}
	
	public void setInstruments(Collection<Instrument> instruments) {  this.instruments = instruments; }
	
	private Collection<Instrument> instruments;
}
