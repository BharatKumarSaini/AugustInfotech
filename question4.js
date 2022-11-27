// Write a JavaScript program to compute the union of two arrays. [2.5 marks]
// ○. Sample Data : console.log(union([1, 2, 3], [100, 2, 1, 10]));
// ■. Output: [1, 2, 3, 10, 100]


const myFunction = (arr1, arr2, ) => {
    const newArr = [];

    for(var j=0; j<arr1.length ; ++i){
        let flag =0;
        for(var k = 0 ; k<arr2.length; ++k){
            if(arr1[j] === arr2[k]){
                arr2.splice(k,1);
                k--;
                flag = 1;
            }
            if(flag == 0 ){
                newArr.unshift(arr1[j]);
            }
        }
    }
    newArr.unshift(arr2);
    return newArr;
};