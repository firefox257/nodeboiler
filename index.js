

var http = require('http');
var fs = require('fs');
var mime = require('mime-types');




require("./api/RegisterFactory");
require("./api/RegisterRoutes");
var $fac=require("./shared/Factory");


$fac.inject(global,`
config,
routes,
Exception,
HtmlException

`);



http.createServer(function (req, res) 
{
  
  var url = decodeURI(req.url.toString());
  //console.log("url:"+url);
 
  if(url.startsWith("/api"))
  {
    try
    {
      routes.send(req, res, url);
    }
    catch(ex)
    {
      console.log(ex);
      if(!ex.code)
      {
        routes.send(req,res,"/error/500");
      }
      else
      {
        routes.send(req,res,`/error/${ex.code}`);
      }
    }
  }
  else
  {
    if(url.endsWith("/"))url+="index.html";
    url="www"+url;
    
    fs.stat(url, function(err, stat)
    {
      if(err)
      {
        routes.send(req,res,"/error/404");
      }
      else
      {
      
        var range = req.headers.range;
        var fileSize = stat.size;
        var mtype=mime.lookup(url);
        
        if (range) 
        {
          var parts = range.replace(/bytes=/, "").split("-")
          var start = parseInt(parts[0], 10);
          var end = parts[1] ? parseInt(parts[1], 10): fileSize-1;
          var chunksize = (end-start)+1;
          var file = fs.createReadStream(url, {start, end})
          var head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': mtype
          };
          res.writeHead(206, head);
          file.pipe(res);
        }
        else 
        {
          var head = {
             'Content-Length': fileSize,
             'Content-Type': mtype
          };
          res.writeHead(200, head);
          fs.createReadStream(url).pipe(res);
        }
        
      
        
      }
    });
    
    
  }
  
  
  
}).listen(config.port);


