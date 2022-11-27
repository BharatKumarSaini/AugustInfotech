// Write a JavaScript program to find the unique elements from two arrays. [2.5
//     marks]
//     ○. Test Data: console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//     ■. Output: ["1", "2", "3", "10", "100"]
//     ○. Test Data: console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
//     ■. Output: ["1", "2", "3", "4", "5", "6"]
    


const myFunction = (arr1, arr2, ) => {
    var a1= out(arr1,true);
    var a2= out(arr2,true);
    
   var a=[], finalArr=[];
    for(var i=0;i< a1.length;i++)
      a[a1[i]]=false;
    for(i=0;i< a2.length;i++)
    if(a[a2[i]]===true) 
       { delete a[a2[i]];}
      else a[a2[i]]=true;
    for(var k in a)
    finalArr.push(k);
    return finalArr;   
    };

 var out = (a, shallow,r) => {
    if(!r){ r = [];}
  if (shallow) {
    return r.concat.apply(r,a);
    }  
     for(i=0; i< a.length; i++){
          if(a[i].constructor == Array){
              out(a[i],shallow,r);
          }else{
              r.push(a[i]);
          }
      }
      return r;
  };