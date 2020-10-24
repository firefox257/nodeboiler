
var db=require("nedb");
var fs =require("fs");

(function()
{


$fac.inject(this,`routes, 
cors,
Exception, 
HtmlException,
JsonRequest,
JsonResponse,
ImageResponse
`);




routes.set("POST",cors.web,  "/test/", JsonRequest, JsonResponse, async function(req,res)
{
  var retval= await req.body();
  
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

routes.set("GET", cors.web,  "/testimg/${msg}", JsonRequest, ImageResponse, async function(req,res, args)
{
  
  return res.ok(`api/Resources/${args.msg}`);
    
  
   //return res.badrequest("api/Responses/test.jpg");
  
});


})();
