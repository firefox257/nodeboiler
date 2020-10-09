
var db=require("nedb");
var {routes}=require("../Routes");






routes.set("/api/test", function(req,res)
{
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello jxjjjfjWorld!');
  res.end();
  
  
});

 //*/