




(function()
{
  
  class Range
  {
    start;
    end;
    size;
    chunkData;
  };
  
  class Request
  {
    request;
    constructor(req)
    {
      this.request=req;
    }
    async body()
    {
      var self=this;
      
      var retval= new Promise(function(done, err)
      {
        var body = '';
        self.request.on('data', function (data) 
        {
          body += data;
          if (body.length > 1e8) 
          { 
            this.request.connection.destroy();
          }
        });
         self.request.on('end', function () 
         {
           done(body);
         });
           
            
      });//end promise
            
      return retval;
    }
    
    getRange()
    {
      var range= req.headers.range;
      if(!range) return undefined;
      var parts = range.replace(/bytes=/, "").split("-")
      var start = parseInt(parts[0], 10);
      var end = parts[1] ? parseInt(parts[1], 10): fileSize-1;
      var chunksize = (end-start)+1;
      
      
      var range = new Range();
      range.start=start;
      
      range.end=end;
      range.size=chunksize;
      
      return range;
    }
    
    
    
  };

$fac.set("Request", Request);

})();