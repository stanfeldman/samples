public class PoeticJuggler extends Juggler
{
	public PoeticJuggler(Poem poem)
	{
		super();
		this.poem = poem;
	}
	
	public PoeticJuggler(Poem poem, int bags)
	{
		super(bags);
		this.poem = poem;
	}
	
	public void perform()
	{
		super.perform();
		System.out.println("PoeticJuggler: ");
		this.poem.recite();
	}
	
	private Poem poem;
}
