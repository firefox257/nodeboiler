

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

var head =header().head;


http.createServer(function (req, res) 
{
  
  /*const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Max-Age": 2592000, // 30 days
     
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
    };*/

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
      
      routes.send(req, res, url);
      
    }
    catch(ex)
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
    }
  
    
    
  
  
  
  
}).listen(config.port);


