
var db=require("nedb");


(function()
{


$fac.inject(this,`routes, 
Exception, 
HtmlException,
responses
`);

var json=responses.json;


routes.set("/api/test/", function(req,res)
{
  return json.badrequest("oh crap");
});

routes.set("/api/test1/${num}/", function(req,res, num)
{
  
  
  return json.ok({num:num});
  
  
  
});




})();
 //*/