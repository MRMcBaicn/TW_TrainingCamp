'use strict';

function compute_average(collection) {
  return collection.reduce((sum, value) => sum + value) / collection.length
}

module.exports = compute_average;
