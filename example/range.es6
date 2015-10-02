var indexOf = require('..');

console.log(
  // start = 0
  indexOf([1, 2, 3, 2, 1], 2)
  // 1
);

console.log(
  // start = 2
  indexOf([1, 2, 3, 2, 1], 2, -3)
  // 3
);

console.log(
  // start = 2, end = 3
  indexOf([1, 2, 3, 2, 1], 2, {
    start: 2,
    end: 3,
  })
  // -1 
);

