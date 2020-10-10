




(function()
{
  
  function response(code,header,content)
  {
    return{
      code:code,
      header:header,
      content:content
    };
  };
  
  function jsonmsg(code, msg)
  {
    return JSON.stringify({code:code,msg:msg});
  }
  
  $fac.set("response", response);
  
  var responses={
    
    json:{
      
      ok:function(obj)
      {
        return response(200,
        {'Content-Type': 'application/json'},
        JSON.stringify(obj)
        );
      },
      badrequest:function(msg)
      {
        return response(400,
        {'Content-Type': 'application/json'},
        jsonmsg(400,msg ? msg : "Bad Request")
        ); 
      },
     unauthorized:function(msg)
      {
        return response(401,
        {'Content-Type': 'application/json'},
        jsonmsg(401,msg?msg:"Unauthorized")
        );
      },
      forbidden:function(msg)
      {
        return response(403,
        {'Content-Type': 'application/json'},
        jsonmsg(403,msg?msg:"Forbidden")
        );
      },
      notfound:function(msg)
      {
        return response(404,
        {'Content-Type': 'application/json'},
        jsonmsg(404,msg?msg:"Not Found")
        );
      },
      notfound:function(msg)
      {
        return response(500,
        {'Content-Type': 'application/json'},
        
        jsonmsg(500,msg?msg:"Server Error")
        );
      }
      
      
    }
    
  };

$fac.set("responses", responses);

})();