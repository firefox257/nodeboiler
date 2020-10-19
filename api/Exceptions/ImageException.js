

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
    this.code=400;
    this.message= message? message: "Bad Request";
    this.error=error;
  }
};

class ImageUnauthorizedException extends ImageException
{
  constructor(message, error)
  {
    this.code=401;
    this.message= message? message: "Unauthorized";
    this.error=error;
  }
};

class ImageForbiddenException extends ImageException
{
  constructor(message, error)
  {
    this.code=403;
    this.message= message? message: "Forbidden";
    this.error=error;
  }
};

class ImageNotFoundException extends ImageException
{
  constructor(message, error)
  {
    this.code=404;
    this.message= message? message: "Not Found";
    this.error=error;
  }
};

class ImageErrorException extends ImageException
{
  constructor(message, error)
  {
    this.code=500;
    this.message= message? message: "Error";
    this.error=error;
  }
};

class ImageNotImplementedException extends ImageException
{
  constructor(message, error)
  {
    this.code=501;
    this.message= message? message: "Not Implemented";
    this.error=error;
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

