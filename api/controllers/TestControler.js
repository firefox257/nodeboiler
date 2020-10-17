
var db=require("nedb");
var fs =require("fs");

(function()
{


$fac.inject(this,`routes, 
cors,
Exception, 
HtmlException,
JsonRequest,
JsonResponse
`);




routes.set("POST",cors.web,  "/test/", JsonRequest, JsonResponse, async function(req,res)
{
  retval= await req.body();
  res.ok({got:retval})
  
});

routes.set("GET", cors.web,  "/test/${num}/", JsonRequest, JsonResponse, async function(req,res, args)
{
  
  
    //throw HtmlException.badrequest();
  if(isNaN(args.num))
  {
    
    return res.badrequest("Need to ba a number.");
  }
  
   return res.ok({num:args.num});
  
});




})();
