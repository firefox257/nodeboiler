
class Factory
{
  
   #items;
   constructor()
   {
     this.#items={};
   }
  
  set(n,item)
  {
    this.#items[n]=item;
  }
  inject(scope, s)
  {
    s=s.split(",").map(w=>w.trim());
    s.filter(w=>w!=="");
    s.map(w=>scope[w]=this.#items[w]);
  }
    
};
  
module.exports=Factory;


