'use strict';

function hybrid_operation_to_uneven(collection) {

  return collection.reduce((array, value) => {
    if (value % 2 !== 0)
      array.push(value * 3 + 2)
    return array
  }, [])
}

module.exports = hybrid_operation_to_uneven;
