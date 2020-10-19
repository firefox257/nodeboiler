

(function()
{
  $fac.inject(this, "Exception");
  

class HtmlException extends Exception
{
  
};

class HtmlBadRequestException extends HtmlException
{
  constructor(msg)
  {
    this.code=400;
    this.msg= msg? msg: "Bad Request";
  }
};

class HtmlUnauthorizedException extends HtmlException
{
  constructor(msg)
  {
    this.code=401;
    this.msg= msg? msg: "Unauthorized";
  }
};

class HtmlForbiddenException extends HtmlException
{
  constructor(msg)
  {
    this.code=403;
    this.msg= msg? msg: "Forbidden";
  }
};

class HtmlNotFoundException extends HtmlException
{
  constructor(msg)
  {
    this.code=404;
    this.msg= msg? msg: "Not Found";
  }
};

class HtmlErrorException extends HtmlException
{
  constructor(msg)
  {
    this.code=500;
    this.msg= msg? msg: "Error";
  }
};

class HtmlNotImplementedException extends HtmlException
{
  constructor(msg)
  {
    this.code=501;
    this.msg= msg? msg: "Not Implemented";
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

