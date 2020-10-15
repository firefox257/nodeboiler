




(function()
{
  
  function makeResponse(res,code,header,content)
  {
    
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
    };
    for(var i in headers)
    {
      
      header[i]=headers[i];
    }

    
    
    
    
    res.writeHead(code, header);
    res.write(content);
    //res.end();
  };
  
  function jsonmsg(code, msg)
  {
    return JSON.stringify({code:code,msg:msg});
  }
  

  
  
  
  
  var response= function(res)
  {
    
    
  return {
    res:res,
    json:{
      send:function(ex)
      {
        makeResponse(res,ex.code,
        {'Content-Type': 'application/json'},
        JSON.stringify(ex)
        );
      },
      ok:function(obj)
      {
        makeResponse(res, 200,
        {'Content-Type': 'application/json'},
        JSON.stringify(obj)
        );
      },
        badrequest:function(msg)
      {
        makeResponse(res, 400,
        {'Content-Type': 'application/json'},
        jsonmsg(400,msg ? msg : "Bad Request")
        ); 
      },
     unauthorized:function(msg)
      {
        makeResponse(res, 401,
        {'Content-Type': 'application/json'},
        jsonmsg(401,msg?msg:"Unauthorized")
        );
      },
      forbidden:function(msg)
      {
        makeResponse(res, 403,
        {'Content-Type': 'application/json'},
        jsonmsg(403,msg?msg:"Forbidden")
        );
      },
      notfound:function(msg)
      {
        makeResponse(res, 404,
        {'Content-Type': 'application/json'},
        jsonmsg(404,msg?msg:"Not Found")
        );
      },
      error:function(msg)
      {
        makeResponse(res, 500,
        {'Content-Type': 'application/json'},
        
        jsonmsg(500,msg?msg:"Server Error")
        );
      }
      
      
    },
    txt:{
      
      ok:function(obj)
      {
        makeResponse(res, 200,
        {'Content-Type': 'text/plain'},
        obj
        );
      },
      badrequest:function(msg)
      {
        makeResponse(res, 400,
        {'Content-Type': 'text/plain'},
        msg ? msg : "Bad Request"
        ); 
      },
     unauthorized:function(msg)
      {
        makeResponse(res, 401,
        {'Content-Type': 'text/plain'},
        msg?msg:"Unauthorized"
        );
      },
      forbidden:function(msg)
      {
        makeResponse(res, 403,
        {'Content-Type': 'text/plain'},
        msg?msg:"Forbidden"
        );
      },
      notfound:function(msg)
      {
        makeResponse(res, 404,
        {'Content-Type': 'text/plain'},
        msg?msg:"Not Found"
        );
      },
      error:function(msg)
      {
        makeResponse(res, 500,
        {'Content-Type': 'text/plain'},
        msg?msg:"Server Error"
        );
      }
      
      
    },
    
  };
  
  
  }

$fac.set("response", response);

})();