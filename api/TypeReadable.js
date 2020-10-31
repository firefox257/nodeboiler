var Readable = require("stream").Readable;


class TypeReadable 
{
  type;
  stream;
  size;
  range;
  constructor(type, read, size, range) 
  {
    if(type)
    {
      this.type=type;
    }
    else
    {
      this.type=".txt";
    }
    this.stream=read;
    this.size = size;
    this.range=range;
      
  }
};

$fac.set("TypeReadable", TypeReadable);


