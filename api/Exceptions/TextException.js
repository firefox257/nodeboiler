

(function()
{
    $fac.inject(this, "Exception");
  

class TextException extends Exception
{
  
};

class TextBadRequestException extends TextException
{
  constructor(message, error)
  {
    this.code=400;
    this.message= message? message: "Bad Request";
    this.error=error;
  }
};

class TextUnauthorizedException extends TextException
{
  constructor(message, error)
  {
    this.code=401;
    this.message= message? message: "Unauthorized";
    this.error=error;
  }
};

class TextForbiddenException extends TextException
{
  constructor(mesage, error)
  {
    this.code=403;
    this.message= message? message: "Forbidden";
    this.error=error;
  }
};

class TextNotFoundException extends TextException
{
  constructor(message, error)
  {
    this.code=404;
    this.message= message? message: "Not Found";
    this.error=error;
  }
};

class TextErrorException extends TextException
{
  constructor(message, error)
  {
    this.code=500;
    this.message= message? message: "Error";
    this.error=error;
  }
};

class TextNotImplementedException extends TextException
{
  constructor(message, error)
  {
    this.code=501;
    this.message= message? message: "Not Implemented";
    this.error=error;
  }
};


$fac.set("TextException", TextException);
$fac.set("TextBadRequestException", TextBadRequestException);
$fac.set("TextUnauthorizedException", TextUnauthorizedException);
$fac.set("TextForbiddenException", TextForbiddenException);
$fac.set("TextNotFoundException", TextNotFoundException);
$fac.set("TextErrorException", TextErrorException);
$fac.set("TextNotImplementedException", TextNotImplementedException);




})();

