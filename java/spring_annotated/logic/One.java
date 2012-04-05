package logic;
import javax.inject.Named;
import javax.inject.Inject;

@Named
public class One
{
	public void doit()
	{
		System.out.println(getClass().getName() + ": executing...");
		two.doit2();
	}
	
	@Inject
	private Two two;
}
