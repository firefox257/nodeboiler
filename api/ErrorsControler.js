
var mime = require('mime-types');
var fs=require("fs");
var {routes}=require("../Routes");

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


routes.set("/error/400", function(req,res)
{
  sendtHtmlPage(req,res,"www/errors/400.html",400);
});

routes.set("/error/404", function(req,res)
{
  sendtHtmlPage(req,res,"www/errors/404.html",404);
});


routes.set("/error/500", function(req,res)
{
  sendtHtmlPage(req,res,"www/errors/500.html",500);
});

