

(function()
{

var $fac=(function()
{
  
  var items={};
  
  return{
    
    set:function(n,item)
    {
      items[n]=item;
    },
    inject: function(scope, s)
    {
      s=s.split(",").map(w=>w.trim());
      s.filter(w=>w!=="");
      s.map(w=>scope[w]=items[w]);
    }
    
  };
  
})();

global.$fac=$fac;




})();





 