

function Exception(msg, code)
{
  
  return{
    msg:msg,
    code:code
    
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




module.exports={Exception, HtmlException}

