var indexOf = require('..');

console.log(
  // pick up the first match
  indexOf([1, 2, 3, 2, 1], 2)
  // 1
);

console.log(
  // pick up the second match
  indexOf([1, 2, 3, 2, 1], 2, { filter: 1 })
  // 3
);

console.log(
  // pick up the last match
  indexOf([1, 2, 3, 2, 1], 2, { filter: -1 })
  // 3
);

console.log(
  // pick up all matches
  indexOf([1, 2, 3, 2, 1], 2, { filter: true })
  // [1, 3]
);

