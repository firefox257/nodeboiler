




(function()
{
  
  var request={
    body:{
      
      json:function(req, callback)
      {
          
          var body = '';
          req.on('data', function (data) 
          {
            body += data;
            if (body.length > 1e8) 
            { 
                request.connection.destroy();
            }
          });
          req.on('end', function () 
          {
            callback(JSON.parse(body));
          });
          
      }
      
      
      
      
      
      
    }
  };

$fac.set("request", request);

})();