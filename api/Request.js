




(function()
{
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


$fac.set("request", request);

})();