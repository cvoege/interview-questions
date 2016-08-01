'use strict';

const assertEqual = require('./assertEqual');

function maxSubarray(arr) {

  return arr;
}

assertEqual(maxSubarray([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertEqual(maxSubarray([1, -2, 3, 4, 5]), [3, 4, 5]);
assertEqual(maxSubarray([1, -2, 3, -9, 5]), [5]);
assertEqual(maxSubarray([1, -1, 3, -1, 5]), [1, -1, 3, -1, 5]);
assertEqual(maxSubarray([1, -1, 1, -1, 5]), [5]);
