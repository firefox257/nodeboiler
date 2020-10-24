




(function()
{
  $fac.inject(this,"Response");
  
  
  class TextResponse extends Response
  {
    #res;
    #head;
    constructor(res)
    {
      this.super(res);
    }
    
    
  };
  
  

$fac.set("TextResponse", TextResponse);

})();