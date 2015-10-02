import { test } from 'tape';
import indexOf from '../lib/main';

test('Array.prototype.indexOf', function(t) {
  t.equal(
    indexOf([]),
    -1,
    'empty array'
  );

  t.equal(
    indexOf([1, 2], 2),
    1,
    'found'
  );

  t.equal(
    indexOf([1, 2], 3),
    -1,
    'not found'
  );

  t.end();
});

test('filter', function(t) {
  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, { filter: 1 }),
    3,
    'filter, found'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, { filter: 2 }),
    -1,
    'filter, not found'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, { filter: -1 }),
    3,
    'negative filter, found'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, { filter: -3 }),
    -1,
    'negative filter, not found'
  );

  t.same(
    indexOf([1, 2, 3, 2, 1], 2, { filter: [] }),
    [1, 3],
    'find all'
  );

  t.end();
});

test('cmp', function(t) {
  t.equal(
    indexOf([1, 2, 3, 2, 1], null, {
      cmp: function (v) {
        return v === 2;
      },
    }),
    1,
    'cmp, found'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], null, {
      cmp: function (v) {
        return v > 3;
      },
    }),
    -1,
    'cmp, not found'
  );

  t.end();
});

test('range', function(t) {
  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, -10),
    1,
    'small negative start'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, -3),
    3,
    'negative start'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, 2),
    3,
    'start'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], 3, 5),
    -1,
    'big start'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, {
      end: -10,
    }),
    -1,
    'small negative end'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, {
      start: 2,
      end: -1,
    }),
    3,
    'negative end'
  );

  t.equal(
    indexOf([1, 2, 3, 2, 1], 2, {
      end: 2,
    }),
    1,
    'end'
  );

  t.end();
});

