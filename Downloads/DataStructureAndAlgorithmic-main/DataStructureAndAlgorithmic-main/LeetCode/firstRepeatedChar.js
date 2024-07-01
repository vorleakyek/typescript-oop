const firstRepeatedChar = (array) => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      return array[i];
    }

    map.set(array[i], i);
  }
  return undefined;
};

const firstRepeatedChar2 = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    }

    map[arr[i]] = i;
  }
  return undefined;
}; //O(n)

const result = firstRepeatedChar2([2, 5, 5, 2, 3, 5, 1]);
console.log(result);
