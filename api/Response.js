




(function()
{
  $fac.inject(this,"header");
  
  
  class JsonResponse
  {
    #res;
    #head;
    constructor(res)
    {
      this.#res=res;
      this.#head=new header();
      this.#head.list={'Content-Type': 'application/json'};
    }
    setHeader(v)
    {
      this.#head.list=v;
    }
    send(code,obj)
    {
      this.#res.writeHead(code, this.#head.list);
      this.#res.write(JSON.stringify(obj));
      this.#res.end();
    }
    ok(obj)
    {
      this.send(200, obj);
    }
    badrequest(msg)
    {
        this.send(400,{code:400,msg:msg ? msg : "Bad Request"});
    }
    unauthorized(msg)
    {
        this.send(401,{code:401,msg:msg ? msg : "Unauthorized"});
    }
    forbidden(msg)
    {
        this.send(403,{code:403,msg:msg ? msg : "Forbidden"});
    }
    notfound(msg)
    {
        this.send(404,{code:404,msg:msg ? msg : "Not Found"});
    }
    error(msg)
    {
        this.send(500,{code:500,msg:msg ? msg : "Server Error"});
    }
    
  };
  
  
  /*
  
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
  //*/

$fac.set("JsonResponse", JsonResponse);

})();