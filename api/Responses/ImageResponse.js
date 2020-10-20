
var fs =require("fs");
var mime = require('mime-types');



(function()
{
  $fac.inject(this,`
  header,
  FileResponse
  
  `);
  
  
  class ImageResponse
  {
    #res;
    #head;
    constructor(res)
    {
      this.#res=res;
      this.#head=new header();
      
    }
    setHeader(v)
    {
      this.#head.list=v;
    }
    send(code,path, altmessage)
    {
      
      if(path)
      {
        
        try
        {
          
          var stat =fs.statSync(path);
          
          
          this.#head.list={
            'Content-Type': mime.lookup(path),
            'Content-Length': stat.size};
          this.#res.writeHead(200, this.#head.list);
          fs.createReadStream(path).pipe(this.#res);
      
          return;
        }
        catch(ex)
        {
          //do nothing let fall through
        }
        
      }
      
      
      
      this.#head.list={"Content-type": mime.lookup(".svg")};
      
      this.#res.writeHead(code, this.#head.list);
      this.#res.write(`<svg 
   xmlns="http://www.w3.org/2000/svg"   
   width="400"
   height="40"
   >
   <style>
    .heavy { font: bold 30px sans-serif; }
  </style>
  <text x="0" y="30" class="heavy">${altmessage?altmessage:"Something went wrong"}</text>
</svg>
      `);
      this.#res.end();
      
    }
    ok(path)
    {
      this.send(200, path, "Ok");
    }
    badrequest(path)
    {
        this.send(400,path, "Bad Request");
    }
    unauthorized(path)
    {
        this.send(401, path, "Unauthorized");
    }
    forbidden(path)
    {
        this.send(403, path, "Forbidden");
    }
    notfound(path)
    {
        this.send(404, path, "Not Found");
    }
    error(path)
    {
        this.send(500, path, "Error");
    }
    
  };
  
  

$fac.set("ImageResponse", ImageResponse);

})();