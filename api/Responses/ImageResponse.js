
var fs =require("fs");
var mime = require('mime-types');



(function()
{
  $fac.inject(this,`
  header,
  FileResponse,
  Response
  
  `);
  
  
  class ImageResponse extends Response
  {
    constructor(res)
    {
      super(res);
      
    }
    send(code,path, altmessage)
    {
      
      if(path)
      {
        
        try
        {
          
          var stat =fs.statSync(path);
          
          this.head['Content-Type']= mime.lookup(path);
          this.head['Content-Length']=stat.size;
            
            
            this.response.writeHead(code, this.head);
          fs.createReadStream(path).pipe(this.response);
      
          return;
        }
        catch(ex)
        {
          //do nothing let fall through
        }
        
      }
      
      
      
      this.head["Content-type"]= mime.lookup(".svg");
      
      this.response.writeHead(code, this.head);
      this.response.write(`<svg 
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
      this.response.end();
      
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