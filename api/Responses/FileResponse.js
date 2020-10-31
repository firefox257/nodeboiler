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
    
    send(code, path, alternatemsg, range)
    {
      
      if(path)
      {
        
        try
        {
          
          var stat =fs.statSync(path);
            
          this.head['Content-Type']= mime.lookup(path);
          this.head['Content-Length']=stat.size;
          
          if(!range)
          {
            
            
            var stat =fs.statSync(path);
            
            this.response.writeHead(code, this.head);
            fs.createReadStream(path).pipe(this.response);
          }
          else
          {
            
            
            
            
            var file = fs.createReadStream(path, {start: range.start, end: range.end});
            
            this.head['Content-Range']=`bytes ${range.start}-${range.end}/${stat.size}`;
            this.head['Accept-Ranges']= 'bytes';
            this.head['Content-Length']=range.size;
            
            this.response.writeHead(206, this.head);
            file.pipe(this.response);
          }
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
    
    ok(path, range)
    {
      this.send(200, path, "Ok", range);
    }
    badrequest(path, range)
    {
        this.send(400,path, "Bad Request", range);
    }
    unauthorized(path, range)
    {
        this.send(401, path, "Unauthorized", range);
    }
    forbidden(path, range)
    {
        this.send(403, path, "Forbidden", range);
    }
    notfound(path, range)
    {
        this.send(404, path, "Not Found", range);
    }
    error(path, range)
    {
        this.send(500, path, "Error", range);
    }
    
    
    
  };
  
  $fac.set("FileResponse", FileResponse);

})();