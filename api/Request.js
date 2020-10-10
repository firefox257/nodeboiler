




(function()
{
  
  var request={
    body:{
      
      json:function(req)
      {
        var data = [];
          req.on('data', chunk => {
            data.push(chunk)
          });
          req.on('end', () => {
            return JSON.parse(data);
          });
      },
      
    }
  };

$fac.set("request", request);

})();