

(function()
{

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
  class NotImplementedException extends Exception
  {
    constructor(msg)
  };
  */
  
  class Exception extends Error
  {
    constructor(code, message)
    {
      super(message);
      this.code=code;
    }
  };
  
  $fac.set("Exception", Exception);


})();

