'use strict';

function calculate_elements_sum(collection, element) {
  return collection.findIndex(value => value === element)
}

module.exports = calculate_elements_sum;
