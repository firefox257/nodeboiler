




(function()
{
  /*
  var request= function(req)
  {
    
    return {
      req:req,
      
        
        toJson:async function(callback)
        {
            
            var retval= new Promise(function(done, err)
            {
            
              var body = '';
              req.on('data', function (data) 
              {
                body += data;
                if (body.length > 1e8) 
                { 
                  request.connection.destroy();
                }
              });
              req.on('end', function () 
              {
                //callback(JSON.parse(body));
              
                done(JSON.parse(body));
              
              });
           
            
            });//end promise
            
            return retval;
        }
        
        
        
        
      
      
    };
  };
*/

  class JsonRequest
  {
    #req;
    constructor(req)
    {
      this.#req=req;
    }
    async body()
    {
      var self=this;
      
      var retval= new Promise(function(done, err)
      {
        var body = '';
        self.#req.on('data', function (data) 
        {
          body += data;
          if (body.length > 1e8) 
          { 
            this.#req.connection.destroy();
          }
        });
         self.#req.on('end', function () 
         {
           done(JSON.parse(body));
         });
           
            
      });//end promise
            
      return retval;
    }
    
    istype()
    {
      //console.log(this.#req.headers);
      
      if(!this.#req.headers['content-type'].startsWith('application/json'))
        {
          return false;
        }
          return true;
    }
    
    
  };

$fac.set("JsonRequest", JsonRequest);

})();