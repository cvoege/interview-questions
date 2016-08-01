'use strict';

const compare = require('./compare');
const assertEqual = require('./assertEqual');

function targetSum(arr, target) {
  if (arr.length < 2) {
    return false;
  }
  let sorted = arr.sort(compare);
  let leftIndex = 0;
  let rightIndex = sorted.length - 1;
  while (leftIndex >= 0 && leftIndex < rightIndex && rightIndex < sorted.length) {
    let currentSum = sorted[leftIndex] + sorted[rightIndex];
    if (currentSum === target) {
      return true;
    }
    else if (currentSum > target) {
      rightIndex -= 1;
    }
    else {
      leftIndex += 1;
    }
  }
  return false;
}

let arr = [1, 28, 24, 1, 2, 3, 1, 9, 2, 9123, 12, 6, 1, 12, 1346, 13];

assertEqual(targetSum(arr, 2), true);
assertEqual(targetSum(arr, 3), true);
assertEqual(targetSum(arr, 4), true);
assertEqual(targetSum(arr, 9123 + 1346), true);
assertEqual(targetSum(arr, 9123 + 1347), false);

console.log('\nAll tests passed!');
