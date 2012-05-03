package mygame;

import com.jme3.app.SimpleApplication;
import com.jme3.light.DirectionalLight;
import com.jme3.material.Material;
import com.jme3.math.ColorRGBA;
import com.jme3.math.Vector3f;
import com.jme3.renderer.RenderManager;
import com.jme3.scene.Geometry;
import com.jme3.scene.Node;
import com.jme3.scene.Spatial;
import com.jme3.scene.shape.Box;

public class Main extends SimpleApplication 
{
    public static void main(String[] args) 
    {
        Main app = new Main();
        app.setShowSettings(false);
        app.start();
    }

    @Override
    public void simpleInitApp() 
    {
        Box box1 = new Box(new Vector3f(1,-1,1), 1,1,1);
        Geometry geom1 = new Geometry("Box", box1);
        Material mat1 = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
        mat1.setColor("Color", ColorRGBA.Blue);
        geom1.setMaterial(mat1);
        Box box2 = new Box(new Vector3f(1,3,1), 1,1,1);
        Geometry geom2 = new Geometry("Box", box2);
        Material mat2 = new Material(assetManager, "Common/MatDefs/Misc/ShowNormals.j3md");
        //mat2.setColor("Color", ColorRGBA.Red);
        geom2.setMaterial(mat2);
        Node pivot = new Node("pivot");
        rootNode.attachChild(pivot);
        pivot.attachChild(geom1);
        pivot.attachChild(geom2);
        pivot.rotate(.4f,.4f,.0f);
        teapot = assetManager.loadModel("Models/Teapot/Teapot.obj");
        //teapot.move(1, 1, 1);
        Material mat3 = new Material(assetManager, "Common/MatDefs/Misc/ShowNormals.j3md");
        teapot.setMaterial(mat3);
        rootNode.attachChild(teapot);
        Spatial wall = new Geometry("Box", new Box(Vector3f.ZERO, 2.5f, 2.5f, 1.0f));
        Material wall_material = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
        wall_material.setTexture("ColorMap", assetManager.loadTexture("Textures/Terrain/BrickWall/BrickWall.jpg"));
        wall.setMaterial(wall_material);
        wall.setLocalTranslation(2.0f,-2.5f,0.0f);
        rootNode.attachChild(wall);
        DirectionalLight sun = new DirectionalLight();
        sun.setDirection(new Vector3f(-0.1f, -0.7f, -1.0f));
        rootNode.addLight(sun);
    }

    @Override
    public void simpleUpdate(float tpf) 
    {
        teapot.rotate(0, 2*tpf, 0);
    }

    @Override
    public void simpleRender(RenderManager rm) {
        //TODO: add render code
    }
    
    protected Spatial teapot;
}
