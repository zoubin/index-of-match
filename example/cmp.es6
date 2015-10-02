var indexOf = require('..');

console.log(
  // ===
  indexOf([1, 2, 3, 2, 1], 2)
  // 1
);

console.log(
  // ==
  indexOf([1, '2', 3, 2, 1], 2, {
    cmp: function (a, b) {
      return a == b;
    },
    filter: -1,
  })
  // 3
);

console.log(
  // <
  indexOf([1, '2', 3, 2, '1'], 3, {
    cmp: function (a, b) {
      return a < b;
    },
    filter: true,
  })
  // [0, 1, 3, 4]
);

