


(function()
{

var routes=(function()
{
  $fac.inject(this,`
  request, 
  response,
  Exception, 
  HtmlException`);
  
  var routelist={};
  
  
  return {
    
    set: function(method, path,func)
    {
      var p=path.split("/").map(w=>w.trim());
      p=p.filter(w=>w!=="");
      
      
      if(!routelist[method])routelist[method]={};
      var r=routelist[method];
      if(!r[p.length])r[p.length]={}
      r=r[p.length];
      
      var c=0;
      
      for(var i1 in p)
      {
       var i=p[i1];
       var name=undefined;
       if(i.startsWith("${"))
       {
         name=i.substring(2, i.length-1);
         i="__all";
         
         
         
       }
       if(!r[i])
       {
         r[i]={};
         
       }
       r.__name=name;
       r._node=i;
       r=r[i];
       
      }
      
      r['__func']=func;
      
    },
    send: async function(req, res, path, data)
    {
      
      var method=req.method;
      
      //console.log(method+ " sending "+path);
      
      var p=path.split("/").map(w=>w.trim());
      p=p.filter(w=>w!=="");
      
      
      if(!routelist[method])
      {
        
        throw HtmlException.notfound();
       }
      var r=routelist[method];
      r=r[p.length];
      if(!r)
      {
        
        throw HtmlException.notfound();
      }
      
      var c=0;
      
      var args={};
      
      
      for(var i1 in p)
      {
       var i=p[i1];
       
       if(r._node=="__all")
       {
         
         if(isNaN(i))
         {
           args[r.__name]=i;
         }
         else
         {
           args[r.__name]=Number(i);
         }
         r=r["__all"];
       }
       else
       {
         if(!r[i])
         {
           
           throw HtmlException.notfound();
         }
         r=r[i];
       }
       
       
      }
      
      if(!r['__func'])
      {
        throw HtmlException.notfound();
      }
      
      
      
      
      try
      {
        
          var res2=await r['__func'](request(req), response(res), args);
          
          res.end();
      }
      catch(err)
      {
        console.log(err);
        HtmlException.error(err);
      }
      
      
      
      
    }
    
  };
  
 })();



$fac.set("routes", routes);


})();


