
var db=require("nedb");


(function()
{


$fac.inject(this,"routes, Exception, HtmlException");




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

})();
 //*/