'use strict';

function average_uneven(collection) {

  let data = collection.reduce((obj, value) => {
    if (value % 2 !== 0) {
      obj.sum += value
      obj.count++
    }
    return obj
  }, {
    sum: 0,
    count: 0
  })
  return data.sum/data.count
}

module.exports = average_uneven;
