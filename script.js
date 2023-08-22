const arr = [1, 1, 1, 0, 4, 1, 9, 1];

const majorityElement = (arr = []) => {
  let majorityCandidate = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (count == 0) {
      majorityCandidate = arr[i];
    }
    if (arr[i] == majorityCandidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return majorityCandidate;
};

console.log(majorityElement(arr));
