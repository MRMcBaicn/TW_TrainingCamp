'use strict';
var single_element = function (collection) {
  let data = collection.filter((value, index) => index % 2 !== 0);
  let dataCount = data.reduce((array, value) => {
    let entry = array.find(ele => ele.key === value)
    entry ? entry.count++ : array.push({
      key: value,
      count: 1
    })
    return array
  }, [])
  return data.filter((value) => {
    let entry = dataCount.find(ele => ele.key === value)
    if (entry.count === 1)
      return true
    return false
  })
};
module.exports = single_element;
