

(function()
{
  
  class Exception extends Error
  {
    error;
    constructor(code, message, error)
    {
      super(message);
      this.code=code;
      this.error=error;
    }
  };
  
  class BadRequestException extends Exception
{
  constructor(message, error)
  {
    super(400, message? message: "Bad Request", error);
    
  }
};

class UnauthorizedException extends Exception
{
  constructor(msg, error)
  {
    super(401, message? message: "Unauthorized", error);
    
    
  }
};

class ForbiddenException extends Exception
{
  constructor(message, error)
  {
    
    super(403, message? message: "Forbidden", error);
    
    
  }
};

class NotFoundException extends Exception
{
  constructor(message, error)
  {
    
    super(404, message? message: "Not Found", error);
    
  }
};

class ErrorException extends Exception
{
  constructor(message, error)
  {
    super(500, message? message: "Error", error);
    
  }
};

class NotImplementedException extends Exception
{
  constructor(message, error)
  {
    super(501, message? message: "Not Implemented", error);
    
  }
};



$fac.set("Exception", Exception);
$fac.set("BadRequestException", BadRequestException);
$fac.set("UnauthorizedException", UnauthorizedException);
$fac.set("ForbiddenException", ForbiddenException);
$fac.set("NotFoundException", NotFoundException);
$fac.set("ErrorException", ErrorException);
$fac.set("NotImplementedException", NotImplementedException);


})();

