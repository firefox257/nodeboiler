
var db=require("nedb");
var fs =require("fs");

(function()
{


$fac.inject(this,`routes, 
Exception, 
HtmlException,
request,
responses
`);

var json=responses.json;
var body=request.body;


routes.set("POST","/test/", function(req,res)
{
  
  
  
  body.json(req,function(d)
  {
    //fs.appendFileSync('message.txt', "here1\r\n");
    json.ok(res, {got:d})
  });
  
});

routes.set("GET","/test/${num}/", function(req,res, num)
{
  if(isNaN(num)) return json.badrequest(res,"Need to ba a number.");
  
   json.ok(res, {num:num});
  
});




})();
