
var db=require("nedb");


(function()
{


$fac.inject(this,`routes, 
Exception, 
HtmlException,
responses
`);

var json=responses.json;


routes.set("GET","/api/test/", function(req,res)
{
  return json.unauthorized("oh crap");
});

routes.set("GET","/api/test/${num}/", function(req,res, num)
{
  if(isNaN(num)) return json.badrequest("Need to ba a number.");
  
  return json.ok({num:num});
  
});




})();
 //*/