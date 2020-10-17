


class header
{
  
  #list;
  constructor()
  {
    
    this.#list= {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Max-Age": 2592000, // 30 days
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
    };
    
    
  }
  get list()
  {
    return this.#list;
  }
  set list(v)
  {
    
    for(var i in v)
    {
      this.#list[i]=v[i];
    }
        
  }
};


/*

(function()
{
  
  
  
  
  var header=function()
  {
    
    var headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Max-Age": 2592000, // 30 days
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

*/