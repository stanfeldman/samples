package scripts;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineFactory;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

/**
 * @author stanislavfeldman
 */
public class Main 
{
    public static void main(String[] args) throws ScriptException 
    {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("jython");
        engine.eval("print 'hi, stas'");
        for(ScriptEngineFactory f : manager.getEngineFactories())
                System.out.println(f.getEngineName());
    }
}
