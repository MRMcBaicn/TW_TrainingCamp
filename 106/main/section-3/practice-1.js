'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

  // objectB.value.map((value) => {
  //   let entry = collectionA.find((element) => element.key === value)
  //   if (entry)
  //     entry.count--
  // })
  // return collectionA
  for(var ele of objectB.value)
  {
    let entry=findElement(collectionA,ele)
    entry?entry.count--:null
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