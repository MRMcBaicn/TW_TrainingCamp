'use strict';

function collect_max_number(collection) {
  return collection.reduce((maxNumber, number) => {
    return maxNumber < number ? number : maxNumber
  })
}

module.exports = collect_max_number;
