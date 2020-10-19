

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
    this.code=400;
    this.messgae= message? message: "Bad Request";
    this.error=error;
  }
};

class UnauthorizedException extends Exception
{
  constructor(msg, error)
  {
    this.code=401;
    this.message= message? message: "Unauthorized";
    this.error=error;
  }
};

class ForbiddenException extends Exception
{
  constructor(message, error)
  {
    this.code=403;
    this.message= message? message: "Forbidden";
    this.error=error;
    th
  }
};

class NotFoundException extends Exception
{
  constructor(message, error)
  {
    this.code=404;
    this.message= message? message: "Not Found";
    this.error=error;
  }
};

class ErrorException extends Exception
{
  constructor(message, error)
  {
    this.code=500;
    this.message= message? message: "Error";
    this.error=error;
  }
};

class NotImplementedException extends Exception
{
  constructor(message, error)
  {
    this.code=501;
    this.message= message? message: "Not Implemented";
    this.error=error;
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

