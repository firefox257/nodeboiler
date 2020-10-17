var fs = require("fs")
var vm = require('vm')
var Factory= require("./Factory")


function server(basedir)
{
  var $fac=new Factory();
  var context=
  {
    $fac:$fac,
    console:console,
    require:require
  };
  vm.createContext(context);
  
  var ret={
    include: function(filename)
    {
      vm.runInContext(fs.readFileSync(basedir+filename,'utf8'),context);
      
    }
  };
  context.include=ret.include;
  
  return ret;
}



(function()
{
  
  var web= server("./webserver/");
  web.include("configuration.js");
  web.include("server.js");
  
  var api= server("./api/");
  api.include("configuration.js");
  api.include("server.js");
  
  
})();


