'use strict';

function double_to_one(collection) {

  return collection.reduce((array, value) => {
    value.map(ele => {
      if (array.indexOf(ele) === -1)
        array.push(ele)
    })
    return array
  }, [])
}

module.exports = double_to_one;
