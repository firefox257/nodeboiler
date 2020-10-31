
var db=require("nedb");
var fs =require("fs");

(function()
{


$fac.inject(this,`routes, 
cors,
Exception, 
HtmlException,
NotFoundException,
Request,
JsonRequest,
JsonResponse,
ImageResponse,
FileResponse,
TestImageService
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
  try
  {
    var s=  await TestImageService.get(args.msg);
    
    res.ok(s);
  }
  catch(ex)
  {
    if(ex instanceof NotFoundException)
    {
      res.notfound();
    }
    else
    {
      res.error();
      throw ex;
    }
  }
  
  
  
  
  
});



routes.set("GET", cors.web,  "/testvideo/", Request, FileResponse, async function(req,res, args)
{
  var range = req.getRange();
  res.ok("api/Resources/test.mp4", range);
});





})();
