




(function()
{
  $fac.inject(this,"header");
  
  
  class TextResponse
  {
    #res;
    #head;
    constructor(res)
    {
      this.#res=res;
      this.#head=new header();
      this.#head.list={'Content-Type': 'text/plain'};
    }
    setHeader(v)
    {
      this.#head.list=v;
    }
    send(code,obj)
    {
      this.#res.writeHead(code, this.#head.list);
      this.#res.write(obj);
      this.#res.end();
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
  
  

$fac.set("TextResponse", TextResponse);

})();