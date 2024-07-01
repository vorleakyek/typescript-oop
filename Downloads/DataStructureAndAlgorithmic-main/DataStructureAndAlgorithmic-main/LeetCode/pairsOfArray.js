function pairsOfArr(arr) {
  //[1,2,3,4,5] -> (1,2) ... (1,5)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`(${arr[i]},${arr[j]})`);
    }
  }
}

pairsOfArr([1, 2, 3, 4, 5]);
