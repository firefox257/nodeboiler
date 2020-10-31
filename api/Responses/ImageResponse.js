
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
    type;
    constructor(res)
    {
      super(res);
      this.type=".svg";
    }
    send(code,stream, altmessage)
    {
      /*
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
      
      */
      
      
      if(stream)
      {
        this.head["Content-type"]= mime.lookup(stream.type);
        
        this.head["Content-Length"]= stream.size;
      
        this.response.writeHead(code, this.head);
        
        stream.stream.pipe(this.response);
        return;
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
    ok(stream)
    {
      this.send(200, stream, "Ok");
    }
    badrequest(stream)
    {
        this.send(400,stream, "Bad Request");
    }
    unauthorized(stream)
    {
        this.send(401, stream, "Unauthorized");
    }
    forbidden(stream)
    {
        this.send(403, stream, "Forbidden");
    }
    notfound(stream)
    {
        this.send(404, stream, "Not Found");
    }
    error(stream)
    {
        this.send(500, stream, "Error");
    }
    
  };
  
  

$fac.set("ImageResponse", ImageResponse);

})();