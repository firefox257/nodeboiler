




(function()
{
  
  class Response
  {
    response;
    head;
    constructor(res)
    {
      this.response=res;
      this.head={
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
        "Access-Control-Max-Age": 2592000, // 30 days
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
      };
        
      this.head['Content-Type'] = 'text/plain';
    }
    setHeader(v)
    {
      for(var i in v)
      {
        
        this.head[i]=v[i];
      }
    }
    getHeader()
    {
      var h={}
      for(var i in this.head)
      {
        h[i]=this.head[i];
      }
      return h;
    }
    send(code,obj)
    {
      this.response.writeHead(code, this.head);
      this.response.write(obj);
      this.response.end();
    }
    ok(obj)
    {
      this.send(200, obj);
    }
    badrequest(msg)
    {
        this.send(400,msg ? msg : "Bad Request");
    }
    unauthorized(msg)
    {
        this.send(401,msg ? msg : "Unauthorized");
    }
    forbidden(msg)
    {
        this.send(403,msg ? msg : "Forbidden");
    }
    notfound(msg)
    {
        this.send(404,msg ? msg : "Not Found");
    }
    error(msg)
    {
        this.send(500,msg ? msg : "Server Error");
    }
    
    
  };
  

$fac.set("Response", Response);

})();