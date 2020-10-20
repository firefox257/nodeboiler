

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
    super(400,message? message: "Bad Request", error);
    
  }
};

class TextUnauthorizedException extends TextException
{
  constructor(message, error)
  {
    super(401, message? message: "Unauthorized", error);
    
  }
};

class TextForbiddenException extends TextException
{
  constructor(mesage, error)
  {
    super(403, message? message: "Forbidden", error);
    
  }
};

class TextNotFoundException extends TextException
{
  constructor(message, error)
  {
    super(404, message? message: "Not Found", error);
    
  }
};

class TextErrorException extends TextException
{
  constructor(message, error)
  {
    super(500, message? message: "Error", error);
    
  }
};

class TextNotImplementedException extends TextException
{
  constructor(message, error)
  {
    super(501, message? message: "Not Implemented", error);
    
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

