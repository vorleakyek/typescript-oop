const mergeSortedArrays = (arr1, arr2) => {
  mergedArr = [...arr1, ...arr2];
  console.log(mergedArr);
  sortMergedArr = mergedArr.sort(compareNumbers);
  console.log(sortMergedArr);
};

const compareNumbers = (a, b) => a - b;

const mergeSortedArrays2 = (arr1, arr2) => {
  const mergedArr = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    if (shouldPushFirstArrayItem(arr1Item, arr2Item)) {
      mergedArr.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  console.log(mergedArr);
  return mergedArr;
};

const shouldPushFirstArrayItem = (arr1Item, arr2Item) => {
  return !arr2Item || arr1Item < arr2Item;
};

const result = mergeSortedArrays2([], [4, 6, 30]);
console.log(result);
