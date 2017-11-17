'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((sum,value)=>sum+value)
}

module.exports = calculate_elements_sum;

