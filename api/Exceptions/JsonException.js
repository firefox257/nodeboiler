

(function()
{
  $fac.inject(this, "Exception");
  

class JsonException extends Exception
{
  
};

class JsonBadRequestException extends JsonException
{
  constructor(message, error)
  {
    super(400, message? message: "Bad Request", error);
  }
};

class JsonUnauthorizedException extends JsonException
{
  constructor(message, error)
  {
    super(402, message? message: "Unauthorized", error);
  }
};

class JsonForbiddenException extends JsonException
{
  constructor(message, error)
  {
    super(403, message? message: "Forbidden", error);
    
  }
};

class JsonNotFoundException extends JsonException
{
  constructor(message, error)
  {
    super(404,message? message: "Not Found",error);
    
  }
};

class JsonErrorException extends JsonException
{
  constructor(message, error)
  {
    super(500, message= message? message: "Error", error)
    
  }
};

class JsonNotImplementedException extends JsonException
{
  constructor(message, error)
  {
    super(501, message? message: "Not Implemented", error);
    
  }
};


$fac.set("JsonException", JsonException);
$fac.set("JsonBadRequestException", JsonBadRequestException);
$fac.set("JsonUnauthorizedException", JsonUnauthorizedException);
$fac.set("JsonForbiddenException", JsonForbiddenException);
$fac.set("JsonNotFoundException", JsonNotFoundException);
$fac.set("JsonErrorException", JsonErrorException);
$fac.set("JsonNotImplementedException", JsonNotImplementedException);




})();

