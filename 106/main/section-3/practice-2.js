'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

  // objectB.value.map(value => {
  //   let entry = collectionA.find(element => element.key === value)
  //   if (entry)
  //     entry.count -= Math.floor(entry.count / 3)
  // })
  // return collectionA
  for (var obj of objectB.value) {
    let entry = findElement(collectionA, obj)
    entry ? entry.count -= Math.floor(entry.count / 3) : null
  }
  return collectionA
}

var findElement = function (data, value) {
  for (var obj of data) {
    if (obj.key == value)
      return obj
  }
  return null
}