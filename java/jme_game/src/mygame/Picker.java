package mygame;

import com.jme3.app.SimpleApplication;
import com.jme3.collision.CollisionResult;
import com.jme3.collision.CollisionResults;
import com.jme3.font.BitmapText;
import com.jme3.input.MouseInput;
import com.jme3.input.controls.ActionListener;
import com.jme3.input.controls.MouseButtonTrigger;
import com.jme3.material.Material;
import com.jme3.math.ColorRGBA;
import com.jme3.math.Ray;
import com.jme3.math.Vector3f;
import com.jme3.scene.Geometry;
import com.jme3.scene.Node;
import com.jme3.scene.Spatial;
import com.jme3.scene.shape.Box;
import com.jme3.scene.shape.Sphere;

public class Picker extends SimpleApplication
{
    public static void main(String[] args) 
    {
        Picker app = new Picker();
        app.setShowSettings(false);
        app.start();
    }
    
    @Override
    public void simpleInitApp() 
    {
        initCrossHairs();
        initMark();
        initShootables();
        initKeys();
    }

    private Spatial makeCube(String name, float x, float y, float z) 
    {
        Geometry cube = new Geometry(name, new Box(new Vector3f(x, y, z), 1, 1, 1));
        Material mat = new Material(assetManager, "Common/MatDefs/Misc/ShowNormals.j3md");
        cube.setMaterial(mat);
        return cube;
    }

    private void initShootables() 
    {
        shootables = new Node("Shootables");
        rootNode.attachChild(shootables);
        shootables.attachChild(makeCube("Dragon", -2f, 0f, 1f));
        shootables.attachChild(makeCube("a tin can", 1f, -2f, 0f));
        shootables.attachChild(makeCube("the Sheriff", 0f, 1f, -2f));
    }

    private void initCrossHairs() 
    {
        guiNode.detachAllChildren();
        guiFont = assetManager.loadFont("Interface/Fonts/Default.fnt");
        BitmapText ch = new BitmapText(guiFont);
        ch.setText("+");
        ch.setSize(guiFont.getCharSet().getRenderedSize()*2);
        ch.setLocalTranslation(settings.getWidth() / 2 - guiFont.getCharSet().getRenderedSize() / 3 * 2, settings.getHeight() / 2 + ch.getLineHeight() / 2, 0);
        guiNode.attachChild(ch);
    }
    
    private void initMark() 
    {
        Sphere sphere = new Sphere(30, 30, 0.2f);
        mark = new Geometry("Boom", sphere);
        Material mark_mat = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
        mark_mat.setColor("Color", ColorRGBA.Red);
        mark.setMaterial(mark_mat);
    }
    
    private void initKeys()
    {
        inputManager.addMapping("Shoot", new MouseButtonTrigger(MouseInput.BUTTON_LEFT));
        inputManager.addListener(shootListener, "Shoot");
    }
    
    private ActionListener shootListener = new ActionListener() 
    {
        public void onAction(String name, boolean isPressed, float tpf) 
        {
            if(name.equals("Shoot") && !isPressed)
            {
                CollisionResults collisions = new CollisionResults();
                Ray ray = new Ray(cam.getLocation(), cam.getDirection());
                shootables.collideWith(ray, collisions);
                if(collisions.size() > 0)
                {
                    CollisionResult closestCollision = collisions.getClosestCollision();
                    mark.setLocalTranslation(closestCollision.getContactPoint());
                    rootNode.attachChild(mark);
                    System.out.println("You killed " + closestCollision.getGeometry().getName());
                }
                else
                    rootNode.detachChild(mark);
            }
        }
    };
    
    private Node shootables;
    private Geometry mark;
}
