function pairSum(array, num) {
    if (array.length <= 1) {
      return false
    } else {
      for (i=0; i< array.length; i++) {
        const number = num - array[i] ;
        if (isNumberIncluded(array,number,i)) {
          return true;
        }
      }
      return false;
    }
  }
    
    
    
  function isNumberIncluded(array, num , index) {
    for(let i=index+1; i<array.length; i++) {
      if (array[i] === num) {
        return true;
      }
    }
    return false; 
  }
  
  const result = pairSum([1, 2, 3, 4, 5], 10)  
  console.log(result); 
  
  // pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
  // pairSum([1, 2, 3, 4, 5], 10) -> false
  // pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
  // pairSum([1, 2, 3, 7, 8], 7) -> false
  // pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
  // pairSum([1, 2, 3, 4, 5], 2) -> false