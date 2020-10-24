




(function()
{
  $fac.inject(this,"Response");
  
  
  class JsonResponse extends Response
  {
    constructor(res)
    {
      super(res);
      this.head['Content-Type']='application/json';
      
      
    }
    send(code,obj)
    {
      
      this.response.writeHead(code, this.head);
      this.response.write(JSON.stringify(obj));
      this.response.end();
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
  
  

$fac.set("JsonResponse", JsonResponse);

})();