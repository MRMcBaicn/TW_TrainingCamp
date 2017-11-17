'use strict';

module.exports = function countSameElements(collection) {
  // return collection.reduce((array, word) => {
  //   let entry = array.find((value) => value.key === word)
  //   entry ? entry.count++ : array.push({
  //     key: word,
  //     count: 1
  //   })
  //   return array
  // }, [])

  let data = []
  for (var ele of collection) {
    let entry = findElement(data,ele)
    entry ? entry.count++ : data.push({
      key: ele,
      count: 1
    })
  }
  return data
}

var findElement = function (data, value) {
  for (var obj of data) {
    if (obj.key == value)
      return obj
  }
  return null
}