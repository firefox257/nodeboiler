
var db=require("nedb");
var fs =require("fs");

(function()
{


$fac.inject(this,`routes, 
Exception, 
HtmlException
`);




routes.set("POST","/test/",  async function(req,res)
{
  retval= await req.toJson();
  res.json.ok({got:retval})
  
});

routes.set("GET","/test/${num}/", async function(req,res, args)
{
  
  
    throw HtmlException.badrequest();
  if(isNaN(args.num))
  {
    
    return res.json.badrequest("Need to ba a number.");
  }
  
   return res.json.ok({num:args.num});
  
});




})();
