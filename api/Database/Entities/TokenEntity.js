
(function()
{
  
  $fac.inject(this, `entity`);
  
  entity.Token=function()
  {
    
    return {
      _id:undefined,
      AuthUserId:undefined,
      Token: undefined,
      Stamp: new Date().getTime()
      };
    
    
  };
  
})();