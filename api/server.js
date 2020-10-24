

var http = require('http');
var fs = require('fs');
var mime = require('mime-types');


include("RegisterFactory.js");
include("RegisterRoutes.js");


$fac.inject(this,`
config,
header,
routes,
ExceptionHandler,
AuthorizationRoutes,
response
`);

var head = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
        "Access-Control-Max-Age": 2592000, // 30 days
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
      };


http.createServer(function (req, res) 
{
  
  if (req.method === "OPTIONS") {
    res.writeHead(204, head);
    res.end();
    return;
  }
  
  
  var url =   decodeURI(req.url.toString());
    
    
    //console.log(url);
    /*
    var path="api/Responses/test.jpg";
    var stat =fs.statSync(path);
    var head = {
             'Content-Length': stat.size,
             'Content-Type': mime.lookup(path)
          };
          res.writeHead(200, head);
          fs.createReadStream(path).pipe(res);
          
          
    return;
    */
    
    
    routes.send(req, res, url)
    .catch(function(ex)
    {
      ExceptionHandler(res,ex);
    });
    
    
    
}).listen(config.port);
