package mygame;

import com.jme3.app.SimpleApplication;
import com.jme3.asset.TextureKey;
import com.jme3.bullet.BulletAppState;
import com.jme3.bullet.control.RigidBodyControl;
import com.jme3.font.BitmapFont;
import com.jme3.font.BitmapText;
import com.jme3.input.MouseInput;
import com.jme3.input.controls.ActionListener;
import com.jme3.input.controls.MouseButtonTrigger;
import com.jme3.material.Material;
import com.jme3.math.FastMath;
import com.jme3.math.Quaternion;
import com.jme3.math.Vector2f;
import com.jme3.math.Vector3f;
import com.jme3.scene.Geometry;
import com.jme3.scene.shape.Box;
import com.jme3.scene.shape.Sphere;
import com.jme3.texture.Texture;
import com.jme3.texture.Texture.WrapMode;
import java.util.HashMap;
import java.util.Map;

public class Shooter extends SimpleApplication
{
    public static void main(String[] args) 
    {
        Shooter app = new Shooter();
        app.setShowSettings(false);
        app.start();
    }
    
    @Override
    public void simpleInitApp() 
    {
        loadResources();
        initPhysics();
        initCamera();
        initCrossHairs();
        initFloor();
        initWall();
        initKeys();
    }
    
    private void loadResources()
    {
        resources = new HashMap<String, Object>();
        Material pondMat = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
        TextureKey floorTextureKey = new TextureKey("textures/pond.jpg");
        floorTextureKey.setGenerateMips(true);
        Texture floorTexture = assetManager.loadTexture(floorTextureKey);
        floorTexture.setWrap(WrapMode.Repeat);
        pondMat.setTexture("ColorMap", floorTexture);
        resources.put("materials.pond", pondMat);
        resources.put("fonts.default", assetManager.loadFont("Interface/Fonts/Default.fnt"));
        Material stoneMat = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
        TextureKey key2 = new TextureKey("textures/rock.png");
        key2.setGenerateMips(true);
        Texture tex2 = assetManager.loadTexture(key2);
        stoneMat.setTexture("ColorMap", tex2);
        resources.put("materials.stone", stoneMat);
        Material wallMat = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
        TextureKey key = new TextureKey("textures/brickwall.jpg");
        key.setGenerateMips(true);
        Texture tex = assetManager.loadTexture(key);
        wallMat.setTexture("ColorMap", tex);
        resources.put("materials.brick", wallMat);
    }
    
    private void initPhysics()
    {
        bulletAppState = new BulletAppState();
        stateManager.attach(bulletAppState);
    }
    
    private void initCamera()
    {
        cam.setLocation(new Vector3f(0, 1f, 6f));
        //cam.lookAt(new Vector3f(0,0,0), new Vector3f(0,0,0));
        Quaternion rotator = new Quaternion();
        rotator.fromAngleAxis(FastMath.QUARTER_PI, Vector3f.UNIT_Y);
        //cam.setRotation(rotator);
    }

    private void initCrossHairs() 
    {
        guiNode.detachAllChildren();
        guiFont = (BitmapFont)resources.get("fonts.default");
        BitmapText ch = new BitmapText(guiFont);
        ch.setText("+");
        ch.setSize(guiFont.getCharSet().getRenderedSize()*2);
        ch.setLocalTranslation(settings.getWidth() / 2 - guiFont.getCharSet().getRenderedSize() / 3 * 2, settings.getHeight() / 2 + ch.getLineHeight() / 2, 0);
        guiNode.attachChild(ch);
    }
    
    private void initFloor() 
    {
        Box floorBox = new Box(Vector3f.ZERO, 10f, 0.1f, 5f);
        floorBox.scaleTextureCoordinates(new Vector2f(3, 6));
        Geometry floorGeo = new Geometry("floor", floorBox);
        floorGeo.setMaterial((Material)resources.get("materials.pond"));
        floorGeo.setLocalTranslation(0, -0.1f, 0);
        rootNode.attachChild(floorGeo);
        RigidBodyControl floorPhysics = new RigidBodyControl(0.0f);
        floorGeo.addControl(floorPhysics);
        bulletAppState.getPhysicsSpace().add(floorPhysics);
    }
    
    private void initWall() 
    {
        float brickLength = 0.48f;
        float brickWidth  = 0.24f;
        float brickHeight = 0.12f;
        for(int i = 0; i < 10; ++i)
            for(int j = 0; j < 5; ++j)
            {
                Vector3f loc = new Vector3f(j, i*2*brickHeight, 0);
                createBrick(loc, brickLength, brickWidth, brickHeight, 2);
            }
        
        Vector3f loc2 = new Vector3f(0, 1, 2);
        Box brickBox = new Box(Vector3f.ZERO, brickLength, brickWidth, brickHeight);
        brickBox.scaleTextureCoordinates(new Vector2f(1f, .5f));
        Geometry brickGeo = new Geometry("brick", brickBox);
        brickGeo.setMaterial((Material)resources.get("materials.brick"));
        brickGeo.setLocalTranslation(loc2);
        rootNode.attachChild(brickGeo);
        Quaternion quat1 = new Quaternion();
        quat1.fromAngleAxis(-FastMath.QUARTER_PI, Vector3f.UNIT_Z);
        Quaternion quat2 = new Quaternion();
        quat2.fromAngleAxis(FastMath.QUARTER_PI, Vector3f.UNIT_Y);
        brickGeo.rotate(quat1.mult(quat2));
    }
    
    private Geometry createBrick(Vector3f loc, float length, float width, float height, float mass)
    {
        Box brickBox = new Box(Vector3f.ZERO, length, height, width);
        brickBox.scaleTextureCoordinates(new Vector2f(1f, .5f));
        Geometry brickGeo = new Geometry("brick", brickBox);
        brickGeo.setMaterial((Material)resources.get("materials.brick"));
        brickGeo.setLocalTranslation(loc);
        rootNode.attachChild(brickGeo);
        RigidBodyControl brickPhysics = new RigidBodyControl(mass);
        brickGeo.addControl(brickPhysics);
        bulletAppState.getPhysicsSpace().add(brickPhysics);
        return brickGeo;
    }
    
    private void initKeys()
    {
        inputManager.addMapping("shoot", new MouseButtonTrigger(MouseInput.BUTTON_LEFT));
        inputManager.addListener(shootListener, "shoot");
    }
    
    private void createBall()
    {
        Sphere ballSphere = new Sphere(32, 32, 0.4f, true, false);
        ballSphere.setTextureMode(Sphere.TextureMode.Projected);
        Geometry ballGeo = new Geometry("ball", ballSphere);
        ballGeo.setMaterial((Material)resources.get("materials.stone"));
        rootNode.attachChild(ballGeo);
        ballGeo.setLocalTranslation(cam.getLocation());
        RigidBodyControl ballPhysics = new RigidBodyControl(1f);
        ballGeo.addControl(ballPhysics);
        bulletAppState.getPhysicsSpace().add(ballPhysics);
        ballPhysics.setLinearVelocity(cam.getDirection().mult(25));
    }
    
    private ActionListener shootListener = new ActionListener() 
    {
        public void onAction(String name, boolean isPressed, float tpf) 
        {
            if(name.equals("shoot") && !isPressed)
                createBall();
        }
    };
    
    private BulletAppState bulletAppState;
    private Map<String, Object> resources;
}
