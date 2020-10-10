
(function()
{

var routes=(function()
{
  $fac.inject(this,`responses, Exception, HtmlException`);
  var routelist={};
  
  return {
    
    set: function(path,func)
    {
      var p=path.split("/").map(w=>w.trim());
      p=p.filter(w=>w!=="");
      
      
      var r=routelist;
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
      
      var r=routelist;
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
      
      var response;
      if(args.length>0)
      {
        eval(`
        response=r['__func'](req, res, ${args.join(',')}, data);
        `);
      }
      else
      {
        eval(`
        response=r['__func'](req, res, data);
        `);
      }
      return response;
      
    }
    
  };
  
 })();



$fac.set("routes", routes);


})();


