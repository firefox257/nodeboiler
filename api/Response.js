




(function()
{
  
  function response(res,code,header,content)
  {
    res.writeHead(code, header);
    res.write(content);
    res.end();
  };
  
  function jsonmsg(code, msg)
  {
    return JSON.stringify({code:code,msg:msg});
  }
  
  $fac.set("response", response);
  
  var responses={
    
    json:{
      
      ok:function(res, obj)
      {
        return response(res, 200,
        {'Content-Type': 'application/json'},
        JSON.stringify(obj)
        );
      },
      badrequest:function(res,msg)
      {
        return response(res, 400,
        {'Content-Type': 'application/json'},
        jsonmsg(400,msg ? msg : "Bad Request")
        ); 
      },
     unauthorized:function(res, msg)
      {
        return response(res, 401,
        {'Content-Type': 'application/json'},
        jsonmsg(401,msg?msg:"Unauthorized")
        );
      },
      forbidden:function(res, msg)
      {
        return response(res, 403,
        {'Content-Type': 'application/json'},
        jsonmsg(403,msg?msg:"Forbidden")
        );
      },
      notfound:function(res, msg)
      {
        return response(res, 404,
        {'Content-Type': 'application/json'},
        jsonmsg(404,msg?msg:"Not Found")
        );
      },
      notfound:function(res, msg)
      {
        return response(res, 500,
        {'Content-Type': 'application/json'},
        
        jsonmsg(500,msg?msg:"Server Error")
        );
      }
      
      
    },
    txt:{
      
      ok:function(res, obj)
      {
        return response(res, 200,
        {'Content-Type': 'text/plain'},
        obj
        );
      },
      badrequest:function(res,msg)
      {
        return response(res, 400,
        {'Content-Type': 'text/plain'},
        msg ? msg : "Bad Request"
        ); 
      },
     unauthorized:function(res, msg)
      {
        return response(res, 401,
        {'Content-Type': 'text/plain'},
        msg?msg:"Unauthorized"
        );
      },
      forbidden:function(res, msg)
      {
        return response(res, 403,
        {'Content-Type': 'text/plain'},
        msg?msg:"Forbidden"
        );
      },
      notfound:function(res, msg)
      {
        return response(res, 404,
        {'Content-Type': 'text/plain'},
        msg?msg:"Not Found"
        );
      },
      notfound:function(res, msg)
      {
        return response(res, 500,
        {'Content-Type': 'text/plain'},
        msg?msg:"Server Error"
        );
      }
      
      
    },
    
    
    
    
    
    
    
  };

$fac.set("responses", responses);

})();