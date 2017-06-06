var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/hello',function(req,res){
var data = req.body.test;

function js(data)
{
  var item=[];
 var text={};
 for(var i=0;i<data.length;i++)
 {
  var obj = data[i];
  for(var x in obj)
  {
    if(x=="name")
    {
      text.name=data[i][x];
    }
    else if(x=="gender")
    {
      text.gender=data[i][x];
    }
    else if(x=="address")
    {
      text.address=data[i][x];
    }

  }
  item[i]=text;
}
return(item);
}
var returnData = js(data);
res.send(returnData);
}).listen(8084);