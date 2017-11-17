'use strict';

function collect_all_even(collection) {
  return collection.reduce((array, value) => {
    if (value % 2 === 0)
      array.push(value)
    return array
  }, [])
}

module.exports = collect_all_even;
