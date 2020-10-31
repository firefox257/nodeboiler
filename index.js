var fs = require("fs")
var vm = require('vm')
var Factory= require("./Factory")



function include(filename)
{
  var fs = require("fs");
  var vm = require('vm');
  var ii=currentfile.lastIndexOf("/");
  var dir=currentfile.substring(0,ii+1);
  
  var context=
  {
    $fac:$fac,
    console:console,
    require:require,
    currentfile:dir+filename
  };
  vm.createContext(context);
  vm.runInContext(`${include}
  ${fs.readFileSync(dir+filename,'utf8')}`,context,{filename:filename, lineOffset:-19});
  
}

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
  
  /*function include(filename)
  {
      context.currentfile=basedir+filename;
      vm.runInContext(`${fs.readFileSync(basedir+filename,'utf8')}`,context,{filename:basedir+filename, lineOffset:0});
    
  }*/
  //context.include=include;
  /*context.$fac=$fac;
  context.console=console;
  context.require=require;*/
  
  var ret={
    include: function(filename)
    {
      
      context.currentfile=basedir+filename;
      vm.runInContext(`${include}
      ${fs.readFileSync(basedir+filename,'utf8')}`,context,{filename:basedir+filename, lineOffset:-19});
      
    }
  };
  //context.include=ret.include;
  
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


