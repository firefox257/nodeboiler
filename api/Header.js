


(function()
{
  
  
  
  
  var header=function()
  {
    
    var headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
    };
    
    
    return {
      
      get head()
      {
        return headers;
      },
      set head(v)
      {
        
        for(var i in v)
        {
          headers[i]=v[i];
        }
        
      }
      
    };
    
  }
  
  
  
  $fac.set("header", header);
  
})();

