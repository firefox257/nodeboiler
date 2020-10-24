




(function()
{
  
  $fac.inject(this, "Request");
  
  class JsonRequest extends Request
  {
    async body()
    {
      return JSON.parse(await super.body());
      
    }
    
    istype()
    {
      //console.log(this.#req.headers);
      
      if(!this.request.headers['content-type'].startsWith('application/json'))
        {
          return false;
        }
          return true;
    }
    
    
  };

$fac.set("JsonRequest", JsonRequest);

})();