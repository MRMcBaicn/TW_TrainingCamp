'use strict';
var even_group_calculate_average = function (collection) {
  let data = collection.reduce((array, value, index) => {
    if ((index + 1) % 2 === 0 && value % 2 === 0) {
      let unit = value.toString().length;
      let entry = array.find(ele => ele.unit === unit)
      if (entry) {
        entry.sum += value
        entry.count++
      } else {
        array.push({
          unit: unit,
          sum: value,
          count: 1
        })
      }
    }
    return array
  }, [])

  let result = data.reduce((array, value) => {
    array.push(value.sum / value.count)
    return array
  }, []).sort((a, b) => a - b)
  return result.length == 0 ? [0] : result
};
module.exports = even_group_calculate_average;
