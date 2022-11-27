// Write a JavaScript program to sort a list of elements using Merge sort. [5 marks]
// ○. Test Data [1,3,4,3,7,9]
// ■. Output [1,3,3,4,7,9]


const MergeArr = (left_arr, right_arr) => {
    let arr = [];
    while(left_arr.length && right_arr.length){
        if(left_arr[0] < right_arr[0]){
            arr.push(left_arr.shift());
        }else{
            arr.push(right_arr.shift());
        }
    }
    return [...arr, ...left_arr,...right_arr ]
};

const MergeSort = (arr) => {
    const middle = arr.length/2;
    if(arr.length <2){
        return arr ;
    }
    const left_arr = arr.splice(0, middle);
    return MergeArr(MergeSort(left_arr), MergeSort(arr));
};
