




(function()
{
  var AuthorizationRoutes={};
  
  AuthorizationRoutes.required=function(url)
  {
    
    if(url=="/index.html" 
    || url=="/login.html"
    || url=="/"
    || url.startsWith("/api/user/register")
    || url.startsWith("/api/user/login")
    || url.startsWith("/errors")
    || url=="/api/test" || url=="/api/test/"
    )
    {
      return false;
    }
    
    return true;
  }

$fac.set("AuthorizationRoutes", AuthorizationRoutes);

})();