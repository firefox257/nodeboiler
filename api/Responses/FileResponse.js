var fs=require("fs");
var mime =require("mime-types");



(function()
{
  $fac.inject(this,"Response");
  $fac.inject(this,"NotFoundException");
  class FileResponse extends Response
  {
    constructor(res)
    {
      super(res);
      this.head['Content-Type'] = 'application/json';
    }
    
    send(code, path, alternatemsg)
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
      
      
      
      this.head["Content-type"]= mime.lookup(".txt");
      
      this.response.writeHead(code, this.head);
      this.response.write(alternatemsg);
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
  
  $fac.set("FileResponse", FileResponse);

})();