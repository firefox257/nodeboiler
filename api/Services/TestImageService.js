




(function()
{
  $fac.inject(this, `
  TypeReadable,
  NotFoundException
  
  `);
  var fs=require("fs");
  
  
  var TestImageService={
    
    get: async function(name)
    {
      
      
      var path="api/Resources/"+name;
      var stat;
      try
      {
      stat=fs.statSync(path);
      }
      catch(ex)
      {
        
        throw new NotFoundException("Image not found.",ex);
      }
      
        var vs=new TypeReadable(name,fs.createReadStream("api/Resources/"+name), stat.size);
      
      return vs;
    }
    
  };
  
  $fac.set("TestImageService", TestImageService);
})();



