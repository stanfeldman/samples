package feldman.samples.java;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Random;

import org.jbox2d.collision.AABB;
import org.jbox2d.collision.shapes.CircleDef;
import org.jbox2d.common.Vec2;
import org.jbox2d.dynamics.Body;
import org.jbox2d.dynamics.BodyDef;
import org.jbox2d.dynamics.World;

public class PhysicsWorld extends ArrayList<Body>
{
	public PhysicsWorld()
	{
		super();
		AABB aabb = new AABB();
		aabb.lowerBound.set((float)100.0, (float)100.0);
		aabb.upperBound.set((float)-100.0, (float)-100.0);
		Vec2 gravity = new Vec2((float)0.0, (float)-10.0);
		world = new World(aabb, gravity, true);
	}
	
	public void addRandom()
	{
		BodyDef bd = new BodyDef();
		bd.position.set(random.nextFloat()*100, random.nextFloat()*100);
		Body body = world.createBody(bd);
		CircleDef cd = new CircleDef();
		cd.radius = (float)1.8;
		cd.density = (float)1.0;
		body.createShape(cd);
		body.setMassFromShapes();
		add(body);
	}
	
	public void update(float timestep, int iterations)
	{
		world.step(timestep, iterations);
		draw();
	}
	
	public void draw()
	{
		Iterator<Body> it = iterator();
		System.out.println("next step");
		while(it.hasNext())
		{
			Body body = it.next();
			Vec2 position = body.getPosition();
			float angle = body.getAngle();
			System.out.format("x: %f, y: %f, angle: %f\n", position.x, position.y, angle);
		}
	}

	private Random random = new Random();
	private World world;
}
