




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
  
  

$fac.set("JsonResponse", JsonResponse);

})();