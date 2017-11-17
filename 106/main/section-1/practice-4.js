'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  // return collectionA.filter((value)=>
  //  objectB.value.indexOf(value.key)!==-1).map((value)=> value.key)
  let data = []
  for (let i = 0, length = collectionA.length; i < length; i++) {
    if (objectB.value.indexOf(collectionA[i].key) !== -1)
      data.push(collectionA[i].key)
  }
  return data
}