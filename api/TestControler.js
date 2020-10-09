
var db=require("nedb");
var {routes}=require("../Routes");






routes.set("/api/test", function(req,res)
{
  throw "bla";
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello jxjjjfjWorld!');
  res.end();
  
  
});
routes.set("/api/test1/${num}", function(req,res, num)
{
  console.log(`num ${num}`);
  
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`hello ${num}`);
  res.end();
  
  
});


 //*/