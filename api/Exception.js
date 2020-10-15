

(function()
{

function Exception(msg, code)
{
  
  return{
    code:code,
    msg:msg
  };
  
}

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




$fac.set("Exception", Exception);
$fac.set("HtmlException", HtmlException);

})();
