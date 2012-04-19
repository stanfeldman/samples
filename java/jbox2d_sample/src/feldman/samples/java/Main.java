package feldman.samples.java;

public class Main 
{
	public static void main(String[] args) 
	{
		PhysicsWorld world = new PhysicsWorld();
		for(int i = 0; i < 5; ++i)
			world.addRandom();
		float fps = (float)60;
		float timestep = 1/fps;
		int iterations = 500;
		for(int j = 0; j < 10; ++j)
			world.update(timestep, iterations);
	}
}
