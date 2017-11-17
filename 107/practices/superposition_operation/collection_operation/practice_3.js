'use strict';

function hybrid_operation_to_uneven(collection) {

  return collection.reduce((sum, value) => {
    if (value % 2 !== 0)
    sum+=value * 3 + 5
    return sum
  }, 0)
}

module.exports = hybrid_operation_to_uneven;

