

var http = require('http');
var fs = require('fs');
var mime = require('mime-types');


include("RegisterFactory.js");


$fac.inject(this,`
config,
header,
routes,
Exception,
HtmlException,
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
    
    
    
    
    
      
    routes.send(req, res, url)
    .catch(function(ex)
    {
      
      console.log(ex);
      if(ex["code"]==undefined)
      {
        response(res).json.error();
      }
      else
      {
        response(res).json.send(ex);
      }
    });
  
    
    
  
  
  
  
}).listen(config.port);


