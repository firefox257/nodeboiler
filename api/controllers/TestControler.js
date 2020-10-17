
var db=require("nedb");
var fs =require("fs");

(function()
{


$fac.inject(this,`routes, 
Exception, 
HtmlException,
JsonRequest,
JsonResponse
`);




routes.set("POST","/test/",  JsonRequest, JsonResponse, async function(req,res)
{
  retval= await req.body();
  res.ok({got:retval})
  
});

routes.set("GET","/test/${num}/", JsonRequest, JsonResponse, async function(req,res, args)
{
  
  
    //throw HtmlException.badrequest();
  if(isNaN(args.num))
  {
    
    return res.badrequest("Need to ba a number.");
  }
  
   return res.ok({num:args.num});
  
});




})();
