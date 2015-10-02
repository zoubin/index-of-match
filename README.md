# x-index-of
Look up indexes in a collection with custom compare function.

- [Specify a searching range](#custom-range)
- [Filter the searching results](#custom-filter)
- [Specify a compare function](#custom-compare)

## Usage

```javascript
var indexOf = require('x-index-of');
```

### Custom range
Specify the searching range.

```javascript
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

```

### Custom filter
Filter the results.

```javascript
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

```

### Custom-compare
Compare the custom way.

```javascript
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

```

## API

`indexOf(collection, needle, opts)`

### opts

#### start

Type: `Number`

Default: `0`

#### end

Type: `Number`

Default: `collection.length`

#### filter

Type: `Number`

Default: `0`

If `Number`, only one index will be retured.
If negative, it indexes the results from the end.

If other than `Number`,
all matches will be returned.

#### cmp

Type: `Function`

Signature: `cmp(val, needle)`

Default: `===`

