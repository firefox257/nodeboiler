var fs =require("fs");
function include(p)
{
  eval(fs.readFileSync(p)+'');
}

include('./api/Configuration.js');
include('./shared/Exception.js');
include('./shared/Routes.js');
include("./shared/Utils.js");



 