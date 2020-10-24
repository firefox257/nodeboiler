


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
  getHeader()
  {
    return this.#list;
  }
  setHeader(v)
  {
    
    for(var i in v)
    {
      this.#list[i]=v[i];
    }
        
  }
};

$fac.set("header", header);

