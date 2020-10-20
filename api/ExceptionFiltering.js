

(function()
{
  
    $fac.inject(this,`
    JsonResponse,
    TextResponse,
    HtmlResponse,
    ImageResponse,
    
    JsonException,
    TextException,
    HtmlException,
    ImageException
    `);
    
  function ExceptionHandler(res, ex)
  {
    
    if(ex instanceof JsonException)
    {
      new JsonResponse(res).send(ex.code, {code:ex.code,msg:ex.message});
    }
    else if(ex instanceof TextException)
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



