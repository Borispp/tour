/*
    krpano HTML5 Javascript Plugin Example
*/

function krpanoplugin() {
    console.log('Test');
    var local = this;   // save the 'this' pointer from the current plugin object
    var krpano = null;  // the krpano and plugin interface objects
    var plugin = null;
    var xml_value = 100.0;   // the value for a custom xml attribute

    local.registerplugin = function(krpanointerface, pluginpath, pluginobject) {
        krpano = krpanointerface;
        plugin = pluginobject;

        plugin.dosomething = action_dosomething;
    }

    local.unloadplugin = function() {
        plugin = null;
        krpano = null;
    }

    function action_dosomething()   {
      console.log('Test');
    }
}
