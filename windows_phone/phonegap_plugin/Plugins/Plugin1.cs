using System;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using WP7CordovaClassLib.Cordova.Commands;
using WP7CordovaClassLib.Cordova.JSON;
using WP7CordovaClassLib.Cordova;

namespace phonegap_plugin.Plugins
{
    public class Plugin1 : BaseCommand
    {
        public void first(string options)
        {
            string var1 = null;
            try
            {
                var1 = JsonHelper.Deserialize<string[]>(options)[0];
                if (var1.Length > 0)
                    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "from Plugin1 first: " + var1));
                else
                    DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR));
            }
            catch (Exception e)
            {
                DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
            }
        }
    }
}
