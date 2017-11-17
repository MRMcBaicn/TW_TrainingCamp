'use strict';

function amount_even(collection) {

  return collection.reduce((sum, value) => {
    if (value % 2 === 0)
      sum += value
    return sum
  }, 0)
}

module.exports = amount_even;
