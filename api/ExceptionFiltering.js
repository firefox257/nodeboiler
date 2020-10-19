

(function()
{
  
    $fac.inject(this,`
    JsonResponse,
    JsonException,
    JsonNotFoundException`);
    
  function ExceptionHandler(res, ex)
  {
    
    if(ex instanceof JsonException)
    {
      new JsonResponse(res).send(ex.code, {code:ex.code,msg:ex.message});
    }
    else
    {
      console.log(ex);
    }
    
  }
  
  $fac.set("ExceptionHandler", ExceptionHandler);
  
  
})();



