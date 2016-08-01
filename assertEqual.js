function isSame(value, expected) {
  if (Array.isArray(value) && Array.isArray(expected)) {
    return value.length === expected.length && value.every((entry, index) => entry === expected[index]);
  }
  return value === expected;
}

module.exports = function assertEqual(value, expected) {
  if (isSame(value, expected)) {
    process.stdout.write('.');
  }
  else {
    throw new Error(`Test failed! Expected ${value} to equal ${expected}`);
  }
};
