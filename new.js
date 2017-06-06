function func()
{
var test = [{
    "_id": "592d5188e105cf49838ab0e5",
    "index": 0,
    "guid": "55edb76c-f6ff-4f0c-a04e-c2517ccc9902",
    "isActive": false,
    "balance": "$1,622.20",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Glass Mayer",
    "gender": "male",
    "company": "COMTEXT",
    "email": "glassmayer@comtext.com",
    "phone": "+1 (992) 499-2268",
    "address": "229 Howard Alley, Irwin, Kansas, 5006",
    "about": "Anim enim laborum deserunt in est ea laboris. Ad adipisicing cillum est laboris tempor eu non ex non veniam adipisicing laboris ad. Laboris aliqua pariatur pariatur aute nostrud aliquip ex mollit esse ut Lorem. Labore ullamco cillum ea quis in velit tempor mollit est fugiat.\r\n",
    "registered": "2014-12-29T10:08:59 -06:-30",
    "latitude": -52.672735,
    "longitude": 89.373593,
    "tags": [
      "sint",
      "occaecat",
      "adipisicing",
      "et",
      "et",
      "adipisicing",
      "velit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Frieda Fitzgerald"
      },
      {
        "id": 1,
        "name": "Carlson Boyer"
      },
      {
        "id": 2,
        "name": "Flowers Blanchard"
      }
    ],
    "greeting": "Hello, Glass Mayer! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },{
    "_id": "592d5188e105cf49838ab0e5",
    "index": 0,
    "guid": "55edb76c-f6ff-4f0c-a04e-c2517ccc9902",
    "isActive": false,
    "balance": "$1,622.20",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Glass Mayer",
    "gender": "male",
    "company": "COMTEXT",
    "email": "glassmayer@comtext.com",
    "phone": "+1 (992) 499-2268",
    "address": "229 Howard Alley, Irwin, Kansas, 5006",
    "about": "Anim enim laborum deserunt in est ea laboris. Ad adipisicing cillum est laboris tempor eu non ex non veniam adipisicing laboris ad. Laboris aliqua pariatur pariatur aute nostrud aliquip ex mollit esse ut Lorem. Labore ullamco cillum ea quis in velit tempor mollit est fugiat.\r\n",
    "registered": "2014-12-29T10:08:59 -06:-30",
    "latitude": -52.672735,
    "longitude": 89.373593,
    "tags": [
      "sint",
      "occaecat",
      "adipisicing",
      "et",
      "et",
      "adipisicing",
      "velit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Frieda Fitzgerald"
      },
      {
        "id": 1,
        "name": "Carlson Boyer"
      },
      {
        "id": 2,
        "name": "Flowers Blanchard"
      }
    ],
    "greeting": "Hello, Glass Mayer! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },{
    "_id": "592d5188e105cf49838ab0e5",
    "index": 0,
    "guid": "55edb76c-f6ff-4f0c-a04e-c2517ccc9902",
    "isActive": false,
    "balance": "$1,622.20",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Glass Mayer",
    "gender": "male",
    "company": "COMTEXT",
    "email": "glassmayer@comtext.com",
    "phone": "+1 (992) 499-2268",
    "address": "229 Howard Alley, Irwin, Kansas, 5006",
    "about": "Anim enim laborum deserunt in est ea laboris. Ad adipisicing cillum est laboris tempor eu non ex non veniam adipisicing laboris ad. Laboris aliqua pariatur pariatur aute nostrud aliquip ex mollit esse ut Lorem. Labore ullamco cillum ea quis in velit tempor mollit est fugiat.\r\n",
    "registered": "2014-12-29T10:08:59 -06:-30",
    "latitude": -52.672735,
    "longitude": 89.373593,
    "tags": [
      "sint",
      "occaecat",
      "adipisicing",
      "et",
      "et",
      "adipisicing",
      "velit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Frieda Fitzgerald"
      },
      {
        "id": 1,
        "name": "Carlson Boyer"
      },
      {
        "id": 2,
        "name": "Flowers Blanchard"
      }
    ],
    "greeting": "Hello, Glass Mayer! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  }];

function js()
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
document.getElementById("b1").innerHTML = js(test)
}
exports.func=func;







                           obj1.key=text[x].name;
                           obj1.value=text[x][z].children;

                           
                           for(var k in obj1.value)
                           {
                              obj2.key=obj1.value[k].name;
                           }