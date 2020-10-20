

(function()
{
  $fac.inject(this,"Exception");
  

class ImageException extends Exception
{
  
};

class ImageBadRequestException extends ImageException
{
  constructor(message, error)
  {
    super(400, message? message: "Bad Request", error);
    
  }
};

class ImageUnauthorizedException extends ImageException
{
  constructor(message, error)
  {
    super(401, message? message: "Unauthorized", error);
    
    
  }
};

class ImageForbiddenException extends ImageException
{
  constructor(message, error)
  {
    super(403, message? message: "Forbidden", error);
    
  }
};

class ImageNotFoundException extends ImageException
{
  constructor(message, error)
  {
    super(404, message? message: "Not Found", error);
    
  }
};

class ImageErrorException extends ImageException
{
  constructor(message, error)
  {
    super(500, message? message: "Error");
    
  }
};

class ImageNotImplementedException extends ImageException
{
  constructor(message, error)
  {
    super(501, message? message: "Not Implemented", error);
    
  }
};


$fac.set("ImageException", ImageException);
$fac.set("ImageBadRequestException", ImageBadRequestException);
$fac.set("ImageUnauthorizedException", ImageUnauthorizedException);
$fac.set("ImageForbiddenException", ImageForbiddenException);
$fac.set("ImageNotFoundException", ImageNotFoundException);
$fac.set("ImageErrorException", ImageErrorException);
$fac.set("ImageNotImplementedException", ImageNotImplementedException);




})();

