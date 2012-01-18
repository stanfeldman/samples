import org.junit.Test;
import org.junit.Before;
import org.junit.Assert;

public class CalculatorTest
{
	@Before
	public void setUp()
	{
		this.calc = new Calculator();
	}
	
	@Test
	public void testAdd()
	{
		Assert.assertEquals("сложение", this.calc.add(5, 7), 12, 0);
	}
	
	private Calculator calc;
}
