

(function()
{
  $fac.inject(this, "Exception");
  

class HtmlException extends Exception
{
  
};

class HtmlBadRequestException extends HtmlException
{
  constructor(message, error)
  {
    super(400, message? message: "Bad Request", error);
    
  }
};

class HtmlUnauthorizedException extends HtmlException
{
  constructor(message, error)
  {
    super(401, message? message: "Unauthorized", error);
    
  }
};

class HtmlForbiddenException extends HtmlException
{
  constructor(message, error)
  {
    super(403, message? message: "Forbidden", error);
    
  }
};

class HtmlNotFoundException extends HtmlException
{
  constructor(message, error)
  {
    super(404, message? message: "Not Found", error);
    
  }
};

class HtmlErrorException extends HtmlException
{
  constructor(message, error)
  {
    super(500, msg? msg: "Error", error);
    
  }
};

class HtmlNotImplementedException extends HtmlException
{
  constructor(message, error)
  {
    super(501, msg? msg: "Not Implemented", error);
    
  }
};


$fac.set("HtmlException", HtmlException);
$fac.set("HtmlBadRequestException", HtmlBadRequestException);
$fac.set("HtmlUnauthorizedException", HtmlUnauthorizedException);
$fac.set("HtmlForbiddenException", HtmlForbiddenException);
$fac.set("HtmlNotFoundException", HtmlNotFoundException);
$fac.set("HtmlErrorException", HtmlErrorException);
$fac.set("HtmlNotImplementedException", HtmlNotImplementedException);


})();

