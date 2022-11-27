// Write a Javascript program to find the second largest number in an array.


const secondLargest = (arr) => {
    let largest = 0;
    let secondLargest = 0;
    if(arr[0] > arr[1]){
        largest = arr[0];
        secondLargest = arr[1];
    }
    else{
        largest = arr[1];
        secondLargest = arr[0];
    }

    for (let i =1 ; i<arr.length ; ++i){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }else{
            secondLargest = secondLargest;
            largest = largest;
        }
    }
    return secondLargest ;
}