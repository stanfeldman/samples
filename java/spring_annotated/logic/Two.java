package logic;
import javax.inject.Named;

@Named
public class Two
{
	public void doit2()
	{
		System.out.println(getClass().getName() + ": executing...");
	}
}
