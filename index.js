var fs = require("fs")
var vm = require('vm')



function Factory()
{
  
  var items={};
  
  return{
    
    set:function(n,item)
    {
      items[n]=item;
    },
    inject: function(scope, s)
    {
      s=s.split(",").map(w=>w.trim());
      s.filter(w=>w!=="");
      s.map(w=>scope[w]=items[w]);
    }
    
  };
  
}


function server(basedir)
{
  var $fac=Factory();
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
  
  var web=server("./webserver/");
  web.include("configuration.js");
  web.include("server.js");
  
  
  var api=server("./api/");
  api.include("configuration.js");
  api.include("server.js");
  
  
})();


