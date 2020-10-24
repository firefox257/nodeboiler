




(function()
{
  $fac.inject(this,"Response");
  
  
  class HtmlResponse extends Response
  {
    constructor(res)
    {
      super(res);
      this.head['Content-Type'] = 'text/html';
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
  
  

$fac.set("HtmlResponse", HtmlResponse);

})();