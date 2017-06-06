var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var new
app.post('/hello',function(req,res){
var data = req.body.test;
var key1=req.body.key1;
var key2=req.body.key2;
var key3=req.body.key3;
var key4=req.body.key4;

function js(data,key1,key2,key3,key4)

{
  var item=[];
     var text={};
  for(var i=0;i<data.length;i++)
  {
    var obj=data[i];
       for(var x in obj)
        {
           if(x==key1)
           {
              text[key1]=obj[key1];
           }
    
           if(x==key2)
           {
              text[key2]=obj[key2]
           }
           if(x==key3)
           {
              text[key3]=obj[key3]
           }
           if(x==key4)
           {
              text[key4]=obj[key4]
           }
        }
      item[i]=text;
   }

res.send(item);
}

js(data,key1,key2,key3,key4);

}).listen(8084);
