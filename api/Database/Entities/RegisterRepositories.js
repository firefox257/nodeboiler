



(function()
{
  
  $fac.inject(this, `entity`);
  
  entity.AuthUser=function()
  {
    
    
    return {
      _id:undefined,
      UserName: undefined,
      Password: undefined,
      CreateDate: new Date(),
      ModifiedDate: new Date(),
      DisabledDate:undefined,
      DeletedDate:undefined
      
    };
    
    
  };
  
})();