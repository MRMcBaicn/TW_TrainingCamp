'use strict';
var calculate_average = function (collection) {
  let data = collection.reduce((obj, value, index) => {
    if ((index + 1) % 2 === 0) {
      obj.sum += value
      obj.count++
    }
    return obj
  }, {
    sum: 0,
    count: 0
  })
  return data.sum / data.count
};
module.exports = calculate_average;
