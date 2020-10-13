




(function()
{
  var AuthorizationRoutes={};
  
  AuthorizationRoutes.required=function(url)
  {
    return false;
    /*
    if(url=="/index.html" 
    || url=="/login.html"
    || url=="/"
    || url.startsWith("/api/user/register")
    || url.startsWith("/api/user/login")
    || url.startsWith("/errors")
    || url=="/api/test" || url=="/api/test/"
    || url.endsWith(".mp4")
    )
    {
      return false;
    }
    
    return true;*/
  };

$fac.set("AuthorizationRoutes", AuthorizationRoutes);

})();