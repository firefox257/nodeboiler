

var http = require('http');
var fs = require('fs');
var mime = require('mime-types');

include("Routes.js");
include("Request.js");
include("Response.js");
include("Exception.js");

include("RegisterRoutes.js");


$fac.inject(this,`
config,
routes,
Exception,
HtmlException,
AuthorizationRoutes,
responses
`);




http.createServer(function (req, res) 
{
  
  const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
    };

    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
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
      
      routes.send(req, res, url);
      
    }
    catch(ex)
    {
      console.log(ex);
      if(ex["code"]==undefined)
      {
        responses.json.error(res);
      }
      else
      {
        responses.json.send(res,ex);
      }
    }
  
    
    
  
  
  
  
}).listen(config.port);


