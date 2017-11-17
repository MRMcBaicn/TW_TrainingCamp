'use strict';

function collect_min_number(collection) {
  return collection.reduce((minNumber, number) => {
    return minNumber > number ? number : minNumber
  })
}

module.exports = collect_min_number;

