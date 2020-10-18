

(function()
{
  $fac.inject("Exception");
  
/*
function Exception(msg, code)
{
  
  return{
    code:code,
    msg:msg
  };
  
}
*/

/*
var HtmlException={
  
  badrequest: function(msg)
  {
    return Exception(msg, 400);
  },
  unathorized: function(msg)
  {
    return Exception(msg,401);
  },
  forbidden: function(msg)
  {
    return Exception(msg,403);
  },
  notfound: function(msg)
  {
    return Exception(msg,404);
  },
  error: function(msg)
  {
    return Exception(msg,500);
  },
  notimplemented: function(msg)
  {
    return Exception(msg,501);
  }
};

*/
class HtmlBadRequestException extends Exception
{
  constructor(msg)
  {
    this.code=400;
    this.msg= msg? msg: "Bad Request";
  }
};

class HtmlUnauthorizedException extends Exception
{
  constructor(msg)
  {
    this.code=401;
    this.msg= msg? msg: "Unauthorized";
  }
};

class HtmlForbiddenException extends Exception
{
  constructor(msg)
  {
    this.code=403;
    this.msg= msg? msg: "Forbidden";
  }
};

class HtmlNotFoundException extends Exception
{
  constructor(msg)
  {
    this.code=404;
    this.msg= msg? msg: "Not Found";
  }
};

class HtmlErrorException extends Exception
{
  constructor(msg)
  {
    this.code=500;
    this.msg= msg? msg: "Error";
  }
};

//$fac.set("Exception", Exception);
$fac.set("HtmlException", HtmlException);

})();

