




(function()
{
  $fac.inject(this, `
  TypeReadable,
  NotFoundException
  
  `);
  var fs=require("fs");
  
  
  var TestVideoService={
    
    get: async function(name)
    {
      var path="api/Resources/"+name;
      try
      {
        var stat=fs.statSync(path);
      }
      catch(ex)
      {
        throw new ImageNotFoundException("Image not found.",ex);
      }
      
      var vs=new TypeReadable(name,fs.createReadStream("api/Resources/"+name));
      
      return vs;
      
      
      
    },
    getRange: async function(name, range)
    {
      var path="api/Resources/"+name;
      var stat;
      try
      {
        stat=fs.statSync(path);
      }
      catch(ex)
      {
        throw new NotFoundException("Video not found.",ex);
      }
      
      
      
      //var file = fs.createReadStream(path, {start: range.start, end: range.end});
      
      
      var vs=new TypeReadable(name,fs.createReadStream(path,{start: stream.range.start, end: stream.range.end}), stat.size);
      
      return vs;
      
      
      
    },
    
  };
  
  $fac.set("TestImageService", TestImageService);
})();



