public class Juggler implements Performer
{
	public Juggler(){}
	
	public Juggler(int bags)
	{
		this.bags = bags;
	}
	
	public void perform()
	{
		System.out.println("Juggler: " + this.bags + " bags");
	}
	
	private int bags = 3;
}
