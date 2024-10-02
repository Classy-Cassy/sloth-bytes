function countTrue(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        //true is treated as 1 and false is treated as 0
        //in this context
        count += arr[i];
    }
    return count;
}


console.log(countTrue([])); //0
console.log(countTrue([true, false, false, true, false])); //2
console.log(countTrue([false, false, false, false])); //0
