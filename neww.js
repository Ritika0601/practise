
function js(test)
{
  var item=[];
 var text={};
 for(var i=0;i<test.length;i++)
 {
  var obj = test[i];
  for(var x in obj)
  {
    if(x=="name")
    {
      text.name=test[i][x];
    }
    else if(x=="gender")
    {
      text.gender=test[i][x];
    }
    else if(x=="address")
    {
      text.address=test[i][x];
    }

  }
  item[i]=text;
}
return(item);
}


exports.js=js;