'use strict';

function hybrid_operation(collection) {

  return collection.reduce((sum, value) => {
    sum += value * 3 + 2
    return sum
  }, 0)
}

module.exports = hybrid_operation;
