var test={
            "name": "World",
             "children":[
                         { 
                           "name": "US",
                           "children":[
                                       { "name": "CA" },
                                       { "name": "NJ" }
                                      ]
                          }, 
                          { "name": "INDIA",
                            "children": [
                                          { "name": "OR" },
                                          { "name": "TN" },
                                          { "name": "AP" }
                                        ]
                          }
                        ]
          };


function func(test)
{
   var text ={};
   var item =[];
   var obj1={};
   var obj2={};
   for(var x in test)
   {
    
       if(test.hasOwnProperty(x))
        {
          
              if(typeof(test[x])=="string")
                 { 
                   if(x=="name")
                     {
                         x="key";
                         text[x] =test.name;
                      }
                  }
                  else if(typeof(test[x]=="object"||"array"))
                  {
                  
                       for(var z of test[x])
                        {
                         
                           for(var zz in z)
                           {
                            console.log((zz))
                             
                           }
                           break;
                           
                        }
                  
                  }
    
           }
      
       }

     }
func(test);
