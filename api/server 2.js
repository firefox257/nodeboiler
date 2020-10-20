

var http = require('http');
var fs = require('fs');
var mime = require('mime-types');


include("RegisterFactory.js");


$fac.inject(this,`
config,
header,
routes,
ExceptionHandler,
AuthorizationRoutes,
response
`);

var head =new header().list;


http.createServer(function (req, res) 
{

  if (req.method === "OPTIONS") {
    res.writeHead(204, head);
    res.end();
    return;
  }
  
  var url = decodeURI(req.url.toString());
  
  //console.log(req.headers);
  //console.log("===================");
  //console.log(req.method+ " "+ url);
  //console.log(req);
 
  
    
    /*if(AuthorizationRoutes.required(url))
    {
      if(!req.headers["Authorization"])
      {
        responses.json.unauthorized(res);
        return;
      }
    
    }*/
    try
    {
    var path="api/Responses/test.jpg";
    var stat =fs.statSync(path);
          
          
         var h={
            'Content-Type': "image/jpg",
            'Content-Length': stat.size
          };
          
          
          res.writeHead(200, h);
          fs.createReadStream(path).pipe(res);
      
          res.end();
          console.log("here");
        }
        catch(ex)
        {
          console.log(ex);
        }
          
    
    
    
    
    
    
    
    /*
      
    routes.send(req, res, url)
    .catch(function(ex)
    {
      ExceptionHandler(res,ex);
    });
  
    
    */
  
  
  
  
}).listen(config.port);


