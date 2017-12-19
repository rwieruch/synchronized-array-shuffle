'use strict';
const shuffle = require('knuth-shuffle');

const knuthShuffle = shuffle.knuthShuffle;

module.exports = (arrays) => {
  if (!arrays.length) {
    throw new Error('not arrays');
  }

  if (!arrays[0].length) {
    throw new Error('array is empty');
  }

  const lengths = arrays.map(array => array.length);
  const size = lengths.pop();

  if (!areSameSize(lengths, size)) {
    throw new Error('arrays are not same size');
  }

  const indexes = Array(size).fill().map((v, k) => k);
  const shuffledIndexes = knuthShuffle(indexes);

  return arrays.map(array => {
    return array.reduce((result, value, key) => {
      result[shuffledIndexes[key]] = value;
      return result;
    }, []);
  });
}

function areSameSize(lengths, initSize) {
  let isSameSize = true;

  while (lengths.length) {
    if (!isSameSize) {
      return isSameSize;
    }

    if (initSize !== lengths[lengths.length - 1]) {
      isSameSize = false;
    } else {
      lengths.pop();
    }
  }

  return isSameSize;
}
