package mygame;

import com.jme3.app.SimpleApplication;
import com.jme3.input.KeyInput;
import com.jme3.input.controls.ActionListener;
import com.jme3.input.controls.AnalogListener;
import com.jme3.input.controls.KeyTrigger;
import com.jme3.light.DirectionalLight;
import com.jme3.material.Material;
import com.jme3.math.ColorRGBA;
import com.jme3.math.Vector3f;
import com.jme3.renderer.RenderManager;
import com.jme3.scene.Geometry;
import com.jme3.scene.Node;
import com.jme3.scene.Spatial;
import com.jme3.scene.shape.Box;

public class Simple extends SimpleApplication 
{
    @Override
    public void simpleInitApp() 
    {
        int n = 10000;
        for(int i = 0; i < n; ++i)
        {
            Box box1 = new Box(new Vector3f(n/2+i,1,1), 1,1,1);
            Geometry geom1 = new Geometry("Box", box1);
            Material mat1 = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
            mat1.setColor("Color", ColorRGBA.White);
            //mat1.setTexture("ColorMap", assetManager.loadTexture("textures/monkey.jpg"));
            geom1.setMaterial(mat1);
            geom1.setLocalScale(0.05f);
            rootNode.attachChild(geom1);
        }
        /*Box box2 = new Box(new Vector3f(1,3,1), 1,1,1);
        Geometry geom2 = new Geometry("Box", box2);
        Material mat2 = new Material(assetManager, "Common/MatDefs/Misc/ShowNormals.j3md");
        //mat2.setColor("Color", ColorRGBA.Red);
        geom2.setMaterial(mat2);
        Node pivot = new Node("pivot");
        rootNode.attachChild(pivot);
        pivot.attachChild(geom1);
        pivot.attachChild(geom2);
        pivot.rotate(.4f,.4f,.0f);*/
        /*teapot = assetManager.loadModel("models/teapot.obj");
        //teapot.move(1, 1, 1);
        Material mat3 = new Material(assetManager, "Common/MatDefs/Misc/ShowNormals.j3md");
        teapot.setMaterial(mat3);
        rootNode.attachChild(teapot);
        Spatial wall = new Geometry("Box", new Box(Vector3f.ZERO, 2.5f, 2.5f, 1.0f));
        Material wall_material = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
        wall_material.setTexture("ColorMap", assetManager.loadTexture("textures/brickwall.jpg"));
        wall.setMaterial(wall_material);
        wall.setLocalTranslation(2.0f,-2.5f,0.0f);
        rootNode.attachChild(wall);
        viewPort.setBackgroundColor(ColorRGBA.LightGray);
        initKeys();*/
    }

    @Override
    public void simpleUpdate(float tpf) 
    {
        //teapot.rotate(0, 2*tpf, 0);
    }

    @Override
    public void simpleRender(RenderManager rm) {
        //TODO: add render code
    }
    
    private void initKeys()
    {
        inputManager.addMapping("Pause", new KeyTrigger(KeyInput.KEY_P));
        inputManager.addMapping("Left", new KeyTrigger(KeyInput.KEY_L));
        inputManager.addMapping("Right", new KeyTrigger(KeyInput.KEY_R));
        inputManager.addListener(actionListener, new String[]{"Pause"});
        inputManager.addListener(analogListener, new String[]{"Left","Right"});
    }
    
    private ActionListener actionListener = new ActionListener() 
    {
        public void onAction(String name, boolean isPressed, float tpf) 
        {
            if(name.equals("Pause") && !isPressed)
                isRunning = !isRunning;
        }
    };
    
    private AnalogListener analogListener = new AnalogListener() 
    {
        public void onAnalog(String name, float value, float tpf) 
        {
            if(isRunning)
            {
                if(name.equals("Left"))
                {
                    Vector3f v = teapot.getLocalTranslation();
                    teapot.setLocalTranslation(v.x - value*speed, v.y, v.z);
                }
                else if(name.equals("Right"))
                {
                    Vector3f v = teapot.getLocalTranslation();
                    teapot.setLocalTranslation(v.x + value*speed, v.y, v.z);
                }
            }
        }
    };
    
    protected Spatial teapot;
    protected boolean isRunning = true;
}
