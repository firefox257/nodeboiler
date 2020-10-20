var fs=require("fs");
var mime =require("mime-types");



(function()
{
  $fac.inject(this,"header");
  $fac.inject(this,"NotFoundException");
  class FileResponse
  {
    #res;
    #head;
    constructor(res)
    {
      this.#res=res;
      this.#head=new header();
      this.#head.list={'Content-Type': 'application/json'};
    }
    setHeader(v)
    {
      this.#head.list=v;
    }
    send(code,path)
    {
      
      
      
      var stat=fs.statSync(path);
      //console.log(stat);
      
      
      var h={
             'Content-Length': stat.size,
             'Content-Type': mime.lookup(path)
          };
      console.log(h);
      this.#res.writeHead(200, h);
      fs.createReadStream(path).pipe(this.#res);
      
      this.#res.end();
      
      
    }
    
    
  };
  
  $fac.set("FileResponse", FileResponse);

})();