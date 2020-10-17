

(function()
{
  
  var cors={
    
    all:{
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Max-Age": 2592000, // 30 days
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
      
    },
    
    
    web:{
      "Access-Control-Allow-Origin": "http://localhost:3001",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Max-Age": 2592000, // 30 days
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
      
    }
    
  };
  
  
  $fac.set("cors", cors);
  
})();
