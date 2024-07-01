// [1, 2, 5] and [-1, 2, 5, 7 ,9]

const hasCommon = (arr1, arr2) => {
  let isFound = false;
  arr1.forEach((elem1) => {
    arr2.forEach((elem2) => {
      if (elem1 === elem2) {
        isFound = true;
      }
    });
  });
  return isFound;
};

const hasCommon1 = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

hasCommon2 = (arr1, arr2) => {
  for (let e1 of arr1) {
    for (let e2 of arr2) {
      if (e1 === e2) {
        return true;
      }
    }
  }
  return false;
};

console.log(hasCommon([1, 3, 4], [-1, 2, 4, 5, 7, 9]));
console.log(hasCommon1([1, 3, 4], [-1, 2, 4, 5, 7, 9]));
console.log(hasCommon2([1, 3, 4], [-1, 2, 4, 5, 7, 9]));
