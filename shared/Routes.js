
(function()
{

var routes=(function()
{
  $fac.inject(this,`Exception, HtmlException`);
  var routelist={};
  
  
  return {
    
    set: function(path,func)
    {
      var p=path.split("/");
      
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
      var p=path.split("/");
      
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
           //this.send(req, res,"/error/404");
           //return;
           
           throw HtmlException.notfound();
         }
         r=r[i];
       }
       
       
      }
      
      
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


