function countZeroes(arr) {
    let start = binarySearch(arr)
    if (start === -1 ) return 0;
    
    return arr.length - start
}



function binarySearch(arr){
    let left = 0;
    let rigt = arr.length - 1;
    if(left <= right){
     let mid = left + Math.floor((left + right)/2); //left will change
     if((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0 ) 
     return mid;
    }
    return -1; 
  }

  module.exports = countZeroes