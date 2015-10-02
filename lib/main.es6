
export default function (arr, thing, opts = {}) {
  let len = arr.length;
  if (!len) {
    return -1;
  }

  if (typeof opts === 'number') {
    opts = { start: opts };
  }

  let {
    start = 0,
    end = len,
    filter = 0,
    cmp = strictEqual,
  } = opts;

  start = Math.max(start < 0 ? len + start : start, 0);
  end = Math.min(end < 0 ? len + end : end, len);

  if (start >= end || start >= len || end <= 0) {
    return -1;
  }

  if (typeof filter === 'number') {
    return indexOf(arr, len, start, end, thing, cmp, filter);
  }

  let ret = [];
  let i = indexOf(arr, len, start, end, thing, cmp, 0);
  while (i !== -1) {
    ret.push(i++);
    i = indexOf(arr, len, i, end, thing, cmp, 0);
  }
  return ret.length ? ret : -1;
}

function indexOf(arr, len, i, end, needle, cmp, filter) {
  let step = 1;
  if (filter < 0) {
    [i, end] = [end - 1, i - 1];
    step = -1;
    filter = -1 - filter;
  }

  while (i !== end) {
    if (cmp(arr[i], needle) && filter-- === 0) {
      return i;
    }
    i += step;
  }

  return -1;
}

function strictEqual(a, b) {
  return a === b;
}

