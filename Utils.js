



exports.trackUpdate function(d)
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