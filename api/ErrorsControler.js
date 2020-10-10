
var mime = require('mime-types');
var fs=require("fs");



(function()
{

$fac.inject(this,"routes, Exception, HtmlException");



function sendtHtmlPage(req, res, path, type)
{
   fs.stat(path, function(err, stat)
     {
       var head = {
         'Content-Length': stat.size,
          'Content-Type': mime.lookup(".html")
       };
       res.writeHead(type, head);
       fs.createReadStream(path).pipe(res);
     });
}


routes.set("GET","/error/${errcode}", function(req,res,errcode)
{
  sendtHtmlPage(req,res,`www/errors/${errcode}.html`,errcode);
});





})();
