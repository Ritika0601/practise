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
   for(var x in test)
   {
     console.log(x);
     console.log(typeof(x));
       if(test.hasOwnProperty(x))
        {
            if(x=="name")
            {
              x="key";
              text[x] =test.name;
            }
              else if(x=="children")
            {
                 x="value";
                 text[x]=test.children;
                 var obj1={};
                 var obj2={};
                 var arr=[];
                 var i=0;
                 var arr= text.value;
                 
                     for(var i=0;i<arr.length;i++)
                     {
                         if(i==0)
                         {
                            obj1=arr[i];
                            for(var z in obj1)
                            {
                              if(obj1.hasOwnProperty(z))
                                    {
                                   if(z=="name")
                                       {
                                           z="key";
                                           obj2[z] =text.value.name;
                                       }
                                   else if(x=="children")
                                      {
                                           z="value";
                                        obj2[z]=text.value.children;
                                       }
                                     }
                              }
                         }
                         
                     }
                
            


         
            }
         
        }
        }    
console.log(text);
}
func(test);
