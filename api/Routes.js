
(function()
{

var routes=(function()
{
  $fac.inject(this,`responses, Exception, HtmlException`);
  var routelist={};
  
  return {
    
    set: function(method, path,func)
    {
      var p=path.split("/").map(w=>w.trim());
      p=p.filter(w=>w!=="");
      
      
      if(!routelist[method])routelist[method]={};
      var r=routelist[method];
      
      var c=0;
      
      for(var i1 in p)
      {
        var i=p[i1];
       if(i.startsWith("${"))
       {
         i="__all";
       }
       if(!r[i])
       {
         r[i]={};
         
       }
       r._node=i;
       r=r[i];
       
      }
      
      r['__func']=func;
      
    },
    send: function(req, res, path, data)
    {
      var p=path.split("/").map(w=>w.trim());
      p=p.filter(w=>w!=="");
      
      
      if(!routelist[req.method.toUpperCase()])throw HtmlException.notfound();
      var r=routelist[req.method.toUpperCase()];
      var c=0;
      
      var args=[];
      for(var i1 in p)
      {
       var i=p[i1];
       
       if(r._node=="__all")
       {
         if(isNaN(i))
         {
           args.push(`"${i}"`);
         }
         else
         {
           args.push(Number(i));
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
      
      
      if(!r['__func'])throw HtmlException.notfound();
      
      
      if(args.length>0)
      {
        eval(`
        r['__func'](req, res, ${args.join(',')}, data);
        `);
      }
      else
      {
        eval(`
        r['__func'](req, res, data);
        `);
      }
      
      
    }
    
  };
  
 })();



$fac.set("routes", routes);


})();


