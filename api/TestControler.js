
var db=require("nedb");
var {Exception, HtmlException} =require(`../Exception`);
var {routes}=require("../Routes");






routes.set("/api/test/", function(req,res)
{
  throw HtmlException.badrequest();
  
});

routes.set("/api/test1/${num}/", function(req,res, num)
{
  
  if(isNan(num))
  {
    
  }
  
  
  console.log(`num ${num}`);
  
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`hello ${num}`);
  res.end();
  
  
});


 //*/