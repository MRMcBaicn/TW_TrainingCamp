'use strict';
var calculate_median = function (collection) {
  let data = collection.reduce((array, value, index) => {
    if ((index + 1) % 2 === 0) {
      array.push(value)
    }
    return array
  }, [])
  let value, length = data.length
  if (length % 2 === 0)
    value = (data[length / 2] + data[length / 2 - 1]) / 2
  else
    value = data[Math.floor(length / 2)]
  return value
};
module.exports = calculate_median;
