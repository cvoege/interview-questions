'use strict';

const assertEqual = require('./assertEqual');
const compare = require('./compare');

function oddManOut(arr) {
  let sorted = arr.sort(compare);
  for (let i = 0; i < sorted.length; i += 2) {
    if (sorted[i] !== sorted[i + 1]) {
      return sorted[i];
    }
  }
  throw new Error('Array has no odd man out!');
}

assertEqual(oddManOut([1, 1, 2, 2, 3]), 3);
assertEqual(oddManOut([1, 1, 2, 2, 1]), 1);
assertEqual(oddManOut([1, 1, 0, 2, 2, 1]), 0);
assertEqual(oddManOut([5, 5, 5, 6, 5]), 6);
