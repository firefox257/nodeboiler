
(function()
{
  
  $fac.inject(this, `entity`);
  
  entity.UserDetails=function()
  {
    
    
    return {
      _id:undefined,
      AuthUserId:undefined,
      FirstName: undefined,
      LastName: undefined,
      Email: undefined,
      CreateDate: new Date(),
      ModifiedDate: new Date()
      
    };
    
    
  };
  
})();