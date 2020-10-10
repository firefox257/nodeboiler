




(function()
{

function trackUpdate(d)
{
  
  var s=`{_d:d,update:{_id:d._id},`;
  for(var i in d)
  {
    s+=`get ${i}()
    {
      return this._d.${i};
    },
    set ${i}(v)
    {
      this.update['${i}']=v;
      this._d.${i}=v;
    },
    
    `;
    
  }
  s+=`
  }`;
  var ob;
  eval(`ob=${s};`);
  return ob;
  
  
}

function mapper(d1, d2)
{
  
  for(var i in d2)
  {
    
    if(d1.hasOwnProperty(i))
    {
      
      d1[i]=d2[i];
    }
    
  }
  
  return d2;
}


$fac.set("trackUpdate", trackUpdate);
$fac.set("mapper", mapper);


})();
